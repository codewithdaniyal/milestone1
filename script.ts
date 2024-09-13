document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLElement;

    toggleButton.addEventListener('click', () => {
        const skillsList = skillsSection.querySelector('ul') as HTMLUListElement;
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
            skillsList.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });

    // Add hover animation to sections
    const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-5px)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
        });
    });
});