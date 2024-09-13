document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    toggleButton.addEventListener('click', function () {
        var skillsList = skillsSection.querySelector('ul');
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
            skillsList.style.animation = 'fadeIn 0.5s ease-in-out';
        }
        else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
    // Add hover animation to sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.addEventListener('mouseenter', function () {
            section.style.transform = 'translateY(-5px)';
        });
        section.addEventListener('mouseleave', function () {
            section.style.transform = 'translateY(0)';
        });
    });
});
