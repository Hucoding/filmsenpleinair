const fdpa_open_btn = document.querySelector('.fdpa-open-btn');

const fdpa_close_btn = document.querySelector('.fdpa-close-btn');

const fdpa_nav = document.querySelectorAll('.fdpa-nav');

    fdpa_open_btn.addEventListener('click', () => {
        fdpa_nav.forEach(nav_el => {
            nav_el.classList.add('visible') });
    });

    fdpa_close_btn.addEventListener('click', () => {
        fdpa_nav.forEach(nav_el => {
            nav_el.classList.remove('visible') });
    });