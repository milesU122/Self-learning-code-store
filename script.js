document.addEventListener('DOMContentLoaded', () => {
    const ec2Button = document.getElementById('ec2-button');
    const heroContent = document.querySelector('.hero-content');
    const siteTitle = document.getElementById('site-title');
    const mainContent = document.querySelector('main');

    let clickStep = 0;

    function handleHeroClick() {
        if (clickStep === 0) {
            // First click: Add 'step1' class to trigger the animation
            heroContent.classList.add('step1');
            clickStep = 1;
        } else if (clickStep === 1) {
            // Second click: Scroll to main content
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }
    }

    ec2Button.addEventListener('click', handleHeroClick);
    siteTitle.addEventListener('click', handleHeroClick); // Also allow clicking the title to scroll

    // --- PROGRESS TRACKER ---
    const progressCheckboxes = document.querySelectorAll('.progress-list input[type="checkbox"]');
    const storageKey = 'plebLearnEC2Progress';

    // Load progress from localStorage
    function loadProgress() {
        const savedProgress = JSON.parse(localStorage.getItem(storageKey));
        if (savedProgress) {
            progressCheckboxes.forEach(checkbox => {
                if (savedProgress[checkbox.id]) {
                    checkbox.checked = true;
                }
            });
        }
    }

    // Save progress to localStorage
    function saveProgress() {
        const currentProgress = {};
        progressCheckboxes.forEach(checkbox => {
            currentProgress[checkbox.id] = checkbox.checked;
        });
        localStorage.setItem(storageKey, JSON.stringify(currentProgress));
    }

    // Add event listeners to checkboxes
    progressCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveProgress);
    });

    // Initial load
    loadProgress();
});