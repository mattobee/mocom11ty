window.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.section[id]');

    const config = {
        threshold: [0, 0.25, 0.75, 1]
      };      

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            console.log(entry);
            if (entry.intersectionRatio > 0.5) {
                console.log(entry.intersectionRatio);
                console.log('in the view', id);
                document.querySelector(`nav li a[href="#${id}"]`).classList.add('current');
            } else {
                console.log('out of view', id);
                document.querySelector(`nav li a[href="#${id}"]`).classList.remove('current');
            }
        }, config);
    }, config);

    sections.forEach(section => { observer.observe(section); });
	
});
