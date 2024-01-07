// Add interactivity here if needed. For instance:
document.querySelectorAll('.reason').forEach(item => {
    item.addEventListener('click', event => {
        alert(item.querySelector('h2').innerText + ' - Learn more on our detailed pages.');
    });
});
