

function closeAllSubmenus() {
    document.querySelectorAll('.submenu.active').forEach(menu => {
        menu.classList.remove('active');
    });
}

document.querySelectorAll('.nested-menu li').forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.submenu');

    if (submenu) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Close others first
            const isAlreadyOpen = submenu.classList.contains('active');

            // Always close all submenus
            closeAllSubmenus();

            // Reopen only if it wasn't already open
            if (!isAlreadyOpen) {
                submenu.classList.add('active');
            }
            console.log('Toggled submenu:', submenu.classList.contains('active'));
        });
    }
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.nested-menu')) {
        closeAllSubmenus();
    }
});