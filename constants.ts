
import { Recipe, GrainInfo, Chapter } from './types';

export const SACRED_GRAINS: GrainInfo[] = [
  {
    name: "Quinoa",
    title: "The Mother Grain",
    description: "Sacred to the Incas, a complete protein powerhouse.",
    icon: "🌾",
    benefits: ["Complete protein (all 9 amino acids)", "Rich in iron & magnesium", "High fiber", "Supports heart health"]
  },
  {
    name: "Amaranth",
    title: "The Immortal Grain",
    description: "Food of the Aztecs, known for its moisture-retaining qualities.",
    icon: "🌿",
    benefits: ["High lysine content", "Rich in antioxidants", "Supports cholesterol health", "Calcium rich"]
  },
  {
    name: "Teff",
    title: "The Tiny Powerhouse",
    description: "Grain of Ethiopia, smallest grain in the world but mighty in iron.",
    icon: "🌱",
    benefits: ["Highest calcium content", "Excellent source of Vitamin C", "Rich in resistant starch", "Steady energy"]
  },
  {
    name: "Sorghum",
    title: "The Resilient One",
    description: "Ancient African grain, high in antioxidants and versatility.",
    icon: "🍃",
    benefits: ["High antioxidant levels", "Rich in B vitamins", "Supports digestive health", "Versatile flour substitute"]
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'banana-bread',
    title: "The Levenly Father’s Blessing: Gluten-Free Banana Bread",
    quote: "When we embrace our Father’s blessing, we rise to our own potential.",
    description: "A divine banana bread that transforms humble ingredients into something extraordinary. Those who develop their skills of turning ordinary ingredients into extraordinary Experiences for others, possess a Power that few on this earth will ever attain.",
    time: "60 min",
    servings: "10-12 slices",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "banana-bread",
    ingredients: [
      "3 ripe bananas, mashed (For optimal sweetness and moisture, opt for bananas speckled with brown spots)",
      "1/4 cup coconut oil, melted (Extra virgin coconut oil imparts a richer, more tropical flavor)",
      "1/4 cup honey (Local, raw honey offers a complex taste profile and supports beekeepers)",
      "2 large eggs (Pasture-raised eggs tend to have a richer yolk, enhancing flavor)",
      "1 teaspoon pure vanilla extract (Madagascar vanilla is renowned for its superior aroma and taste)",
      "1 1/2 cups Bob’s Red Mill 1-to-1 Gluten-Free Baking Mix (A reliable foundation for gluten-free baking)",
      "1 teaspoon baking soda (Ensure freshness for optimal leavening)",
      "1/2 teaspoon fine sea salt (Unrefined sea salt adds depth of flavor)",
      "1/2 teaspoon ground cinnamon (A classic complement to banana, consider using Ceylon cinnamon for a subtler sweetness)"
    ],
    instructions: [
      "Prep the Pan: Preheat your oven to 350°F (175°C). Grease and lightly flour a loaf pan for easy release.",
      "Create the Base: In a spacious bowl, amalgamate the mashed bananas, melted coconut oil, honey, eggs, and vanilla extract. Whisk until thoroughly combined, creating a smooth and luscious foundation for the bread.",
      "Assemble the Dry Ingredients: In a separate bowl, whisk together the Bob's Red Mill gluten-free baking mix, baking soda, sea salt, and ground cinnamon. This blend provides the essential structure for the bread.",
      "Combine Wet and Dry: Gently fold the dry ingredients into the wet ingredients until just combined. Overmixing can lead to a tough texture, so resist the urge to overwork the batter.",
      "Bake to Perfection: Pour the batter into the prepared loaf pan, smoothing the top for even baking. Place the loaf pan in the preheated oven and bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean.",
      "Cool and Enjoy: Allow the bread to cool completely in the pan before slicing. This step is crucial for developing optimal texture and flavor."
    ],
    tags: ['dessert', 'breakfast', 'quick']
  },
  {
    id: 'lasagna',
    title: "Layers of Love: Gluten-Free Lasagna",
    quote: "In the embrace of Love, we find true nourishment.",
    description: "This lasagna isn't just a dish; it's a warm, comforting embrace in the form of food. Free from gluten but full of flavor, it's a testament to the power of great cooking.",
    time: "90 min",
    servings: "8",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "lasagna",
    ingredients: [
      "2 tablespoons robust olive oil",
      "1 sweet onion, finely chopped",
      "3 assertive garlic cloves, minced",
      "1 pound lean ground beef",
      "1 pound savory Italian sausage, casings removed",
      "2 (24-ounce) jars high-quality marinara sauce (Rao's is a personal favorite)",
      "1 (6-ounce) can concentrated tomato paste",
      "1 teaspoon fragrant dried basil",
      "1 teaspoon robust dried oregano",
      "1/2 teaspoon fine sea salt",
      "1/4 teaspoon freshly cracked black pepper",
      "Optional: A pinch of fiery red pepper flakes for added kick",
      "2 cups rich ricotta cheese (Galbani offers exceptional texture)",
      "1 cup sharp grated Parmesan cheese, divided",
      "1 large egg, lightly beaten",
      "2 tablespoons vibrant fresh parsley, finely chopped",
      "12 sturdy gluten-free lasagna noodles (Barilla or Tinkyada are reliable options)",
      "4 cups melty shredded mozzarella cheese (Sargento consistently delivers)",
      "Fresh basil leaves, for a touch of elegance"
    ],
    instructions: [
      "Building the Flavorful Foundation: In a spacious skillet, heat olive oil over medium heat. Sweat the onion until translucent, followed by the garlic for a fragrant aroma.",
      "Brown the ground beef and sausage, breaking it up for even cooking. Drain off excess grease.",
      "Stir in marinara sauce, tomato paste, dried herbs, salt, pepper, and a dash of red pepper flakes if desired. Let simmer gently for at least 20 minutes, allowing flavors to meld.",
      "Creating the Creamy Layer: In a medium bowl, combine ricotta cheese, half the Parmesan, beaten egg, parsley, salt, and pepper. Mix until smooth and creamy.",
      "Assembling the Lasagna: Preheat your oven to 375°F (190°C). Cook gluten-free noodles according to package directions.",
      "In a 9x13 inch baking dish, spread a thin layer of meat sauce. Layer with cooked noodles, a third of the cheese mixture, mozzarella, and more meat sauce. Repeat twice, finishing with a Parmesan sprinkle.",
      "Cover the dish and bake for 25 minutes. Uncover and bake for another 25 minutes, or until golden brown and bubbly. Let cool for 15 minutes before serving."
    ],
    tags: ['classic', 'dinner', 'comfort']
  },
  {
    id: 'beef-wellington',
    title: "Feast and Be Well: Gluten-Free Beef Wellington",
    quote: "In the practice of tradition, we celebrate what our forefathers bore.",
    description: "And so, the King commanded that a feast be prepared, and the Beef Wellington, wrapped in its golden mantle, was the centerpiece, a testament to culinary artistry and a reflection of the kingdom's prosperity.",
    time: "1 hr 15 min",
    servings: "6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "beef-wellington",
    ingredients: [
      "1 pound cremini mushrooms, finely chopped (I prefer cremini for their earthy flavor)",
      "2 tablespoons unsalted butter",
      "2 tablespoons extra-virgin olive oil",
      "2 shallots, minced",
      "3 cloves garlic, minced",
      "1/4 cup dry white wine",
      "Freshly ground black pepper, to taste",
      "Pinch on Salt, To Taste",
      "1 (2-pound) center-cut beef tenderloin, trimmed",
      "Kosher salt",
      "2 tablespoons Dijon mustard",
      "1 sheet gluten-free puff pastry, thawed",
      "4 ounces prosciutto, thinly sliced",
      "1 large egg, beaten"
    ],
    instructions: [
      "For the Duxelles: In a large skillet, melt the butter and olive oil over medium heat. Add shallots and garlic, sautéing until softened.",
      "Add mushrooms. Cook until liquid evaporates and mushrooms are golden brown (10-15 mins). Stir in wine, reduce by half. Season and cool.",
      "For the Beef: Preheat oven to 400°F. Season beef with salt and pepper. Sear in hot skillet on all sides (2-3 mins). Brush with Dijon mustard.",
      "Assembly: Roll out puff pastry. Lay prosciutto slices, spread duxelles. Place beef in center, wrap tightly, seal edges. Brush with egg wash.",
      "Bake on parchment-lined sheet for 25-30 minutes (125°F internal for medium-rare). Rest 10 minutes before slicing."
    ],
    tags: ['flex', 'dinner', 'advanced']
  },
  {
    id: 'paella',
    title: "A Parting of the Sea: Gluten-Free Seafood Paella",
    quote: "When the fisherman casts their net with hope, he will find the endless bounty of the sea.",
    description: "This paella is a celebration of the ocean’s gifts, transformed into a harmonious symphony of flavors.",
    time: "60 min",
    servings: "6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "paella",
    ingredients: [
      "2 cups arborio rice (Carnaroli rice offers a slightly chewier texture)",
      "4 cups gluten-free seafood or vegetable stock",
      "1 large yellow onion, finely chopped",
      "3 cloves garlic, minced",
      "1 red bell pepper, diced",
      "1 cup cherry tomatoes, halved",
      "1 teaspoon smoked paprika (high-quality Spanish paprika)",
      "Saffron threads, to taste",
      "1/2 pound large shrimp, peeled and deveined",
      "1/2 pound mussels, cleaned and debearded",
      "1/2 pound calamari rings",
      "1/2 pound white fish (cod or halibut), cut into chunks",
      "1/4 cup fresh parsley, finely chopped",
      "Lemon wedges, for serving",
      "Extra-virgin olive oil"
    ],
    instructions: [
      "Building a Flavorful Foundation: Heat olive oil in a paella pan or Dutch oven. Sauté onion and garlic. Stir in red bell pepper and rice, coating each grain.",
      "Infusing with Aromatic Riches: Sprinkle paprika and saffron. Pour in stock. Bring to boil, reduce heat, cover and simmer 15 minutes.",
      "Introducing the Seafood Symphony: Arrange shrimp, mussels, and calamari. Gently push into rice. Cover and cook 5-7 minutes until shellfish opens.",
      "Finishing Touches: Sprinkle with parsley. Serve with lemon wedges."
    ],
    tags: ['flex', 'seafood', 'dinner']
  },
  {
    id: 'prickly-pear-ice-cream',
    title: "Desert Delight Prickly Pear Ice Cream",
    quote: "May each desert be a celebration of Love and Family and a blessing to the soul.",
    description: "A vibrant and refreshing treat that captures the essence of the Southwest. Sweet, slightly tart, and beautiful.",
    time: "4 hrs",
    servings: "4-6",
    difficulty: "Flex Zone",
    category: "dessert",
    imageSeed: "prickly-pear",
    ingredients: [
      "2 cups heavy cream",
      "1 cup whole milk",
      "3/4 cup granulated sugar",
      "1 1/2 teaspoon vanilla extract",
      "4 large egg yolks",
      "2 cups prickly pear fruit, peeled and cubed",
      "1/4 cup granulated sugar (for puree)",
      "1 tablespoon lemon juice",
      "Optional: 2 tablespoons light rum (to prevent ice crystals)"
    ],
    instructions: [
      "Creating the Prickly Pear Puree: Blend prickly pear cubes, sugar, and lemon juice until smooth.",
      "Crafting the Ice Cream Base: Heat cream, milk, and sugar until warm. Whisk egg yolks. Temper eggs with warm cream, then cook until thickened. Stir in vanilla.",
      "Combining: Cool base, then stir in prickly pear puree. Chill 2 hours.",
      "Churning: Pour into ice cream maker and churn. Freeze to firm up.",
      "No Ice Cream Maker? Pour into baking dish, freeze, stirring vigorously every 30 minutes until frozen."
    ],
    tags: ['dessert', 'ice cream', 'flex']
  },
  {
    id: 'fruit-kebabs',
    title: "Fresh Fruit Kebabs with Yogurt Dip",
    quote: "Simple joys are often the sweetest.",
    description: "For a Quick Snack Try this delightful combination.",
    time: "10 min",
    servings: "4",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "fruit-kebab",
    ingredients: [
      "Fresh fruit (e.g., grapes, strawberries, pineapple)",
      "Yogurt (e.g., So Delicious Coconut Yogurt)",
      "Honey (e.g., Nature Nate's Organic Honey)"
    ],
    instructions: [
      "Skewer fresh fruit onto kebab sticks.",
      "Serve with yogurt dip made by mixing yogurt and honey."
    ],
    tags: ['snack', 'fruit', 'quick']
  },
  {
    id: 'blueberry-muffins',
    title: "Benevolent Bounties: Gluten-Free Blueberry Muffins",
    quote: "When we allow others to be themselves, we open ourselves to receiving generosity as a reward.",
    description: "Like the sower who scatters seeds with hope, these muffins promise a sweet reward for your efforts.",
    time: "35 min",
    servings: "12",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "blueberry-muffins",
    ingredients: [
      "1 cup almond flour (Bob's Red Mill Almond Flour is a reliable choice)",
      "1/2 cup tapioca starch (Adds moisture and prevents dryness)",
      "1/4 cup coconut flour (For added fiber and a subtle sweetness)",
      "1 teaspoon baking powder",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "2 large eggs (pasture-raised results in a richer flavor)",
      "1/4 cup honey (Local honey offers a unique flavor profile)",
      "1/4 cup coconut oil, melted and cooled",
      "1/2 cup almond milk",
      "1 cup fresh blueberries (Wild blueberries offer a more intense flavor)"
    ],
    instructions: [
      "Sowing the Seeds of Creation: Preheat oven to 350°F (175°C). Line muffin tin.",
      "Combine almond flour, tapioca starch, coconut flour, baking powder, baking soda, and salt.",
      "Whisk eggs, honey, melted coconut oil, and almond milk separately.",
      "Gently fold wet ingredients into dry. Fold in blueberries.",
      "Distribute batter. Bake for 20-25 minutes until toothpick comes out clean.",
      "Cool on wire rack."
    ],
    tags: ['breakfast', 'quick', 'baking']
  },
  {
    id: 'chicken-parm',
    title: "Friar’s Flock Gluten-Free Chicken Parmesan",
    quote: "As part of the flock, we can find our purpose.",
    description: "When we find ways to both honor our past, while crafting our future, it is there that true peace is created within us.",
    time: "40 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "chicken-parm",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "1 cup almond flour (Bob’s Red Mill recommended)",
      "1/2 cup grated Parmesan cheese",
      "1 teaspoon Italian seasoning",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon salt",
      "2 eggs, beaten",
      "2 tablespoons olive oil",
      "1 cup marinara sauce (Rao’s Homemade recommended)",
      "1 cup shredded mozzarella cheese"
    ],
    instructions: [
      "Preheat oven to 375°F. Combine almond flour, Parmesan, seasonings in a bowl.",
      "Dip chicken in eggs, then dredge in flour mixture.",
      "Sear chicken in olive oil until golden brown (3-4 mins per side).",
      "Transfer to baking dish. Spoon marinara over chicken, top with mozzarella.",
      "Bake 20-25 minutes until cheese is bubbly.",
      "Broil for last 2-3 minutes for golden top."
    ],
    tags: ['dinner', 'classic', 'chicken']
  },
  {
    id: 'sourdough',
    title: "3rd Day Rising: Gluten-Free Sourdough Bread",
    quote: "When you trust your heart, and listen not to your head, true Miracles occur.",
    description: "So, let us break gluten-free bread, and remember that even in the absence of gluten, the presence of flavor, health, and joy abounds. Amen.",
    time: "8 hrs",
    servings: "1 loaf",
    difficulty: "Flex Zone",
    category: "bread",
    imageSeed: "sourdough",
    ingredients: [
      "1 cup gluten-free sourdough starter",
      "1 cup brown rice flour",
      "1 cup sorghum flour",
      "1/2 cup tapioca starch",
      "1/4 cup potato starch",
      "1 teaspoon salt",
      "1 cup water",
      "1 tablespoon olive oil",
      "1/2 teaspoon honey"
    ],
    instructions: [
      "For the Dough: Combine starter, flours, starches, salt. Add water and oil, mix until dough forms.",
      "Fermentation: Cover and rise 4-6 hours.",
      "Shaping: Shape into round loaf on floured surface.",
      "Second Rise: Rise another 1-2 hours.",
      "Baking: Preheat oven to 450°F with Dutch oven inside. Bake dough in Dutch oven covered 30 mins, then uncovered 15-20 mins."
    ],
    tags: ['bread', 'flex', 'advanced']
  },
  {
    id: 'energy-balls',
    title: "Energy Balls with Gluten-Free Oats",
    quote: "Small bursts of energy for the long journey.",
    description: "For a Quick Snack Try this nutritious option.",
    time: "35 min",
    servings: "12 balls",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "energy-balls",
    ingredients: [
      "Gluten-free oats (e.g., Bob's Red Mill Gluten-Free Old Fashioned Rolled Oats)",
      "Honey (e.g., Nature Nate's Organic Honey)",
      "Peanut butter (e.g., Justin's Peanut Butter)"
    ],
    instructions: [
      "Mix ingredients.",
      "Roll into balls.",
      "Refrigerate for 30 minutes."
    ],
    tags: ['snack', 'quick', 'energy']
  },
  {
    id: 'egg-salad',
    title: "Sacred Keto: Avocado Egg Salad",
    quote: "In the essence of purity, we discover renewal.",
    description: "The greatest wealth is health, and Family to spend it with.",
    time: "20 min",
    servings: "2",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "egg-salad",
    ingredients: [
      "2 ripe avocados, diced (Choose Hass avocados)",
      "4 large hard-boiled eggs, chopped",
      "1/4 cup mayonnaise (I prefer Duke's)",
      "1 tablespoon fresh lemon juice",
      "1 teaspoon Dijon mustard",
      "1/4 teaspoon salt",
      "1/8 teaspoon freshly ground black pepper",
      "Fresh chives, chopped, for garnish"
    ],
    instructions: [
      "Harmonizing Flavors: Steam eggs for 12-15 mins, cool in ice bath, chop.",
      "Dice avocados. Combine with eggs.",
      "Whisk mayonnaise, lemon juice, mustard, salt, pepper.",
      "Pour dressing over mixture, toss gently.",
      "Garnish with chives."
    ],
    tags: ['quick', 'keto', 'salad']
  },
  {
    id: 'turkey-burger',
    title: "Thankful Bishops: Gluten-Free Turkey Burgers",
    quote: "In gratitude, we find the strength to lead.",
    description: "These gluten-free turkey burgers are a culinary revelation, a harmonious blend of flavors that nourish both body and soul.",
    time: "30 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "turkey-burger",
    ingredients: [
      "1 pound ground turkey",
      "1/4 cup almond flour",
      "1/4 cup grated Parmesan cheese",
      "1/4 cup finely chopped onion",
      "2 cloves garlic, minced",
      "1 large egg, lightly beaten",
      "1 tablespoon Dijon mustard",
      "1/2 teaspoon smoked paprika",
      "1/2 teaspoon ground cumin",
      "4 gluten-free burger buns"
    ],
    instructions: [
      "Crafting the Foundation: Mix turkey, flour, cheese, onion, garlic, egg, and spices. Form into patties.",
      "Searing to Perfection: Cook patties in olive oil 5-6 mins per side until 165°F.",
      "Building a Flavorful Tower: Assemble on buns with lettuce, tomato, onion."
    ],
    tags: ['dinner', 'classic', 'burger']
  },
  {
    id: 'vegan-cheesecake',
    title: "Lilith’s Seduction: Gluten-Free Vegan Cheesecake",
    quote: "In the allure of the Seductive, we confront our desires.",
    description: "Just as the potter molds clay into a masterpiece, so too can we craft culinary wonders from simple ingredients.",
    time: "6 hrs",
    servings: "8",
    difficulty: "Flex Zone",
    category: "dessert",
    imageSeed: "cheesecake",
    ingredients: [
      "1 1/2 cups gluten-free graham cracker crumbs",
      "1/4 cup coconut oil, melted",
      "2 cups raw cashews, soaked overnight and drained",
      "1/2 cup full-fat coconut cream",
      "1/4 cup pure maple syrup",
      "1/4 cup fresh lemon juice",
      "1 teaspoon pure vanilla extract"
    ],
    instructions: [
      "Crafting the Foundation: Mix crumbs and oil, press into springform pan.",
      "Creating a Creamy Bliss: Blend cashews, coconut cream, syrup, lemon juice, vanilla until smooth.",
      "Assembling: Pour over crust. Bake in bain-marie at 350°F for 45-50 mins.",
      "Cool gradually in oven, then refrigerate 4+ hours."
    ],
    tags: ['dessert', 'vegan', 'flex']
  },
  {
    id: 'trail-mix',
    title: "Trail Mix with Nuts, Seeds, and Dried Fruits",
    quote: "Sustenance for the journey.",
    description: "For a Quick Snack Try this simple mix.",
    time: "5 min",
    servings: "Many",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "trail-mix",
    ingredients: [
      "Nuts (e.g., Planters Almonds)",
      "Seeds (e.g., Bob's Red Mill Chia Seeds)",
      "Dried fruits (e.g., Craisins Dried Cranberries)"
    ],
    instructions: [
      "Mix ingredients in a bowl.",
      "Serve."
    ],
    tags: ['snack', 'quick', 'easy']
  },
  {
    id: 'chia-pudding',
    title: "Seeds of Life Chia Seed Pudding",
    quote: "In the seeds of life, we find the beginning of all things.",
    description: "Much like the tiny mustard seed that grows into a mighty tree, this unassuming dish packs a nutritional punch.",
    time: "2 hrs",
    servings: "2",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "chia-pudding",
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup almond milk",
      "1 tablespoon honey",
      "1/2 teaspoon pure vanilla extract",
      "Pinch of sea salt",
      "Fresh berries or sliced fruit for topping"
    ],
    instructions: [
      "Cultivating a Nutritious Base: Whisk chia seeds, milk, honey, vanilla, salt.",
      "Refrigerate at least 2 hours or overnight.",
      "Harvesting Your Culinary Creation: Stir, divide into bowls, top with fruit."
    ],
    tags: ['breakfast', 'quick', 'pudding']
  },
  {
    id: 'quiche-lorraine',
    title: "Morning's Embrace Gluten-Free Quiche Lorraine",
    quote: "In the morning’s embrace, we find the warmth of new beginnings.",
    description: "Like manna descending from the heavens, this quiche is a celestial offering, nourishing both body and soul.",
    time: "1 hr 15 min",
    servings: "8",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "quiche",
    ingredients: [
      "1 1/2 cups gluten-free all-purpose flour blend",
      "1/2 cup cold unsalted butter, cubed",
      "1 large egg, beaten (for crust)",
      "6 slices thick-cut bacon",
      "1 medium onion, finely chopped",
      "1 1/2 cups shredded Gruyère cheese",
      "4 large eggs (for filling)",
      "1 1/2 cups heavy cream",
      "1/4 teaspoon freshly grated nutmeg"
    ],
    instructions: [
      "For the Crust: Combine flour and salt. Cut in butter. Add egg and ice water. Chill dough 30 mins. Roll out and blind bake at 375°F for 10 mins.",
      "For the Filling: Render bacon, sauté onions. Whisk eggs, cream, nutmeg. Spread cheese, bacon, onions in crust. Pour custard over.",
      "Bake at 375°F for 30-35 mins until set and golden."
    ],
    tags: ['breakfast', 'classic', 'brunch']
  },
  {
    id: 'manicotti',
    title: "Bursting with Joy: Gluten-Free Manicotti",
    quote: "In the bursting of joy, we find the fulfillment of our spirit.",
    description: "Much like the intricate layers of a fine tapestry, this manicotti weaves together flavors and textures to create a masterpiece.",
    time: "1 hr",
    servings: "6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "manicotti",
    ingredients: [
      "2 cups whole milk ricotta cheese",
      "2 cups shredded part-skim mozzarella cheese",
      "1 cup grated Parmesan cheese",
      "1 large egg",
      "4 cups fresh spinach, chopped",
      "12 gluten-free manicotti shells (Rana brand recommended)",
      "4 cups marinara sauce"
    ],
    instructions: [
      "Crafting the Heart: Mix ricotta, mozzarella, Parmesan, egg, herbs, spinach.",
      "Cook manicotti shells al dente.",
      "Building: Spread marinara in dish. Fill shells with cheese mixture. Arrange in dish. Top with sauce and more Parmesan.",
      "Bake covered at 375°F for 25 mins, then uncovered 15-20 mins."
    ],
    tags: ['dinner', 'flex', 'pasta']
  },
  {
    id: 'chicken-piccata',
    title: "Preacher's Delight Gluten-Free Chicken Piccata",
    quote: "We find real happiness when we help others find theirs.",
    description: "Like the transformation of water into wine, this dish elevates simple ingredients into a culinary masterpiece.",
    time: "30 min",
    servings: "4",
    difficulty: "Medium",
    category: "flex",
    imageSeed: "chicken-piccata",
    ingredients: [
      "4 boneless, skinless chicken breasts, pounded",
      "1/2 cup almond flour + 1/4 cup tapioca starch",
      "2 tablespoons extra-virgin olive oil",
      "1/4 cup chicken broth",
      "1/4 cup fresh lemon juice",
      "1/4 cup capers, drained",
      "2 tablespoons unsalted butter"
    ],
    instructions: [
      "Building a Flavorful Foundation: Dredge chicken in flour mix. Sear in olive oil until golden.",
      "Crafting a Harmonious Sauce: Deglaze pan with broth and lemon juice. Add capers. Whisk in butter.",
      "Bringing It All Together: Return chicken to sauce to heat through. Garnish with parsley."
    ],
    tags: ['dinner', 'flex', 'chicken']
  },
  {
    id: 'spaghetti',
    title: "Not your Grandma’s Gluten-Free Spaghetti",
    quote: "Sometimes, when all else fails, go with what you know.",
    description: "May this Gluten-Free Spaghetti remind us that every meal is a celebration of love, tradition, and the timeless joy of sharing.",
    time: "2 hrs",
    servings: "4-6",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "spaghetti",
    ingredients: [
      "2 tablespoons extra virgin olive oil",
      "1 large onion, chopped",
      "4 garlic cloves, minced",
      "1 (28-ounce) can crushed tomatoes (San Marzano)",
      "2 tablespoons tomato paste",
      "1 cup dry red wine (optional)",
      "12 ounces gluten-free spaghetti (Barilla or Tinkyada)"
    ],
    instructions: [
      "For the Sauce: Sauté onion and garlic. Add tomato paste, tomatoes, wine, herbs. Simmer 1.5-2 hours.",
      "For the Spaghetti: Cook pasta al dente. Reserve water. Toss with sauce.",
      "Serve with fresh parsley."
    ],
    tags: ['dinner', 'classic', 'pasta']
  },
  {
    id: 'avocado-toast',
    title: "Gluten-Free Toast with Avocado and Tomato",
    quote: "Simple sustenance for a complex world.",
    description: "A quick, wholesome snack.",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "avocado-toast",
    ingredients: [
      "Gluten-free bread",
      "Avocado",
      "Tomato",
      "Salt",
      "Onion Powder"
    ],
    instructions: [
      "Toast bread.",
      "Mash avocado.",
      "Slice tomato.",
      "Avocados…Assemble!"
    ],
    tags: ['snack', 'quick', 'breakfast']
  },
  {
    id: 'hummus-platter',
    title: "Heavenly Platters: Elevated Hummus and Veggie Platter",
    quote: "In heavenly matters, we find true bounty of the earth.",
    description: "Just as the earth yields an abundance of fresh produce, this recipe invites you to create a nourishing and flavorful spread.",
    time: "20 min",
    servings: "4-6",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "hummus-platter",
    ingredients: [
      "1 can chickpeas, drained",
      "1/4 cup tahini",
      "Juice of 1 lemon",
      "2 cloves garlic, minced",
      "1/4 cup extra-virgin olive oil",
      "Assorted fresh vegetables (carrots, cucumber, peppers)",
      "Gluten-free pita bread"
    ],
    instructions: [
      "Cultivating the Hummus: Blend chickpeas, tahini, lemon, garlic, oil, and spices until smooth.",
      "Assembling the Platter: Arrange vegetables and pita around the hummus bowl."
    ],
    tags: ['snack', 'quick', 'party']
  },
  {
    id: 'shepherds-pie',
    title: "On-High Gluten-Free Shepherd’s Pie",
    quote: "In the shepherd’s care, we find comfort and warmth.",
    description: "Comfort and tradition offer solace in times of change.",
    time: "1 hr",
    servings: "6-8",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "shepherds-pie",
    ingredients: [
      "1 pound ground lamb (or beef)",
      "2 tablespoons tomato paste",
      "1 cup gluten-free beef broth",
      "1 cup frozen peas",
      "1 cup frozen carrots",
      "2 pounds russet potatoes, peeled and cubed",
      "4 tablespoons unsalted butter",
      "1/4 cup milk"
    ],
    instructions: [
      "Prepare the Filling: Sauté onion, garlic, meat. Add tomato paste, broth, herbs. Simmer. Add veggies.",
      "Mashed Topping: Boil potatoes, mash with butter and milk.",
      "Assemble: Spread potatoes over meat in baking dish. Crosshatch with fork.",
      "Bake at 400°F for 20-25 mins until golden."
    ],
    tags: ['dinner', 'classic', 'comfort']
  },
  {
    id: 'pierogi',
    title: "Divine Dumplings: Gluten-Free Pierogi",
    quote: "In the company of true friends and loving family, we find the divine.",
    description: "Just as the potter molds clay into vessels of beauty, so too can we transform simple ingredients into culinary delights.",
    time: "1.5 hrs",
    servings: "4-6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "pierogi",
    ingredients: [
      "2 cups Bob's Red Mill Gluten-Free 1-to-1 Baking Mix",
      "1/2 cup potato starch",
      "1 large egg",
      "1/2 cup sour cream",
      "2 cups mashed potatoes",
      "1 cup sharp cheddar cheese, shredded",
      "1/4 cup fresh chives"
    ],
    instructions: [
      "Resilient Dough: Mix flour, starch, salt. Add egg, sour cream, melted butter. Rest dough 30 mins.",
      "Filling: Mix mashed potatoes, cheese, chives.",
      "Shaping: Roll dough, cut circles, fill, seal.",
      "Cooking: Boil until floating, then pan-fry in butter until golden."
    ],
    tags: ['flex', 'dinner', 'comfort']
  },
  {
    id: 'rice-pudding',
    title: "A Bowl of Patience: Gluten-Free Instant Pot Rice Pudding",
    quote: "Patience is one of the most difficult and useful of virtues to possess.",
    description: "Like the Israelites who wandered the desert, this rice pudding offers nourishment for both body and soul.",
    time: "30 min",
    servings: "4",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "rice-pudding",
    ingredients: [
      "1 cup Arborio rice",
      "2 cups unsweetened almond milk",
      "1/4 cup granulated sugar",
      "1 teaspoon pure vanilla extract",
      "1/4 teaspoon ground cinnamon",
      "Fresh berries for serving"
    ],
    instructions: [
      "Sowing Seeds: Rinse rice. Combine with milk, sugar, vanilla, cinnamon in Instant Pot.",
      "Tending Harvest: Cook high pressure 10 mins. Natural release 10 mins.",
      "Reaping Rewards: Stir, cool slightly, top with berries."
    ],
    tags: ['dessert', 'quick', 'comfort']
  },
  {
    id: 'chicken-wings',
    title: "A Wing and a Prayer Air-Fryer Chicken Wings",
    quote: "In Prayer, we find Gratitude.",
    description: "As manna fell from heaven, so too shall these wings descend from your air fryer—crispy and tender.",
    time: "40 min",
    servings: "4",
    difficulty: "Easy",
    category: "classic",
    imageSeed: "chicken-wings",
    ingredients: [
      "2 pounds Chicken wings",
      "1 tablespoon Baking powder",
      "Spices: Salt, Garlic powder, Onion powder, Smoked paprika",
      "1/4 cup Hot sauce",
      "2 tablespoons Butter, melted"
    ],
    instructions: [
      "Season: Toss dry wings with baking powder and spices.",
      "Cook: Air fry at 400°F for 25-30 mins, flipping halfway.",
      "Sauce: Mix hot sauce and butter. Toss wings.",
      "Serve hot."
    ],
    tags: ['snack', 'party', 'classic']
  },
  {
    id: 'steak',
    title: "A Timely Transformation Sous Vide Steak",
    quote: "When you are willing to wait, it is magic you’ll get in return.",
    description: "Like the potter molding clay, we too shape our culinary creations with care and precision.",
    time: "1 hr 30 min",
    servings: "2",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "steak",
    ingredients: [
      "2 ribeye steaks",
      "2 sprigs fresh rosemary",
      "2 cloves garlic, sliced",
      "2 tablespoons unsalted butter",
      "High-quality olive oil"
    ],
    instructions: [
      "Precision: Sous vide steaks with rosemary and garlic at 130°F for medium-rare.",
      "Sear: Remove from bag, pat dry. Sear in hot skillet with oil and butter 1-2 mins per side.",
      "Rest: Let rest 5-7 mins before serving."
    ],
    tags: ['dinner', 'flex', 'advanced']
  },
  {
    id: 'salmon',
    title: "The Slammin’ Salmon",
    quote: "Happy are those who prepare bounties for the tribe.",
    description: "Give a man a Fish, he’ll eat for the night. Teach a man to prepare this dish…He’ll never gaze upon the surf the same again.",
    time: "25 min",
    servings: "4",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "salmon",
    ingredients: [
      "4 salmon fillets",
      "Spices: Smoked paprika, cumin, thyme, garlic powder",
      "Glaze: Orange juice, lemon juice, honey, Dijon, soy sauce (tamari)"
    ],
    instructions: [
      "Salmon: Rub with spice mix. Bake at 400°F for 12-15 mins.",
      "Glaze: Simmer juice, honey, mustard, soy sauce until thickened.",
      "Combine: Brush cooked salmon with glaze."
    ],
    tags: ['dinner', 'flex', 'seafood']
  },
  {
    id: 'hard-boiled-eggs',
    title: "Hard-Boiled Eggs",
    quote: "Simplicity is the ultimate sophistication.",
    description: "A perfect protein-packed snack.",
    time: "25 min",
    servings: "Any",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "hard-boiled-eggs",
    ingredients: [
      "Eggs",
      "Salt",
      "Onion Powder"
    ],
    instructions: [
      "Boil eggs 20-30 mins.",
      "Ice bath to cool.",
      "Peel and sprinkle with seasoning."
    ],
    tags: ['snack', 'easy', 'protein']
  },
  {
    id: 'caesar-salad',
    title: "Emperor's Ballad: Gluten-Free Caesar Salad",
    quote: "Under the emperor’s protection, we find the strength of leadership.",
    description: "Much like a carefully tended garden, a Caesar salad thrives on attention to detail.",
    time: "20 min",
    servings: "4",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "caesar-salad",
    ingredients: [
      "1 head organic romaine lettuce",
      "1/4 - 1/2 cup grated Parmigiano Reggiano",
      "Homemade GF croutons (stale GF bread, olive oil, garlic)",
      "Homemade Dressing: Olive oil, Dijon, garlic, lemon, anchovy, egg yolk"
    ],
    instructions: [
      "Foundation: Wash and dry lettuce.",
      "Croutons: Cube bread, toss with oil/spices, bake until crisp.",
      "Dressing: Whisk garlic, mustard, oil, lemon, yolk, cheese.",
      "Assembly: Toss lettuce with cheese and croutons. Drizzle dressing. Top with lemon squeeze."
    ],
    tags: ['salad', 'quick', 'classic']
  },
  {
    id: 'fish-and-chips',
    title: "Fisherman’s Faith: Gluten-Free Fish and Chips",
    quote: "In the fisherman’s faith, we find trust in the journey.",
    description: "Just as the sea yields its bounty, this dish offers a flavorful haven for the gluten-sensitive soul.",
    time: "45 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "fish-and-chips",
    ingredients: [
      "4 cod or haddock fillets",
      "1 cup GF flour",
      "1 cup sparkling water or GF beer",
      "4 large russet potatoes (for chips)",
      "Tartar sauce ingredients"
    ],
    instructions: [
      "Chips: Toss potato wedges in oil, bake at 400°F for 25-30 mins.",
      "Fish: Make batter with flour, baking powder, egg, liquid. Dredge fish, dip in batter. Fry at 350°F until golden.",
      "Serve with tartar sauce and lemon."
    ],
    tags: ['dinner', 'classic', 'seafood']
  },
  {
    id: 'tuna-bake',
    title: "Ocean's Delight Gluten-Free Tuna Bake",
    quote: "A comforting hug from the ocean.",
    description: "A symphony of flavors from the sea and the garden.",
    time: "45 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "tuna-bake",
    ingredients: [
      "2 cans tuna, drained",
      "1 cup peas",
      "1 cup diced carrots",
      "1/2 cup mayonnaise + 1/4 cup sour cream",
      "1 cup GF crushed crackers (topping)"
    ],
    instructions: [
      "Mixture: Combine tuna, veggies. Whisk mayo, sour cream, spices. Fold together.",
      "Bake: Transfer to dish. Top with cracker crumbs and butter.",
      "Bake at 375°F for 20-25 mins."
    ],
    tags: ['dinner', 'classic', 'seafood']
  },
  {
    id: 'stuffed-peppers-harvest',
    title: "Harvest Haven Gluten-Free Stuffed Bell Peppers",
    quote: "In the art of cooking, we find the harmony of land and sea.",
    description: "A vibrant and hearty dish that showcases the best of the garden.",
    time: "50 min",
    servings: "4-6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "stuffed-peppers-harvest",
    ingredients: [
      "4-6 large bell peppers, halved",
      "1 cup cooked quinoa",
      "1 cup black beans",
      "1 cup corn",
      "1/2 cup feta cheese"
    ],
    instructions: [
      "Prep: Mix quinoa, beans, corn, veggies, cheese, spices.",
      "Stuff: Fill pepper halves.",
      "Bake: 375°F for 30 mins covered, then 10-15 uncovered with cheese on top."
    ],
    tags: ['dinner', 'flex', 'vegetarian']
  },
  {
    id: 'pizza-margherita',
    title: "Encyclical Grace: Gluten-Free Pizza Margherita",
    quote: "In the communion of tradition, we find grace.",
    description: "Just as the potter molds clay into a masterpiece, so too do we transform simple ingredients into a culinary delight.",
    time: "40 min",
    servings: "2-3",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "pizza-margherita",
    ingredients: [
      "1 cup Bob's Red Mill GF 1-to-1 Flour",
      "1/2 cup tapioca starch",
      "1/2 cup warm water + yeast",
      "Marinara sauce",
      "Fresh mozzarella",
      "Fresh basil"
    ],
    instructions: [
      "Crust: Mix flour, starch, baking powder, salt. Add water/oil. Knead briefly.",
      "Bake Crust: Roll out, bake at 450°F for 15 mins.",
      "Toppings: Add sauce, cheese. Bake another 10-12 mins.",
      "Finish: Top with basil and oil."
    ],
    tags: ['dinner', 'flex', 'classic']
  },
  {
    id: 'smoothie',
    title: "Sweet & Salty PB & Whey Smoothie",
    quote: "Do not let the name throw you off.",
    description: "Among the most delicious recipes in the Bible!",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "smoothie",
    ingredients: [
      "Yogurt",
      "Strawberries, Banana, Blueberries",
      "Carrot, Spinach",
      "Peanut Butter",
      "Almond Milk",
      "Protein Powder"
    ],
    instructions: [
      "Combine all ingredients in blender.",
      "Serve."
    ],
    tags: ['snack', 'quick', 'breakfast']
  },
  {
    id: 'stuffing',
    title: "Gleeful Gluten-Free Stuffing",
    quote: "In the dressings of joy, we find the fullness of life.",
    description: "As it is written, Man shall not live by bread alone, but for those who do, let it be a gluten-free feast.",
    time: "1 hr",
    servings: "8",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "stuffing",
    ingredients: [
      "1 loaf GF bread, cubed and toasted",
      "1/4 cup butter",
      "Onion, celery, garlic",
      "Herbs: Sage, thyme, rosemary",
      "2 1/2 cups GF chicken broth",
      "2 eggs"
    ],
    instructions: [
      "Toast bread cubes.",
      "Sauté veggies with butter and herbs.",
      "Combine bread, veggies, 1.5 cups broth.",
      "Whisk eggs with remaining broth, pour over.",
      "Bake at 350°F for 30 mins covered, 15 uncovered."
    ],
    tags: ['side', 'classic', 'holiday']
  },
  {
    id: 'turkey',
    title: "The Thanksgiving Turkey Transcendance",
    quote: "In the weave of tradition, every bite tells a story.",
    description: "Turkey with stuffing so fine, even your aunt will ask for seconds!",
    time: "4 hrs",
    servings: "8",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "turkey",
    ingredients: [
      "1 whole turkey (12-14 lbs)",
      "Seasoning rub: Garlic, onion, sage, thyme",
      "Stuffing ingredients (see Gleeful Stuffing)",
      "Gravy: GF flour, turkey broth"
    ],
    instructions: [
      "Turkey: Rub with oil and spices. Roast at 325°F for 3-4 hours (165°F internal).",
      "Stuffing: Prepare and stuff bird (or bake separate).",
      "Gravy: Make roux with drippings/butter and GF flour. Whisk in broth."
    ],
    tags: ['dinner', 'flex', 'holiday']
  },
  {
    id: 'yule-log',
    title: "Yule Tidings Gluten-Free Yule Log",
    quote: "In the tidings of Yule, we find the spirit of family, giving, and faith.",
    description: "Like the ancient Druids who celebrated the winter solstice, we too can create a modern-day marvel.",
    time: "2 hrs",
    servings: "8-10",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "yule-log",
    ingredients: [
      "Sponge: 4 eggs, sugar, cocoa powder, GF flour blend",
      "Filling: Heavy cream, powdered sugar, vanilla",
      "Ganache: Dark chocolate, heavy cream"
    ],
    instructions: [
      "Cake: Beat eggs/sugar. Fold in dry. Bake thin sheet 350°F 8-10 mins. Roll in towel while hot.",
      "Filling: Whip cream.",
      "Assembly: Unroll cool cake, spread cream, reroll. Top with ganache."
    ],
    tags: ['dessert', 'flex', 'holiday']
  },
  {
    id: 'veggies-hummus',
    title: "Cut Veggies with Hummus Dip",
    quote: "Simple snacks for simple times.",
    description: "A healthy classic.",
    time: "5 min",
    servings: "Any",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "veggies-hummus",
    ingredients: [
      "Veggies (carrots, celery)",
      "Hummus"
    ],
    instructions: [
      "Cut veggies.",
      "Serve with hummus."
    ],
    tags: ['snack', 'easy', 'healthy']
  },
  {
    id: 'quinoa-salad',
    title: "Garden of Eden Quinoa Salad",
    quote: "In the essence of purity, we discover renewal.",
    description: "Just as a gardener tends to their crops with care, so too must we nurture the ingredients for this refreshing salad.",
    time: "25 min",
    servings: "4",
    difficulty: "Easy",
    category: "quick",
    imageSeed: "quinoa-salad",
    ingredients: [
      "1 cup quinoa",
      "Cucumber, red bell pepper, red onion",
      "Parsley",
      "Dressing: Olive oil, lemon juice, salt"
    ],
    instructions: [
      "Cook quinoa and cool.",
      "Chop veggies.",
      "Whisk dressing.",
      "Toss everything together."
    ],
    tags: ['salad', 'quick', 'healthy']
  },
  {
    id: 'pancakes',
    title: "Sacred Stacks Gluten-Free Almond Flour Pancakes",
    quote: "In honoring the sacred, we are rewarded with satisfaction.",
    description: "Like the Israelites in the wilderness, these pancakes offer sustenance and satisfaction.",
    time: "20 min",
    servings: "2-3",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "pancakes",
    ingredients: [
      "1 cup almond flour",
      "1/4 cup tapioca starch",
      "2 eggs",
      "1/4 cup almond milk",
      "1 tbsp honey"
    ],
    instructions: [
      "Mix dry ingredients.",
      "Whisk wet ingredients.",
      "Combine.",
      "Cook on griddle."
    ],
    tags: ['breakfast', 'classic', 'almond-flour']
  },
  {
    id: 'coconut-pizza',
    title: "Coconut Covenant: Gluten-Free Pizza with Coconut Flour Crust",
    quote: "In the entrance into a covenant we find trust.",
    description: "A culinary odyssey begins with a single step. This recipe is a testament to human ingenuity.",
    time: "45 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "coconut-pizza",
    ingredients: [
      "1/2 cup coconut flour",
      "1/2 cup mozzarella + 1/4 cup parmesan",
      "4 eggs",
      "1/4 cup olive oil"
    ],
    instructions: [
      "Mix all crust ingredients.",
      "Press onto baking sheet.",
      "Bake at 400°F for 15 mins.",
      "Top and bake again 10-12 mins."
    ],
    tags: ['dinner', 'classic', 'pizza']
  },
  {
    id: 'millet-risotto',
    title: "A Humble Grain of Change: Millet Risotto",
    quote: "When we are humble, we build on a foundation of love.",
    description: "Like the tiny mustard seed that grows into a mighty tree, this humble millet transforms.",
    time: "40 min",
    servings: "4",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "millet-risotto",
    ingredients: [
      "1 cup millet",
      "4 cups vegetable broth",
      "Mushrooms, spinach",
      "Parmesan cheese"
    ],
    instructions: [
      "Sauté onion, garlic, mushrooms.",
      "Toast millet.",
      "Add broth ladle by ladle like risotto.",
      "Stir in spinach and cheese at end."
    ],
    tags: ['dinner', 'flex', 'italian']
  },
  {
    id: 'pot-pie',
    title: "Timeless Gluten-Free Chicken Pot Pie",
    quote: "Be in the moment, and fully experience the flavor of life , and you can travel through time.",
    description: "Like the master chef who transforms humble ingredients into a masterpiece.",
    time: "1 hr",
    servings: "6",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "pot-pie",
    ingredients: [
      "Chicken, carrots, peas, potatoes",
      "Butter, GF flour, broth, milk",
      "GF pie crust"
    ],
    instructions: [
      "Cook chicken and veggies.",
      "Make sauce with roux, broth, milk.",
      "Combine filling.",
      "Pour into crust, bake at 375°F for 45-50 mins."
    ],
    tags: ['dinner', 'flex', 'comfort']
  },
  {
    id: 'stuffed-peppers',
    title: "Abbott’s Parish: Quinoa and Amaranth Stuffed Peppers",
    quote: "In the embrace of nature’s gifts, we find true nourishment.",
    description: "Much like a fertile field yielding a diverse array of crops, this dish offers a harmonious blend of flavors and textures.",
    time: "55 min",
    servings: "4",
    difficulty: "Flex Zone",
    category: "flex",
    imageSeed: "stuffed-peppers",
    ingredients: [
      "4 medium bell peppers",
      "1 cup quinoa",
      "1 cup amaranth",
      "2 cups vegetable broth",
      "1 large yellow onion, chopped",
      "2 cloves garlic, minced",
      "1 can diced tomatoes",
      "1 can black beans",
      "1 cup frozen corn",
      "Cilantro, cumin, smoked paprika"
    ],
    instructions: [
      "Cook grains in broth.",
      "Sauté onion, garlic. Add tomatoes, beans, corn, spices.",
      "Combine with grains.",
      "Stuff peppers, bake at 375°F for 30-35 mins."
    ],
    tags: ['dinner', 'flex', 'vegetarian']
  },
  {
    id: 'amaranth-bread',
    title: "Ancient Doughmain: Amaranth and Almond Flour Bread",
    quote: "In the ancient grains, we taste the wisdom of ages.",
    description: "Like the tiny seed that bursts forth into life, this bread transforms humble ingredients into a nourishing masterpiece.",
    time: "60 min",
    servings: "1 loaf",
    difficulty: "Advanced",
    category: "bread",
    imageSeed: "amaranth-bread",
    ingredients: [
      "1 cup amaranth flour",
      "1 cup almond flour",
      "1/2 cup tapioca starch",
      "1 tsp baking soda",
      "3 eggs",
      "1/4 cup olive oil",
      "1/4 cup honey"
    ],
    instructions: [
      "Mix dry ingredients.",
      "Whisk wet ingredients.",
      "Combine gently.",
      "Bake at 350°F for 45-50 mins."
    ],
    tags: ['bread', 'advanced', 'ancient-grains']
  },
  {
    id: 'banana-sliders',
    title: "Gluten-Free Almond Butter Banana Snack Sliders",
    quote: "Simple joys are often the sweetest.",
    description: "For a Quick Snack Try this delightful combination.",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "banana-sliders",
    ingredients: [
      "Gluten-free crackers",
      "Almond butter",
      "Banana"
    ],
    instructions: [
      "Spread almond butter on crackers.",
      "Top with banana slices."
    ],
    tags: ['snack', 'quick', 'easy']
  },
  {
    id: 'sauerkraut',
    title: "Friar's Ferment Sauerkraut",
    quote: "In the fermentation of wisdom, we discover the richness of life.",
    description: "Like the yeast in bread, transformation is at the heart of this humble dish.",
    time: "2 weeks",
    servings: "1 jar",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "sauerkraut",
    ingredients: [
      "1 head green cabbage, shredded",
      "1 tbsp salt",
      "1 tsp caraway seeds"
    ],
    instructions: [
      "Massage cabbage with salt until juicy.",
      "Pack into jar tightly.",
      "Cover and ferment 1-2 weeks."
    ],
    tags: ['ferment', 'classic', 'probiotic']
  },
  {
    id: 'kimchi-fried-rice',
    title: "Celestial Celebration: Kimchi Fried Rice",
    quote: "In the celebration of the celestial, we find joy in every moment.",
    description: "Much like a skilled conductor orchestrates a harmonious blend of instruments, this recipe brings together diverse flavors.",
    time: "25 min",
    servings: "2-3",
    difficulty: "Medium",
    category: "international",
    imageSeed: "kimchi-fried-rice",
    ingredients: [
      "2 cups cold cooked rice",
      "1 cup kimchi, chopped",
      "1/4 cup kimchi juice",
      "2 eggs",
      "Onion, garlic, soy sauce, sesame oil"
    ],
    instructions: [
      "Sauté onion, garlic.",
      "Add kimchi, cook.",
      "Add rice and sauce, stir fry.",
      "Scramble eggs into mixture."
    ],
    tags: ['dinner', 'international', 'spicy']
  },
  {
    id: 'kombucha',
    title: "Divine Elixir: Kombucha",
    quote: "In the elixir of life, we find health and vitality.",
    description: "Much like the alchemist who transforms base metals into gold, kombucha brewing is a process of subtle transformation.",
    time: "7-10 days",
    servings: "1 gallon",
    difficulty: "Advanced",
    category: "flex",
    imageSeed: "kombucha",
    ingredients: [
      "1 gallon tea (sweetened)",
      "1 cup starter kombucha",
      "1 SCOBY"
    ],
    instructions: [
      "Brew tea, add sugar, cool.",
      "Add starter and SCOBY.",
      "Cover and ferment 7-10 days."
    ],
    tags: ['drink', 'flex', 'ferment']
  },
  {
    id: 'berry-parfait',
    title: "Berry Bliss Parfait",
    quote: "Simple layers, profound delight.",
    description: "A quick and healthy snack option.",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "berry-parfait",
    ingredients: [
      "Greek yogurt",
      "Mixed berries",
      "Granola",
      "Honey"
    ],
    instructions: [
      "Layer yogurt, berries, granola.",
      "Drizzle with honey."
    ],
    tags: ['snack', 'healthy', 'quick']
  },
  {
    id: 'avocado-mousse',
    title: "Led to Temptation Chocolate Avocado Mousse",
    quote: "In the temptation of chocolate, we find the sweetness of being human.",
    description: "This dessert tempts with its rich, decadent flavor while nourishing the body with wholesome goodness.",
    time: "15 min",
    servings: "2-4",
    difficulty: "Easy",
    category: "dessert",
    imageSeed: "avocado-mousse",
    ingredients: [
      "2 ripe avocados",
      "1/4 cup cocoa powder",
      "1/4 cup maple syrup",
      "1 tsp vanilla",
      "Pinch of salt"
    ],
    instructions: [
      "Blend all ingredients until smooth.",
      "Chill and serve."
    ],
    tags: ['dessert', 'healthy', 'chocolate']
  },
  {
    id: 'mac-and-cheese',
    title: "Roux the Day: Gluten-Free Mac and Cheese",
    quote: "On the hard days, we remember the comfort of home.",
    description: "Comfort and nostalgia offer a warm embrace in our journey.",
    time: "45 min",
    servings: "4",
    difficulty: "Medium",
    category: "classic",
    imageSeed: "mac-and-cheese",
    ingredients: [
      "8 oz GF macaroni",
      "2 tbsp butter",
      "2 tbsp GF flour",
      "2 cups milk",
      "2 cups cheddar cheese"
    ],
    instructions: [
      "Cook pasta.",
      "Make roux with butter and flour.",
      "Add milk, thicken. Add cheese.",
      "Combine and bake at 350°F for 20-25 mins."
    ],
    tags: ['dinner', 'classic', 'comfort']
  },
  {
    id: 'tiramisu',
    title: "Triumphant Tiramisu",
    quote: "In the throws of triumph, we find the joy of victory.",
    description: "Like the soul finding solace in sweet dreams, this tiramisu offers a moment of pure bliss.",
    time: "4+ hrs",
    servings: "6-8",
    difficulty: "Advanced",
    category: "dessert",
    imageSeed: "tiramisu",
    ingredients: [
      "Coffee, rum",
      "Sugar, egg yolks",
      "Mascarpone cheese",
      "Heavy cream",
      "GF ladyfingers",
      "Cocoa powder"
    ],
    instructions: [
      "Make custard with yolks and sugar.",
      "Fold in mascarpone and whipped cream.",
      "Dip ladyfingers in coffee/rum.",
      "Layer and chill."
    ],
    tags: ['dessert', 'advanced', 'italian']
  },
  {
    id: 'challah',
    title: "Gluten-Free Challah Bread: A Heavenly Delight",
    quote: "A golden, braided masterpiece that proves gluten-free can be just as delicious.",
    description: "This challah is a testament to the power of creativity and the joy of sharing.",
    time: "2.5 hrs",
    servings: "1 loaf",
    difficulty: "Advanced",
    category: "bread",
    imageSeed: "challah",
    ingredients: [
      "3 cups GF flour",
      "Yeast, salt, sugar",
      "Water, olive oil, eggs",
      "Apple cider vinegar"
    ],
    instructions: [
      "Make dough, let rise.",
      "Braid dough.",
      "Second rise.",
      "Bake at 375°F for 30-35 mins."
    ],
    tags: ['bread', 'advanced', 'classic']
  },
  {
    id: 'babka',
    title: "Decadent Dark Chocolate Babka: A Gluten-Free Twist",
    quote: "In the art of baking, we find the harmony of tradition and innovation.",
    description: "A rich, swirled masterpiece that combines the best of both worlds.",
    time: "3 hrs",
    servings: "1 loaf",
    difficulty: "Advanced",
    category: "dessert",
    imageSeed: "babka",
    ingredients: [
      "GF dough ingredients",
      "Chocolate filling (butter, sugar, cocoa)",
      "Chocolate chips"
    ],
    instructions: [
      "Make dough, rise.",
      "Roll out, spread filling, roll up.",
      "Twist and rise.",
      "Bake at 350°F for 45-55 mins."
    ],
    tags: ['dessert', 'bread', 'advanced']
  },
  {
    id: 'mug-cake',
    title: "G-F Mug Cake Calamity",
    quote: "DISCLAIMER - DO NOT EVER PUT METAL IN THE MICROWAVE!!!",
    description: "A fun and experimental recipe, best enjoyed with a sense of adventure.",
    time: "5 min",
    servings: "1",
    difficulty: "Easy",
    category: "dessert",
    imageSeed: "mug-cake",
    ingredients: [
      "1/2 cup GF flour",
      "1 tbsp butter",
      "1 egg",
      "Sugar, vanilla, lemon juice"
    ],
    instructions: [
      "Mix in mug.",
      "Microwave 1.5 - 3.5 mins."
    ],
    tags: ['dessert', 'quick', 'easy']
  },
  // --- GRAB AND GO SNACKS ---
  {
    id: 'rxbar',
    title: "RXBAR Gluten-Free Granola Bars",
    quote: "Simple ingredients, powerful fuel.",
    description: "A convenient, protein-packed snack perfect for on-the-go energy.",
    time: "0 min",
    servings: "1 bar",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "rxbar",
    ingredients: ["1 RXBAR (Any flavor)"],
    instructions: ["Unwrap and enjoy."],
    tags: ["snack", "quick", "protein"]
  },
  {
    id: 'planters-trail-mix',
    title: "Planters Trail Mix with Nuts and Dried Fruits",
    quote: "A handful of nature's best.",
    description: "A classic mix of nuts and dried fruits for sustained energy.",
    time: "0 min",
    servings: "1 handful",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "planters-trail-mix",
    ingredients: ["Planters Trail Mix"],
    instructions: ["Open pack and serve."],
    tags: ["snack", "quick", "nuts"]
  },
  {
    id: 'clif-energy-balls',
    title: "Clif Bar Energy Balls made with Gluten-Free Oats",
    quote: "Small bites, big energy.",
    description: "Perfect bite-sized energy for hiking or a midday boost.",
    time: "0 min",
    servings: "1 package",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "clif-energy-balls",
    ingredients: ["Clif Bar Energy Balls (GF)"],
    instructions: ["Enjoy straight from the pack."],
    tags: ["snack", "quick", "energy"]
  },
  {
    id: 'glutino-pretzels',
    title: "Glutino Yogurt-Covered Pretzels",
    quote: "Sweet, salty, and satisfying.",
    description: "The perfect balance of crunchy pretzel and creamy yogurt coating.",
    time: "0 min",
    servings: "1 handful",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "glutino-pretzels",
    ingredients: ["Glutino Yogurt-Covered Pretzels"],
    instructions: ["Snack away."],
    tags: ["snack", "quick", "sweet"]
  },
  {
    id: 'sabra-hummus',
    title: "Sabra Hummus with Gluten-Free Crackers",
    quote: "Dip into goodness.",
    description: "A creamy and crunchy classic snack combination.",
    time: "0 min",
    servings: "1 pack",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "sabra-hummus",
    ingredients: ["Sabra Hummus Cup", "GF Crackers"],
    instructions: ["Dip crackers into hummus."],
    tags: ["snack", "quick", "savory"]
  },
  {
    id: 'popcorn',
    title: "Orville Redenbacher's Popcorn Kernels",
    quote: "Pop open some fun.",
    description: "A light, airy, whole-grain snack.",
    time: "5 min",
    servings: "1 bowl",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "popcorn",
    ingredients: ["Orville Redenbacher's Kernels", "Oil or Air Popper"],
    instructions: ["Pop kernels according to package directions."],
    tags: ["snack", "quick", "light"]
  },
  {
    id: 'clif-chews',
    title: "Clif Shot Gluten-Free Energy Chews",
    quote: "Quick energy for the long haul.",
    description: "Rapid energy release for intense activities.",
    time: "0 min",
    servings: "1 pack",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "clif-chews",
    ingredients: ["Clif Shot Energy Chews"],
    instructions: ["Chew for quick energy."],
    tags: ["snack", "quick", "sport"]
  },
  {
    id: 'fruit-leather',
    title: "Stretch Island Fruit Leather",
    quote: "Fruit on the go.",
    description: "Simple, real fruit ingredients in a convenient strip.",
    time: "0 min",
    servings: "1 strip",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "fruit-leather",
    ingredients: ["Stretch Island Fruit Leather"],
    instructions: ["Unwrap and eat."],
    tags: ["snack", "quick", "fruit"]
  },
  {
    id: 'marys-crackers',
    title: "Mary's Gone Crackers with Peanut Butter",
    quote: "Crunchy, nutty perfection.",
    description: "Whole grain crackers topped with creamy peanut butter.",
    time: "2 min",
    servings: "1 plate",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "marys-crackers",
    ingredients: ["Mary's Gone Crackers", "Peanut Butter"],
    instructions: ["Spread peanut butter on crackers."],
    tags: ["snack", "quick", "protein"]
  },
  {
    id: 'quest-bar',
    title: "Quest Bar Protein Bars",
    quote: "Cheat clean.",
    description: "High protein, low sugar bars for fitness enthusiasts.",
    time: "0 min",
    servings: "1 bar",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "quest-bar",
    ingredients: ["Quest Bar (GF flavor)"],
    instructions: ["Unwrap and enjoy."],
    tags: ["snack", "quick", "protein"]
  },
  {
    id: 'udi-pretzels',
    title: "Udi's Gluten-Free Pretzel Rods",
    quote: "The classic crunch, reimagined.",
    description: "Thick, crunchy pretzel rods perfect for dipping.",
    time: "0 min",
    servings: "1 handful",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "udi-pretzels",
    ingredients: ["Udi's GF Pretzel Rods"],
    instructions: ["Eat plain or dip in mustard."],
    tags: ["snack", "quick", "savory"]
  },
  {
    id: 'annies-cheese',
    title: "Annie's Organic Cheese Sticks",
    quote: "Wholesome cheese goodness.",
    description: "Organic cheese sticks perfect for kids and adults alike.",
    time: "0 min",
    servings: "1 stick",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "annies-cheese",
    ingredients: ["Annie's Cheese Stick"],
    instructions: ["Peel and eat."],
    tags: ["snack", "quick", "dairy"]
  },
  {
    id: 'glutino-crackers',
    title: "Glutino Crackers with Turkey",
    quote: "A mini meal in a bite.",
    description: "Savory crackers topped with lean turkey slices.",
    time: "2 min",
    servings: "1 plate",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "glutino-crackers",
    ingredients: ["Glutino Crackers", "Sliced Turkey"],
    instructions: ["Top crackers with turkey slices."],
    tags: ["snack", "quick", "protein"]
  },
  {
    id: 'apple-sauce',
    title: "Mott's Apple Sauce Cups",
    quote: "Classic orchard flavor.",
    description: "Convenient cups of smooth apple sauce.",
    time: "0 min",
    servings: "1 cup",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "apple-sauce",
    ingredients: ["Mott's Apple Sauce Cup"],
    instructions: ["Peel lid and enjoy."],
    tags: ["snack", "quick", "fruit"]
  },
  {
    id: 'enjoy-life-bars',
    title: "Enjoy Life Foods Gluten-Free Muffin Bars",
    quote: "Free from allergens, full of flavor.",
    description: "Soft baked bars free from common allergens.",
    time: "0 min",
    servings: "1 bar",
    difficulty: "Easy",
    category: "snack",
    imageSeed: "enjoy-life-bars",
    ingredients: ["Enjoy Life Muffin Bar"],
    instructions: ["Unwrap and eat."],
    tags: ["snack", "quick", "allergy-friendly"]
  }
];

