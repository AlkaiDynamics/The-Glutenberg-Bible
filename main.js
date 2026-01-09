// The Glutenberg Bible - Main JavaScript
// Ancient wisdom meets modern web technology

class GlutenbergBible {
    constructor() {
        this.recipes = this.initializeRecipes();
        this.transformations = this.initializeTransformations();
        this.init();
    }
    
    init() {
        this.setupParchmentBackground();
        this.setupScrollAnimations();
        this.setupRecipeCarousel();
        this.setupTransformationTool();
        this.setupMarginalia();
        this.setupNavigation();
    }
    
    // Initialize recipe database
    initializeRecipes() {
        return [
            {
                id: 'banana-bread',
                title: "The Levenly Father's Blessing",
                description: "A divine banana bread that transforms humble ingredients into something extraordinary",
                image: 'resources/banana-bread-art.png',
                time: '60 min',
                servings: '10-12',
                difficulty: 'Easy',
                ingredients: [
                    '3 ripe bananas, mashed',
                    '1/4 cup coconut oil, melted',
                    '1/4 cup honey',
                    '2 large eggs',
                    '1 tsp pure vanilla extract',
                    '1 1/2 cups Bob\'s Red Mill 1-to-1 Gluten-Free Baking Mix',
                    '1 tsp baking soda',
                    '1/2 tsp fine sea salt',
                    '1/2 tsp ground cinnamon'
                ],
                instructions: [
                    'Preheat oven to 350°F (175°C). Grease and flour a loaf pan.',
                    'Combine mashed bananas, coconut oil, honey, eggs, and vanilla.',
                    'Whisk together dry ingredients in separate bowl.',
                    'Gently fold dry ingredients into wet ingredients.',
                    'Pour into prepared pan and bake 50-60 minutes.',
                    'Cool completely before slicing.'
                ],
                nutrition: {
                    calories: 180,
                    protein: 4,
                    carbs: 28,
                    fat: 7,
                    fiber: 3
                }
            },
            {
                id: 'lasagna',
                title: "Layers of Love",
                description: "A warm, comforting embrace in the form of food, free from gluten but full of flavor",
                image: 'resources/lasagna-art.png',
                time: '90 min',
                servings: '8',
                difficulty: 'Medium',
                ingredients: [
                    '2 tbsp robust olive oil',
                    '1 sweet onion, finely chopped',
                    '3 assertive garlic cloves, minced',
                    '1 pound lean ground beef',
                    '1 pound savory Italian sausage',
                    '2 (24-ounce) jars high-quality marinara sauce',
                    '1 (6-ounce) can concentrated tomato paste',
                    '1 tsp fragrant dried basil',
                    '1 tsp robust dried oregano',
                    'Gluten-free lasagna noodles',
                    '15 oz ricotta cheese',
                    '2 cups mozzarella cheese',
                    '1 cup Parmesan cheese'
                ],
                instructions: [
                    'Heat olive oil in large pot over medium heat.',
                    'Sauté onion until translucent, add garlic.',
                    'Brown ground beef and sausage, breaking into crumbles.',
                    'Add marinara sauce, tomato paste, and seasonings.',
                    'Simmer sauce for 20 minutes.',
                    'Layer sauce, noodles, ricotta, and cheeses in baking dish.',
                    'Bake at 375°F for 45 minutes until bubbly.'
                ],
                nutrition: {
                    calories: 420,
                    protein: 28,
                    carbs: 35,
                    fat: 22,
                    fiber: 4
                }
            }
        ];
    }
    
    // Initialize transformation rules
    initializeTransformations() {
        return {
            'wheat flour': {
                replace: 'Bob\'s Red Mill 1-to-1 Gluten-Free Baking Mix',
                ratio: '1:1',
                notes: 'Contains xanthan gum for perfect texture'
            },
            'all-purpose flour': {
                replace: 'Rice flour + tapioca starch + potato starch (2:1:1)',
                ratio: '1:1',
                notes: 'Add 1/4 tsp xanthan gum per cup'
            },
            'bread flour': {
                replace: 'Sorghum flour + tapioca starch + almond flour (3:1:1)',
                ratio: '1:1',
                notes: 'Best for bread recipes with yeast'
            },
            'pasta': {
                replace: 'Gluten-free pasta (rice, corn, or quinoa-based)',
                ratio: '1:1',
                notes: 'Cook according to package directions'
            },
            'soy sauce': {
                replace: 'Tamari or coconut aminos',
                ratio: '1:1',
                notes: 'Tamari is wheat-free soy sauce'
            },
            'barley': {
                replace: 'Quinoa or buckwheat',
                ratio: '1:1',
                notes: 'Rinse quinoa before cooking'
            }
        };
    }
    
