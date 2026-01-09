
// Procedural Art Generator for The Glutenberg Bible
// Generates unique, abstract, manuscript-style art based on recipe content

class ArtGenerator {
    constructor() {
        this.colors = [
            '#722F37', // Burgundy
            '#B8860B', // Gold
            '#87A96B', // Sage
            '#D4A574', // Dusty Rose
            '#3C2415', // Sepia
            '#F4F1E8'  // Parchment
        ];
    }

    generate(seed, canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Seeded random
        let seedVal = this.hashString(seed);
        const random = () => {
            const x = Math.sin(seedVal++) * 10000;
            return x - Math.floor(x);
        };

        // Clear and fill background
        ctx.fillStyle = '#2b231d'; // Dark background for painting feel
        ctx.fillRect(0, 0, width, height);
        
        // Base texture
        this.drawTexture(ctx, width, height, random);

        // Main abstract shapes
        const shapeCount = 5 + Math.floor(random() * 5);
        for (let i = 0; i < shapeCount; i++) {
            this.drawAbstractShape(ctx, width, height, random);
        }

        // Gold leaf accents
        this.drawGoldAccents(ctx, width, height, random);
        
        // Overlay vignette
        const gradient = ctx.createRadialGradient(width/2, height/2, width/3, width/2, height/2, width);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.6)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash;
    }

    drawTexture(ctx, w, h, rnd) {
        for (let i = 0; i < 200; i++) {
            ctx.fillStyle = `rgba(255, 255, 255, ${rnd() * 0.05})`;
            const size = rnd() * 100;
            ctx.fillRect(rnd() * w, rnd() * h, size, size);
        }
    }

    drawAbstractShape(ctx, w, h, rnd) {
        const color = this.colors[Math.floor(rnd() * this.colors.length)];
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6 + rnd() * 0.4;
        
        ctx.beginPath();
        let x = rnd() * w;
        let y = rnd() * h;
        ctx.moveTo(x, y);
        
        const points = 3 + Math.floor(rnd() * 5);
        for (let i = 0; i < points; i++) {
            const cx = x + (rnd() - 0.5) * 200;
            const cy = y + (rnd() - 0.5) * 200;
            x = x + (rnd() - 0.5) * 200;
            y = y + (rnd() - 0.5) * 200;
            ctx.quadraticCurveTo(cx, cy, x, y);
        }
        ctx.closePath();
        ctx.fill();
        
        // Brush stroke effect
        if (rnd() > 0.5) {
            ctx.strokeStyle = `rgba(0,0,0,0.2)`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
    }

    drawGoldAccents(ctx, w, h, rnd) {
        ctx.fillStyle = '#B8860B';
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 10;
        
        for (let i = 0; i < 15; i++) {
            const x = rnd() * w;
            const y = rnd() * h;
            const r = rnd() * 5;
            
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowBlur = 0;
    }
}