export const SCRIBE_STORY = `My journey into the world of gluten-free cooking began not with a personal diagnosis, but with a family revelation. Growing up in a household that embraced the typical American diet, finding palatable alternatives to our favorite foods became a daily struggle when my mother was diagnosed with celiac disease.

What began as a daunting task slowly transformed into an exciting adventure. I discovered that gluten-free cooking wasn't just about substitution; it was about reinvention. It required creativity, patience, and a willingness to think outside the traditional culinary box.

This book, "The Glutenberg Bible," is the culmination of that journey. It's a testament to the resilience of the human spirit and the incredible adaptability of our taste buds.`;

export const CHAPTERS: Chapter[] = [
  {
    title: "Genesis of the Grain",
    subtitle: "In the Beginning",
    content: "In the beginning, there was wheat, and it was good. But for some, the grain became a burden, a heavy stone in the belly. And so we sought a new way, a path of lightness and health. We looked to the ancient grains—quinoa, amaranth, sorghum—and found in them a new covenant of nourishment. This journey is not one of restriction, but of rediscovery.",
    marginalia: [
      { id: 'm1', type: 'note', content: "The great awakening to gluten-free living often starts with a rumble.", color: '#8a3324' },
      { id: 'm2', type: 'illustration', content: 'Wheat' }
    ]
  },
  {
    title: "The Levenly Father's Blessing",
    subtitle: "A Parable of Bananas",
    content: "And it came to pass that the bananas grew spotted and dark, and the people despaired. 'Lo,' they cried, 'our fruit has turned against us!' But the Baker smiled, for he knew the truth: sweetness lies in the transformation. With the blessing of the Levenly Father, the humble banana rises to become bread, a testament that what looks like decay is often the beginning of something divine.",
    recipe: RECIPES.find(r => r.id === 'banana-bread'),
    marginalia: [
      { id: 'm3', type: 'note', content: "Never trust a yellow banana for bread. Let it succumb to the spots.", color: '#5c4d4d' },
      { id: 'm4', type: 'illustration', content: 'Scroll' }
    ]
  },
  {
    title: "The Layers of Love",
    subtitle: "Epistle to the Italians",
    content: "Consider the lasagna. Is it not a building? A temple of flavor constructed brick by noodle brick? When we remove the gluten, we must not remove the soul. The structure stands on the foundation of the sauce and the mortar of the cheese. Let your layers be generous, for in abundance we find comfort.",
    recipe: RECIPES.find(r => r.id === 'lasagna'),
    marginalia: [
      { id: 'm5', type: 'illustration', content: 'Utensils' },
      { id: 'm6', type: 'note', content: "Patience is the secret ingredient in any sauce.", color: '#8a3324' }
    ]
  }
];
