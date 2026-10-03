function getSkills() {
    return [
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' }
    ];
}
function displaySkills() {
    const skills = getSkills();
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `<strong>${skill.name}</strong>: ${skill.level}`;
        skillsContainer.appendChild(skillElement);
    });
}

document.addEventListener('DOMContentLoaded', displaySkills);
