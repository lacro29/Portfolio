document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const sections = document.querySelectorAll('.section1');

window.addEventListener('scroll', checkSections)

checkSections();

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section1) => {
        const section1Top = section1.getBoundingClientRect().top;

        if(section1Top < triggerBottom) {
            section1.classList.add('show');
        } else {
            section1.classList.remove('show');
        }
    });
}