    // Setup parchment background with shader effects
    setupParchmentBackground() {
        const canvas = document.getElementById('parchmentCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.drawParchmentTexture(ctx, canvas.width, canvas.height);
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
    }
    
    // Draw aged parchment texture
    drawParchmentTexture(ctx, width, height) {
        // Base parchment color
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, '#F4F1E8');
        gradient.addColorStop(0.5, '#E8E0D0');
        gradient.addColorStop(1, '#F4F1E8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add texture and aging effects
        ctx.globalAlpha = 0.1;
        
        // Create noise pattern for texture
        for (let i = 0; i < 1000; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const size = Math.random() * 2;
            
            ctx.fillStyle = Math.random() > 0.5 ? '#8B7355' : '#D4C4A8';
            ctx.fillRect(x, y, size, size);
        }
        
        // Add subtle staining
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const radius = Math.random() * 100 + 50;
            
            const stainGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            stainGradient.addColorStop(0, 'rgba(139, 115, 85, 0.05)');
            stainGradient.addColorStop(1, 'rgba(139, 115, 85, 0)');
            
            ctx.fillStyle = stainGradient;
            ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        }
        
        ctx.globalAlpha = 1;
    }
    
    // Setup scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
        
        // Animate marginalia separately
        document.querySelectorAll('.marginalia').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Setup recipe carousel
    setupRecipeCarousel() {
        const splideElement = document.getElementById('recipeSplide');
        if (!splideElement) return;
        
        new Splide('#recipeSplide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        }).mount();
    }
    
    // Setup transformation tool functionality
    setupTransformationTool() {
        const fileInput = document.getElementById('recipeUpload');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                this.handleFileUpload(e.target.files);
            });
        }
        
        // Setup drag and drop
        const uploadArea = document.querySelector('.upload-area');
        if (uploadArea) {
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.style.background = 'rgba(135, 169, 107, 0.3)';
            });
            
            uploadArea.addEventListener('dragleave', (e) => {
                e.preventDefault();
                uploadArea.style.background = 'rgba(135, 169, 107, 0.1)';
            });
            
            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.style.background = 'rgba(135, 169, 107, 0.1)';
                this.handleFileUpload(e.dataTransfer.files);
            });
        }
    }
    
    // Handle file uploads
    handleFileUpload(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                this.processImageFile(file);
            } else if (file.type === 'text/plain') {
                this.processTextFile(file);
            }
        });
    }
    
    // Process image files (OCR simulation)
    processImageFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.showProcessingAnimation();
            
            // Simulate OCR processing
            setTimeout(() => {
                const mockRecipe = this.generateMockRecipe();
                this.displayRecipeForTransformation(mockRecipe);
            }, 2000);
        };
        reader.readAsDataURL(file);
    }
    
    // Process text files
    processTextFile(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.showProcessingAnimation();
            
            setTimeout(() => {
                const recipe = this.parseRecipeText(e.target.result);
                this.displayRecipeForTransformation(recipe);
            }, 1000);
        };
        reader.readAsText(file);
    }
    
    // Generate mock recipe for demonstration
    generateMockRecipe() {
        return {
            title: "Grandma's Chocolate Chip Cookies",
            ingredients: [
                "2 1/4 cups all-purpose flour",
                "1 tsp baking soda",
                "1 tsp salt",
                "1 cup butter, softened",
                "3/4 cup granulated sugar",
                "3/4 cup packed brown sugar",
                "2 large eggs",
                "2 tsp vanilla extract",
                "2 cups chocolate chips"
            ],
            instructions: [
                "Preheat oven to 375°F",
                "Mix flour, baking soda, and salt",
                "Beat butter and sugars until creamy",
                "Add eggs and vanilla",
                "Gradually add flour mixture",
                "Stir in chocolate chips",
                "Drop by rounded tablespoon onto ungreased cookie sheets",
                "Bake for 9-11 minutes"
            ]
        };
    }
    
    // Parse recipe text
    parseRecipeText(text) {
        const lines = text.split('\n').filter(line => line.trim());
        const title = lines[0] || 'Unknown Recipe';
        const ingredients = [];
        const instructions = [];
        
        let inIngredients = false;
        let inInstructions = false;
        
        lines.forEach(line => {
            const lower = line.toLowerCase();
            if (lower.includes('ingredient')) {
                inIngredients = true;
                inInstructions = false;
                return;
            }
            if (lower.includes('instruction') || lower.includes('direction')) {
                inIngredients = false;
                inInstructions = true;
                return;
            }
            
            if (inIngredients && line.trim()) {
                ingredients.push(line.trim());
            } else if (inInstructions && line.trim()) {
                instructions.push(line.trim());
            }
        });
        
        return { title, ingredients, instructions };
    }
    
    // Show processing animation
    showProcessingAnimation() {
        const uploadArea = document.querySelector('.upload-area');
        uploadArea.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🔮</div>
            <p><strong>The Oracle is analyzing your recipe...</strong></p>
            <div style="margin-top: 1rem;">
                <div style="width: 40px; height: 40px; border: 3px solid var(--sage); border-top: 3px solid var(--burgundy); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            </div>
        `;
        
        // Add CSS animation
        if (!document.getElementById('spin-animation')) {
            const style = document.createElement('style');
            style.id = 'spin-animation';
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Display recipe for transformation
    displayRecipeForTransformation(recipe) {
        const uploadArea = document.querySelector('.upload-area');
        uploadArea.innerHTML = `
            <h4 style="color: var(--burgundy); margin-bottom: 1rem;">${recipe.title}</h4>
            <p style="color: var(--sage); margin-bottom: 1rem;">Original recipe detected. Ready for transformation!</p>
            <div style="font-size: 2rem;">✨</div>
        `;
        
        // Store current recipe for transformation
        this.currentRecipe = recipe;
    }
    
    // Setup marginalia animations
    setupMarginalia() {
        const marginalia = document.querySelectorAll('.marginalia');
        
        marginalia.forEach(note => {
            note.addEventListener('mouseenter', () => {
                anime({
                    targets: note,
                    scale: 1.05,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
            
            note.addEventListener('mouseleave', () => {
                anime({
                    targets: note,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });
    }
    
    // Setup navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');
            });
        });
    }
    
    // Transform recipe with gluten-free substitutions
    transformRecipe() {
        if (!this.currentRecipe) {
            this.showTransformationError('Please upload or enter a recipe first');
            return;
        }
        
        const constraints = document.querySelector('.constraint-input').value.toLowerCase();
        const transformedRecipe = this.performTransformations(this.currentRecipe, constraints);
        
        this.displayTransformationResult(transformedRecipe);
        this.addTransformationEffects();
    }
    
    // Perform gluten-free transformations
    performTransformations(recipe, constraints) {
        const transformed = {
            title: recipe.title + ' (Gluten-Free)',
            ingredients: [],
            instructions: recipe.instructions,
            substitutions: [],
            improvements: []
        };
        
        recipe.ingredients.forEach(ingredient => {
            const lowerIngredient = ingredient.toLowerCase();
            let transformedIngredient = ingredient;
            
            // Check for gluten-containing ingredients
            for (const [key, substitution] of Object.entries(this.transformations)) {
                if (lowerIngredient.includes(key)) {
                    transformedIngredient = ingredient.replace(
                        new RegExp(key, 'gi'),
                        substitution.replace
                    );
                    
                    transformed.substitutions.push({
                        original: ingredient,
                        substitute: transformedIngredient,
                        notes: substitution.notes
                    });
                    
                    break;
                }
            }
            
            transformed.ingredients.push(transformedIngredient);
        });
        
        // Add improvements based on constraints
        if (constraints.includes('healthy') || constraints.includes('nutritious')) {
            transformed.improvements.push('Added ground flaxseed for omega-3 fatty acids');
            transformed.improvements.push('Reduced sugar content by 25%');
        }
        
        if (constraints.includes('protein') || constraints.includes('high protein')) {
            transformed.improvements.push('Added Greek yogurt for extra protein');
        }
        
        if (constraints.includes('fiber') || constraints.includes('high fiber')) {
            transformed.improvements.push('Added chia seeds for fiber and texture');
        }
        
        return transformed;
    }
    
    // Display transformation results
    displayTransformationResult(transformedRecipe) {
        const resultDiv = document.getElementById('transformationResult');
        
        let substitutionsHTML = '';
        if (transformedRecipe.substitutions.length > 0) {
            substitutionsHTML = `
                <div style="margin: 1.5rem 0;">
                    <h4 style="color: var(--burgundy); margin-bottom: 1rem;">🔮 Magical Substitutions</h4>
                    ${transformedRecipe.substitutions.map(sub => `
                        <div style="background: rgba(135, 169, 107, 0.1); padding: 0.8rem; margin: 0.5rem 0; border-radius: 6px; border-left: 3px solid var(--sage);">
                            <strong>Original:</strong> ${sub.original}<br>
                            <strong>Substitute:</strong> ${sub.substitute}<br>
                            <em style="color: var(--sage); font-size: 0.9rem;">${sub.notes}</em>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        let improvementsHTML = '';
        if (transformedRecipe.improvements.length > 0) {
            improvementsHTML = `
                <div style="margin: 1.5rem 0;">
                    <h4 style="color: var(--burgundy); margin-bottom: 1rem;">✨ Health Enhancements</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${transformedRecipe.improvements.map(improvement => `
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid rgba(135, 169, 107, 0.3);">
                                🌟 ${improvement}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }
        
        resultDiv.innerHTML = `
            <h3 style="color: var(--burgundy); font-family: 'Cinzel', serif; font-size: 1.5rem; margin-bottom: 1rem;">
                ✨ ${transformedRecipe.title} ✨
            </h3>
            
            ${substitutionsHTML}
            ${improvementsHTML}
            
            <div style="margin-top: 2rem; text-align: center;">
                <button class="method-btn" onclick="window.location.href='recipes.html'" style="margin-right: 1rem;">
                    📖 View All Recipes
                </button>
                <button class="method-btn" onclick="saveTransformedRecipe()">
                    💾 Save Recipe
                </button>
            </div>
        `;
        
        resultDiv.style.display = 'block';
        
        // Scroll to results
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Add transformation visual effects
    addTransformationEffects() {
        // Particle effect
        this.createParticleEffect();
        
        // Sound effect (simulated with vibration)
        if (navigator.vibrate) {
            navigator.vibrate(100);
        }
        
        // Animate result appearance
        anime({
            targets: '#transformationResult',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutElastic(1, .8)'
        });
    }
    
    // Create particle effect
    createParticleEffect() {
        const particles = [];
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: var(--gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: 50%;
                top: 50%;
            `;
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            // Animate particle
            anime({
                targets: particle,
                translateX: (Math.random() - 0.5) * 400,
                translateY: (Math.random() - 0.5) * 400,
                scale: [1, 0],
                opacity: [1, 0],
                duration: 1500,
                easing: 'easeOutQuad',
                complete: () => {
                    particle.remove();
                }
            });
        }
    }
    
    // Show transformation error
    showTransformationError(message) {
        const resultDiv = document.getElementById('transformationResult');
        resultDiv.innerHTML = `
            <div style="color: var(--burgundy); text-align: center; padding: 2rem;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">⚠️</div>
                <h4>Error</h4>
                <p>${message}</p>
                <button class="method-btn" onclick="document.getElementById('transformationResult').style.display='none'" style="margin-top: 1rem;">
                    Try Again
                </button>
            </div>
        `;
        resultDiv.style.display = 'block';
    }
}

// Global functions for HTML onclick handlers
function showTextInput() {
    document.getElementById('textInputArea').style.display = 'block';
    document.getElementById('voiceInputArea').style.display = 'none';
    document.getElementById('urlInputArea').style.display = 'none';
}

function showVoiceInput() {
    document.getElementById('textInputArea').style.display = 'none';
    document.getElementById('voiceInputArea').style.display = 'block';
    document.getElementById('urlInputArea').style.display = 'none';
}

function showUrlInput() {
    document.getElementById('textInputArea').style.display = 'none';
    document.getElementById('voiceInputArea').style.display = 'none';
    document.getElementById('urlInputArea').style.display = 'block';
}

function startVoiceRecording() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onresult = (event) => {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            
            // Find the textarea and update it
            const textarea = document.querySelector('#textInputArea textarea');
            if (textarea) {
                textarea.value = transcript;
                document.getElementById('textInputArea').style.display = 'block';
                document.getElementById('voiceInputArea').style.display = 'none';
            }
        };
        
        recognition.start();
        
        // Visual feedback
        const button = event.target;
        const originalText = button.innerHTML;
        button.innerHTML = '<span>🎤</span> Recording...';
        button.style.background = 'var(--burgundy)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'var(--burgundy)';
        }, 5000);
        
    } else {
        alert('Voice recognition is not supported in this browser. Please type your recipe instead.');
    }
}

function transformRecipe() {
    if (window.glutenbergBible) {
        window.glutenbergBible.transformRecipe();
    }
}

function saveTransformedRecipe() {
    // Simulate saving to local storage
    const recipes = JSON.parse(localStorage.getItem('glutenbergRecipes') || '[]');
    recipes.push({
        id: Date.now(),
        title: 'Transformed Recipe',
        date: new Date().toISOString()
    });
    localStorage.setItem('glutenbergRecipes', JSON.stringify(recipes));
    
    // Show success message
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Saved!';
    button.style.background = 'var(--sage)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'var(--burgundy)';
    }, 2000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.glutenbergBible = new GlutenbergBible();
    
    // Add some initial fade-in animations
    anime({
        targets: '.header-content',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 500
    });
    
    // Animate drop cap
    setTimeout(() => {
        const dropCap = document.querySelector('.drop-cap');
        if (dropCap) {
            anime({
                targets: dropCap,
                scale: [0, 1],
                rotate: [180, 0],
                duration: 800,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    }, 1000);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        anime.running.forEach(animation => animation.pause());
    } else {
        // Resume animations when page is visible
        anime.running.forEach(animation => animation.play());
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlutenbergBible;
}