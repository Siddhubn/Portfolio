// scripts.js

// Initialize Three.js Scene
const canvasContainer = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
canvasContainer.appendChild(renderer.domElement);

// Add Rotating Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Resize Renderer on Window Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// GSAP Animations for Sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none none'
        }}
    );
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const text = "Hi, Am Siddharth a Tech Enthusiast | Web Developer | Full Stack Developer | Data Analyst | Always open towards new Challenges | Believes in Practical Experience over Theorotical Knowledge. ";
    const typedText = document.getElementById("typed-text");
    const cursor = document.querySelector(".cursor");

    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.textContent += text[index];
            index++;
            setTimeout(type, 50);
        } else {
            cursor.style.display = "none";
        }
    }

    type();
});