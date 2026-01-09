import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RECIPE_CONVERTER_SYSTEM_PROMPT = `
You are The Alchemist of the Glutenberg Bible. Your mission is to take any recipe provided by the user (image or text) and transmute it into a healthier, tastier, and strictly GLUTEN-FREE version.
Maintain an esoteric, old-world, slightly biblical but warm tone.
If the input is an image, analyze it to identify the dish.
Your output must be valid Markdown.
Structure the response as:
## [New Esoteric Name of Dish]
*"[A short, wise, or mystical quote about the dish]"*

**The Transmutation:**
[Briefly explain how you made it healthier and gluten-free]

**Ingredients:**
- [List of ingredients]

**The Ritual:**
1. [Step-by-step instructions]

**Alchemist's Notes:**
[Tips for success]
`;

const PANTRY_ORACLE_SYSTEM_PROMPT = `
You are the Pantry Oracle of the Glutenberg Bible. The user will provide a list of ingredients they have.
You must divine a single, delicious, hearty, and healthy GLUTEN-FREE recipe they can make.
Maintain an old-world, wise, and nurturing tone.
Your output must be valid Markdown.
Structure the response as:
## [Name of the Divined Dish]
*"[A comforting quote about making do with what one has]"*

**The Vision:**
[Why this dish is perfect for their ingredients]

**Ingredients:**
- [List]

**The Ritual:**
1. [Instructions]
`;

export const convertRecipe = async (input: string | File): Promise<string> => {
  try {
    let content: any;

    if (typeof input === 'string') {
      content = input;
    } else {
      // Handle image file
      const base64 = await fileToBase64(input);
      content = {
        parts: [
          {
            inlineData: {
              mimeType: input.type,
              data: base64,
            },
          },
          {
            text: "Transmute this dish into a gluten-free masterpiece.",
          },
        ],
      };
    }

    const response = await ai.models.generateContent({
      model: typeof input === 'string' ? 'gemini-3-flash-preview' : 'gemini-2.5-flash-image',
      contents: content,
      config: {
        systemInstruction: RECIPE_CONVERTER_SYSTEM_PROMPT,
      },
    });

    return response.text || "The spirits are silent. Please try again.";
  } catch (error) {
    console.error("Alchemist error:", error);
    return "The alchemy failed. Perhaps the ingredients were too corrupt. Try again.";
  }
};

export const consultPantry = async (ingredients: string, constraints?: string): Promise<string> => {
  try {
    const prompt = `I have these ingredients: ${ingredients}. ${constraints ? `Constraints: ${constraints}` : ''}. What shall I prepare?`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: PANTRY_ORACLE_SYSTEM_PROMPT,
      },
    });

    return response.text || "The mists obscure the vision. Try listing your ingredients again.";
  } catch (error) {
    console.error("Oracle error:", error);
    return "The oracle is resting. Please inquire later.";
  }
};

// Helper to convert File to Base64 string (raw base64, no data uri prefix for API sometimes, but @google/genai usually takes standard)
// Actually the @google/genai expects just the base64 string for inlineData.data
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data:image/jpeg;base64, prefix
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};
