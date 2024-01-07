// Function to create the card elements
function createCard(data) {
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${data.icon}" alt="${data.title} Icon" class="icon">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <a href="${data.detailPage}" class="btn">Learn More</a>
    `;
    return card;
}

// Function to load the content
function loadContent() {
    fetch('"C:\Users\jstivala1\Documents\data.json"')  // Path to your JSON file
        .then(response => response.json())
        .then(data => {
            const infoSection = document.querySelector('.info-section');
            data.forEach(item => {
                infoSection.appendChild(createCard(item));
            });
        })
        .catch(error => {
            console.error('Error loading the content:', error);
        });
}

// Call the loadContent function when the window loads
window.addEventListener('load', loadContent);
