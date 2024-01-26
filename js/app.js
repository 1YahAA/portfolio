window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

function scrollToProjects() {
    var projectsSection = document.getElementById('projectsSection');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}

