const cardsData = [
    { id: 1, title: "Exploring JavaScript", body: "Dive deep into JavaScript concepts, frameworks, and trends shaping the modern web.", image: "https://via.placeholder.com/150?text=JavaScript", link: "#" },
    { id: 2, title: "React for Beginners", body: "A step-by-step guide to building interactive UIs with React.js.", image: "https://via.placeholder.com/150?text=React", link: "#" },
    { id: 3, title: "Understanding Node.js", body: "Learn about backend development with Node.js and how it powers real-time applications.", image: "https://via.placeholder.com/150?text=Node.js", link: "#" },
    { id: 4, title: "CSS Tips & Tricks", body: "Master CSS techniques to create visually stunning and responsive designs.", image: "https://via.placeholder.com/150?text=CSS", link: "#" },
    { id: 5, title: "Web Accessibility 101", body: "Build websites that are inclusive and accessible to everyone.", image: "https://via.placeholder.com/150?text=Accessibility", link: "#" },
    { id: 6, title: "Mastering Git and GitHub", body: "Version control tips and collaboration techniques for developers.", image: "https://via.placeholder.com/150?text=GitHub", link: "#" },
    { id: 7, title: "SEO Strategies for 2024", body: "Boost your website's ranking with these SEO best practices.", image: "https://via.placeholder.com/150?text=SEO", link: "#" },
    { id: 8, title: "Responsive Web Design", body: "Techniques to make your website adapt seamlessly to any screen size.", image: "https://via.placeholder.com/150?text=Responsive+Design", link: "#" },
    { id: 9, title: "Diving into Python", body: "An overview of Python programming for beginners and advanced users.", image: "https://via.placeholder.com/150?text=Python", link: "#" },
    { id: 10, title: "Cloud Computing Basics", body: "Understand the fundamentals of cloud computing and its applications.", image: "https://via.placeholder.com/150?text=Cloud+Computing", link: "#" },
    { id: 11, title: "UI/UX Design Principles", body: "Learn the core principles of crafting user-centric designs.", image: "https://via.placeholder.com/150?text=UI/UX", link: "#" },
    { id: 12, title: "Building RESTful APIs", body: "A practical guide to designing robust RESTful APIs.", image: "https://via.placeholder.com/150?text=APIs", link: "#" },
    { id: 13, title: "Database Optimization", body: "Tips to enhance database performance and scalability.", image: "https://via.placeholder.com/150?text=Database", link: "#" },
    { id: 14, title: "Future of AI in Development", body: "Explore how AI is shaping the future of software development.", image: "https://via.placeholder.com/150?text=AI", link: "#" },
    { id: 15, title: "Mobile App Development", body: "Learn the essentials of building mobile applications.", image: "https://via.placeholder.com/150?text=Mobile+Apps", link: "#" },
    { id: 16, title: "Understanding APIs", body: "Everything you need to know about APIs and their integrations.", image: "https://via.placeholder.com/150?text=APIs", link: "#" },
    { id: 17, title: "Cybersecurity Essentials", body: "Protect your applications with these essential cybersecurity practices.", image: "https://via.placeholder.com/150?text=Cybersecurity", link: "#" },
    { id: 18, title: "Automation with Python", body: "Learn how to automate tasks and processes using Python.", image: "https://via.placeholder.com/150?text=Python+Automation", link: "#" }
];

let currentPage = 1;
const cardsPerPage = 6;

function displayCards(cardsToDisplay = cardsData.slice(0, cardsPerPage)) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = "";

    cardsToDisplay.forEach(card => {
        const cardElement = `
            <div class="card">
                <img src="${card.image}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                <a href="${card.link}">Read More</a>
            </div>
        `;
        resultsContainer.innerHTML += cardElement;
    });

    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === Math.ceil(cardsData.length / cardsPerPage);
}

function filterCards() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredCards = cardsData.filter(card =>
        card.title.toLowerCase().includes(query) || card.body.toLowerCase().includes(query)
    );

    // Display the matching cards dynamically
    displayFilteredCards(filteredCards);
}

function displayFilteredCards(filteredCards) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ""; // Clear previous results

    if (filteredCards.length === 0) {
        resultsContainer.innerHTML = "<p>No matching blogs found.</p>";
        return;
    }

    filteredCards.slice(0, cardsPerPage).forEach(card => {
        const cardElement = `
            <div class="card">
                <img src="${card.image}" alt="${card.title}">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
                <a href="${card.link}">Read More</a>
            </div>
        `;
        resultsContainer.innerHTML += cardElement;
    });

    // Pagination controls visibility update
    document.getElementById('prevBtn').style.display = "none";
    document.getElementById('nextBtn').style.display = "none";
}


function showSuggestions(query, filteredCards) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ""; // Clear previous suggestions

    if (query.trim() === "") return;

    const suggestions = filteredCards.map(card => `<li>${card.title}</li>`).join("");
    suggestionsBox.innerHTML = suggestions;
}

function nextPage() {
    if (currentPage < Math.ceil(cardsData.length / cardsPerPage)) {
        currentPage++;
        displayCards(cardsData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage));
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCards(cardsData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage));
    }
}

// Initial Display
displayCards();

