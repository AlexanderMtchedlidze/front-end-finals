// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ============================
    // Burger Menu Functionality
    // ============================
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle burger menu
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);

        if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


    // ============================
    // Fixed Header on Scroll
    // ============================
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove scrolled class based on scroll position
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // ============================
    // Fetch API - Load Movies
    // ============================
    const heroContent = document.getElementById('heroContent');
    const moviesGrid = document.getElementById('moviesGrid');

    // Function to create movie card element
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';

        const posterContent = movie.image
            ? `<img src="${movie.image}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            : '🎬';

        card.innerHTML = `
            <div class="movie-poster">
                ${posterContent}
            </div>
            <div class="movie-info">
                <div>
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <div class="movie-rating">
                            <svg class="star-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>${movie.rating}</span>
                        </div>
                    </div>
                </div>
                <button class="btn-secondary">View Details</button>
            </div>
        `;

        return card;
    }

    // Function to update hero section with featured movie
    function updateHeroSection(featured) {
        const ratingValue = heroContent.querySelector('.rating-value');
        const heroYear = heroContent.querySelector('.hero-year');
        const heroTitle = heroContent.querySelector('.hero-title');
        const heroDescription = heroContent.querySelector('.hero-description');
        const heroImage = document.getElementById('heroImage');

        ratingValue.textContent = featured.rating;
        heroYear.textContent = featured.year;
        heroTitle.textContent = featured.title;
        heroDescription.textContent = featured.description;

        // Load hero background image
        if (featured.image) {
            heroImage.src = featured.image;
            heroImage.alt = featured.title;
            heroImage.style.display = 'block';
        }
    }

    // Function to load movies data
    async function loadMovies() {
        try {
            // Show loading state
            moviesGrid.innerHTML = '<div class="loading">Loading movies...</div>';

            // Fetch data from local JSON file
            const response = await fetch('data/movies.json');

            // Check if response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse JSON data
            const data = await response.json();

            // Update hero section with featured movie
            if (data.featured) {
                updateHeroSection(data.featured);
            }

            // Clear loading message
            moviesGrid.innerHTML = '';

            // Create and append movie cards
            if (data.movies && data.movies.length > 0) {
                data.movies.forEach(movie => {
                    const card = createMovieCard(movie);
                    moviesGrid.appendChild(card);
                });
            } else {
                moviesGrid.innerHTML = '<div class="loading">No movies found.</div>';
            }

        } catch (error) {
            // Handle errors
            console.error('Error loading movies:', error);
            moviesGrid.innerHTML = `
                <div class="loading">
                    Failed to load movies. Please try again later.
                </div>
            `;

            // Keep loading message in hero
            heroContent.querySelector('.hero-title').textContent = 'Error Loading Content';
            heroContent.querySelector('.hero-description').textContent =
                'Unable to load movie data. Please refresh the page.';
        }
    }

    // Load movies when page loads
    loadMovies();


    // ============================
    // Smooth Scrolling for Navigation Links
    // ============================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetId = href;
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});