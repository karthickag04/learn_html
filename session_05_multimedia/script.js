// Canvas 1 - Rectangle Drawing
const canvas1 = document.getElementById('canvas1');
if (canvas1) {
    const ctx1 = canvas1.getContext('2d');
    
    // Draw filled rectangle
    ctx1.fillStyle = '#3498db';
    ctx1.fillRect(50, 40, 150, 100);
    
    // Draw stroked rectangle
    ctx1.strokeStyle = '#e74c3c';
    ctx1.lineWidth = 5;
    ctx1.strokeRect(220, 40, 150, 100);
    
    // Draw semi-transparent rectangle
    ctx1.fillStyle = 'rgba(46, 204, 113, 0.5)';
    ctx1.fillRect(135, 80, 150, 100);
}

// Canvas 2 - Circle and Arc
const canvas2 = document.getElementById('canvas2');
if (canvas2) {
    const ctx2 = canvas2.getContext('2d');
    
    // Draw circle
    ctx2.beginPath();
    ctx2.arc(100, 100, 60, 0, 2 * Math.PI);
    ctx2.fillStyle = '#9b59b6';
    ctx2.fill();
    ctx2.strokeStyle = '#8e44ad';
    ctx2.lineWidth = 3;
    ctx2.stroke();
    
    // Draw arc
    ctx2.beginPath();
    ctx2.arc(280, 100, 60, 0, 1.5 * Math.PI);
    ctx2.strokeStyle = '#e67e22';
    ctx2.lineWidth = 8;
    ctx2.stroke();
    
    // Draw filled arc
    ctx2.beginPath();
    ctx2.arc(280, 100, 40, 0, 1.5 * Math.PI);
    ctx2.fillStyle = '#f39c12';
    ctx2.fill();
}

// Canvas 3 - Gradient
const canvas3 = document.getElementById('canvas3');
if (canvas3) {
    const ctx3 = canvas3.getContext('2d');
    
    // Linear gradient
    const linearGrad = ctx3.createLinearGradient(0, 0, 400, 0);
    linearGrad.addColorStop(0, '#e74c3c');
    linearGrad.addColorStop(0.5, '#f39c12');
    linearGrad.addColorStop(1, '#f1c40f');
    
    ctx3.fillStyle = linearGrad;
    ctx3.fillRect(0, 0, 400, 100);
    
    // Radial gradient
    const radialGrad = ctx3.createRadialGradient(200, 150, 10, 200, 150, 80);
    radialGrad.addColorStop(0, '#3498db');
    radialGrad.addColorStop(0.5, '#2980b9');
    radialGrad.addColorStop(1, '#1abc9c');
    
    ctx3.fillStyle = radialGrad;
    ctx3.fillRect(0, 100, 400, 100);
}

// Canvas 4 - Text
const canvas4 = document.getElementById('canvas4');
if (canvas4) {
    const ctx4 = canvas4.getContext('2d');
    
    // Draw background
    ctx4.fillStyle = '#ecf0f1';
    ctx4.fillRect(0, 0, 400, 200);
    
    // Draw text with different styles
    ctx4.font = 'bold 40px Arial';
    ctx4.fillStyle = '#2c3e50';
    ctx4.fillText('Canvas Text', 50, 60);
    
    ctx4.font = 'italic 30px Georgia';
    ctx4.strokeStyle = '#e74c3c';
    ctx4.lineWidth = 2;
    ctx4.strokeText('Stroked Text', 50, 120);
    
    ctx4.font = '25px Verdana';
    ctx4.fillStyle = '#16a085';
    ctx4.fillText('HTML5 Canvas API', 50, 170);
}

// Canvas 5 - Image Drawing
const canvas5 = document.getElementById('canvas5');
if (canvas5) {
    const ctx5 = canvas5.getContext('2d');
    const img = new Image();
    
    img.onload = function() {
        // Draw image at original size
        ctx5.drawImage(img, 10, 10);
        
        // Draw scaled image
        ctx5.drawImage(img, 150, 10, 100, 75);
        
        // Draw cropped and scaled image
        ctx5.drawImage(img, 50, 50, 100, 75, 270, 10, 120, 90);
        
        // Add border
        ctx5.strokeStyle = '#3498db';
        ctx5.lineWidth = 3;
        ctx5.strokeRect(0, 0, 400, 300);
        
        // Add text overlay
        ctx5.font = 'bold 20px Arial';
        ctx5.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx5.fillRect(10, 250, 250, 35);
        ctx5.fillStyle = '#2c3e50';
        ctx5.fillText('Canvas Image Drawing', 20, 275);
    };
    
    img.src = 'images/dog.jpg';
    
    // Fallback in case image doesn't load
    img.onerror = function() {
        ctx5.fillStyle = '#ecf0f1';
        ctx5.fillRect(0, 0, 400, 300);
        ctx5.font = '20px Arial';
        ctx5.fillStyle = '#7f8c8d';
        ctx5.fillText('Image loading...', 120, 150);
    };
}

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add play/pause indicators for media elements
document.querySelectorAll('audio, video').forEach(media => {
    media.addEventListener('play', function() {
        this.style.border = '3px solid #27ae60';
    });
    
    media.addEventListener('pause', function() {
        this.style.border = 'none';
    });
    
    media.addEventListener('ended', function() {
        this.style.border = '3px solid #e74c3c';
    });
});

// Console log for debugging
console.log('HTML5 Multimedia page loaded successfully!');
console.log('All canvas elements initialized');
console.log('Media event listeners attached');

// Add hover effect to image map areas
const mapAreas = document.querySelectorAll('map area');
mapAreas.forEach(area => {
    area.addEventListener('mouseenter', function() {
        console.log('Hovered over:', this.getAttribute('alt'));
    });
    
    area.addEventListener('click', function(e) {
        e.preventDefault();
        alert('You clicked: ' + this.getAttribute('alt'));
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.multimedia-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add loading state for iframes
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', function() {
        console.log('iFrame loaded:', this.getAttribute('title') || this.src);
    });
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to top
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Log media file availability
console.log('Media files detected:');
console.log('- Images: city.jpg, dog.jpg, hand.jpg');
console.log('- Audio: crowd-cheering.mp3');
console.log('- Video: mov_bbb.mp4');
