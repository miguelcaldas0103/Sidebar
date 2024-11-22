const toggleButton = document.querySelector('.toggle-sidebar')
const sideContent = document.querySelector('.sidebar-container')

toggleButton.addEventListener('click', () => {
    sideContent.classList.toggle('active');
    document.querySelector('main').classList.toggle('sidebar-active');
})