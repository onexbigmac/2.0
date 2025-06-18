const layoutScripts = {
  'layout-one': './js/layout-one.js',
  'layout-two': './js/layout-two.js',
  'layout-three': './js/layout-three.js',
  'layout-four': './js/layout-four.js',
  'layout-img-side-by-side': './js/layout-img-side-by-side.js',
  'layout-text-right': './js/layout-text-right.js',      
  'layout-text-left': './js/layout-text-left.js',  
  'layout-text-left-image': './js/layout-text-left-image.js', 
  'layout-big-image-left-2image': './js/layout-big-image-left-2image.js',
  'layout-big-image-right-2image': './js/layout-big-image-right-2image.js',  
  'layout-2up-image': './js/layout-2up-image.js' ,
  'layout-Hud4':'./js/layout-hud4.js'
    
};

const usedLayouts = Object.keys(layoutScripts).filter(tag => document.querySelector(tag));

const importPromises = usedLayouts.map(tag =>
  import(layoutScripts[tag])
    .then(() => {
      console.log(`${tag} loaded`);
      return customElements.whenDefined(tag);
    })
    .catch(err => console.error(`Failed to load ${tag}:`, err))
);

Promise.all(importPromises).then(() => {
  console.log('All layouts loaded.');

  // Delay to ensure custom elements render their inner HTML
  setTimeout(() => {
    // ✅ INIT SCROLL ANIMATIONS
    const animateOnScrollEls = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const anim = el.dataset.anim || 'animate__fadeIn';
          el.classList.add(anim);
         // observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1
    });

    animateOnScrollEls.forEach(el => observer.observe(el));
    console.log('Scroll animations initialized on', animateOnScrollEls.length, 'elements');

    // ✅ INIT PARALLAX
    const images = document.querySelectorAll('.parallax');
    if (images.length > 0) {
      images.forEach(img => {
        const orientation = img.dataset.orientation || 'up';
        const delay = parseFloat(img.dataset.delay) || 1;
        const scale = parseFloat(img.dataset.scale) || 1.3;
        const transition = img.dataset.transition || 'ease-out';
        const overflow = img.dataset.overflow === 'true';

        new simpleParallax(img, {
          orientation,
          delay,
          scale,
          transition,
          overflow,
        });
      });
      console.log('simpleParallax applied to', images.length, 'images');
    } else {
      console.warn('No .parallax images found');
    }

  }, 100); // small delay for layout rendering
});







// ✅ Smooth mouse progress bar logic


// Try to get existing style tag or create one

let styleTag = document.getElementById('mouse-vars-style');
if (!styleTag) {
  styleTag = document.createElement('style');
  styleTag.id = 'mouse-vars-style';
  document.head.appendChild(styleTag);
}

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
const speed = 0.9;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX / window.innerWidth;
  targetY = e.clientY / window.innerHeight;
});


let frameCount = 0;


function animate() {
  frameCount++;
  if (frameCount % 10 === 0) {
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    const roundedX = Math.round(currentX * 10) / 10;
    const roundedY = Math.round(currentY * 10) / 10;
    const percentX = (roundedX * 100).toFixed(1);
    const percentY = (roundedY * 100).toFixed(1);

    styleTag.textContent = `
      :root {
        --mouseX: ${roundedX};
        --mouseY: ${roundedY};
        --mouseXPercentRaw: ${percentX};
        --mouseYPercentRaw: ${percentY};
        --mouseXPercent: ${percentX}%;
        --mouseYPercent: ${percentY}%;
      }
    `;
  }
  requestAnimationFrame(animate);
}

animate();
console.log('Mouse tracking with normalized and percentage CSS variables initialized via dynamic style tag');




