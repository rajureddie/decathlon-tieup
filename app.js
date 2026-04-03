const sportsData = [

    {
        id: 'skating',
        name: 'Skating',
        icon: 'fa-solid fa-person-skating',
        bg: './assets/images/skating.jpg'
    },
    {
        id: 'cricket',
        name: 'Cricket',
        icon: 'fa-solid fa-baseball-bat-ball',
        bg: './assets/images/cricket.jpg'
    },
    {
        id: 'gym-fitness',
        name: 'Gym & Fitness',
        icon: 'fa-solid fa-dumbbell',
        bg: './assets/images/gym-fitness.jpg'
    },
    {
        id: 'mountain-trekking',
        name: 'Mountain & Trekking',
        icon: 'fa-solid fa-mountain',
        bg: './assets/images/mountain-trekking.jpg'
    },
    {
        id: 'running',
        name: 'Running',
        icon: 'fa-solid fa-person-running',
        bg: './assets/images/running.jpg'
    },

    {
        id: 'basketball',
        name: 'Basketball',
        icon: 'fa-solid fa-basketball',
        bg: './assets/images/basketball.jpg'
    },
    {
        id: 'badminton',
        name: 'Badminton',
        icon: 'fa-solid fa-table-tennis-paddle-ball',
        bg: './assets/images/badminton.jpg'
    },
    {
        id: 'swimming',
        name: 'Swimming',
        icon: 'fa-solid fa-person-swimming',
        bg: './assets/images/swimming.jpg'
    }
];

const partnersData = {
    'running': [
        { name: 'City Striders Marathon Club', distance: '1.0 km', fees: '₹ 800 / month', website: 'https://example.com/citystriders', contact: '+91 98765 43210', maps: 'https://maps.google.com/?q=City+Striders', description: 'Join our marathon club for daily runs, endurance training, and expert pacing strategies.' },
        { name: 'Elite Track Academy', distance: '2.5 km', fees: '₹ 1,200 / month', contact: '+91 87654 32109', maps: 'https://maps.google.com/?q=Elite+Track+Academy', description: 'Professional track coaching for aspiring sprint and long-distance athletes.' }
    ],
    'skating': [
        { name: 'Roller Rink Pros', distance: '4.8 km', fees: '₹ 1,500 / month', website: 'https://example.com/rollerrink', contact: '+91 76543 21098', maps: 'https://maps.google.com/?q=Roller+Rink+Pros', description: 'Indoor roller rink with professional coaching for inline and quad skating.' },
        { name: 'Urban Glide Skating', distance: '6.2 km', fees: '₹ 1,000 / month', contact: '+91 65432 10987', maps: 'https://maps.google.com/?q=Urban+Glide+Skating', description: 'Outdoor urban skating classes focused on balance, speed, and agility.' }
    ],
    'cricket': [
        { name: 'Master Blasters Academy', distance: '1.5 km', fees: '₹ 2,500 / month', website: 'https://example.com/masterblasters', contact: '+91 54321 09876', maps: 'https://maps.google.com/?q=Master+Blasters+Academy', description: 'Premium cricket coaching facility featuring bowling machines and professional grass pitches.' },
        { name: 'Pace & Spin Cricket Coaching', distance: '3.0 km', fees: '₹ 2,000 / month', contact: '+91 43210 98765', maps: 'https://maps.google.com/?q=Pace+and+Spin', description: 'Specialized coaching focusing on fast bowling and spin variations.' },
        { name: 'NextGen Cricketers', distance: '5.1 km', fees: '₹ 1,800 / month', contact: '+91 32109 87654', maps: 'https://maps.google.com/?q=NextGen+Cricketers', description: 'Youth-focused cricket development programs with certified coaches.' }
    ],
    'gym-fitness': [
        { name: 'Iron Core Fitness', distance: '0.8 km', fees: '₹ 1,500 / month', website: 'https://example.com/ironcore', contact: '+91 21098 76543', maps: 'https://maps.google.com/?q=Iron+Core+Fitness', description: 'State-of-the-art gym equipment with personalized fitness coaching and diet plans.' },
        { name: 'FitLife Studio', distance: '1.2 km', fees: '₹ 2,000 / month', contact: '+91 10987 65432', maps: 'https://maps.google.com/?q=FitLife+Studio', description: 'Boutique fitness studio offering HIIT, yoga, and functional training.' }
    ],
    'mountain-trekking': [
        { name: 'Everest Explorers Club', distance: '3.2 km', fees: '₹ 2,000 / trip', website: 'https://example.com/everest', contact: '+91 99887 76655', maps: 'https://maps.google.com/?q=Everest+Explorers+Club', description: 'Premier mountain trekking club offering guided trips, gear rental, and high-altitude training.' },
        { name: 'Summit Seekers', distance: '5.5 km', fees: '₹ 1,500 / month', contact: '+91 88776 65544', maps: 'https://maps.google.com/?q=Summit+Seekers', description: 'Weekend hiking and outdoor survival skills workshops for beginners and pros.' }
    ],
    'basketball': [
        { name: 'Hoop Dreams Academy', distance: '2.0 km', fees: '₹ 1,800 / month', website: 'https://example.com/hoopdreams', contact: '+91 77665 54433', maps: 'https://maps.google.com/?q=Hoop+Dreams+Academy', description: 'Indoor wooden courts with NBA-style training drills and local tournament prep.' },
        { name: 'Slam Dunk Pros', distance: '4.5 km', fees: '₹ 1,500 / month', contact: '+91 66554 43322', maps: 'https://maps.google.com/?q=Slam+Dunk+Pros', description: 'Community basketball coaching focusing on shooting mechanics and teamwork.' }
    ],
    'badminton': [
        { name: 'Smash Hitters Hub', distance: '1.8 km', fees: '₹ 2,000 / month', website: 'https://example.com/smashhitters', contact: '+91 55443 32211', maps: 'https://maps.google.com/?q=Smash+Hitters+Hub', description: 'BWF standard courts with professional coaching for singles and doubles play.' },
        { name: 'Shuttle Masters', distance: '3.5 km', fees: '₹ 1,500 / month', contact: '+91 44332 21100', maps: 'https://maps.google.com/?q=Shuttle+Masters', description: 'Beginner-friendly badminton coaching with regular weekend practice matches.' }
    ],
    'swimming': [
        { name: 'Aqua Life Aquatic Center', distance: '2.2 km', fees: '₹ 2,500 / month', website: 'https://example.com/aqualife', contact: '+91 33221 10099', maps: 'https://maps.google.com/?q=Aqua+Life+Center', description: 'Olympic-sized indoor temperature-controlled pool with advanced stroke coaching.' },
        { name: 'Dolphin Swim School', distance: '4.0 km', fees: '₹ 1,800 / month', contact: '+91 22110 09988', maps: 'https://maps.google.com/?q=Dolphin+Swim+School', description: 'Learn-to-swim programs and water safety courses for all ages.' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const appRoot = document.getElementById('app-root');

    // State
    let currentView = 'categories'; // 'categories' or 'partners'
    let selectedSportId = null;

    // Inject Modal HTML into the document
    const modalHTML = `
        <div id="partner-modal" class="modal-overlay hidden">
            <div class="modal-content">
                <button class="close-modal" id="close-modal"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal-header">
                    <h3 id="modal-title" class="partner-title"></h3>
                </div>
                <p id="modal-desc" class="modal-desc"></p>
                <div class="modal-info">
                    <a id="modal-maps" target="_blank" class="modal-link btn-secondary"><i class="fa-solid fa-map-location-dot"></i> View on Google Maps</a>
                    <a id="modal-contact" class="modal-link btn-primary"><i class="fa-solid fa-phone"></i> <span id="modal-contact-text"></span></a>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const partnerModal = document.getElementById('partner-modal');
    document.getElementById('close-modal').addEventListener('click', () => {
        partnerModal.classList.add('hidden');
    });

    partnerModal.addEventListener('click', (e) => {
        if (e.target === partnerModal) {
            partnerModal.classList.add('hidden');
        }
    });

    // Render Categories View
    const renderCategories = () => {
        let html = `
            <div class="view">
                <div class="hero-section">
                    <h2>Find Your Perfect <span class="highlight">Coaching</span> Partner</h2>
                    <p>Elevate your game with top-rated facilities and expert coaches near you.</p>
                </div>
                <div class="container">
                    <div class="section-header">
                        <div>
                            <h2>Explore Sports</h2>
                            <p>Select a sport to find the best coaching partners.</p>
                        </div>
                        <div class="search-box">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id="search-input" placeholder="Search sports...">
                        </div>
                    </div>
                    <div class="sports-grid">
        `;

        sportsData.forEach((sport, index) => {
            html += `
                <div class="sport-card" data-id="${sport.id}" style="animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s forwards; opacity: 0;">
                    <div class="sport-card-bg" style="background-image: url('${sport.bg}')"></div>
                    <div class="sport-card-overlay"></div>
                    <div class="sport-card-content">
                        <i class="${sport.icon} sport-card-icon"></i>
                        <h3>${sport.name}</h3>
                    </div>
                </div>
            `;
        });

        html += `
                    </div>
                </div>
            </div>
        `;
        appRoot.innerHTML = html;

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                document.querySelectorAll('.sport-card').forEach(card => {
                    const text = card.querySelector('h3').textContent.toLowerCase();
                    card.style.display = text.includes(term) ? '' : 'none';
                });
            });
        }

        // Add event listeners
        const cards = document.querySelectorAll('.sport-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                selectedSportId = card.getAttribute('data-id');
                currentView = 'partners';
                renderPartners();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    };

    // Render Partners View
    const renderPartners = () => {
        const sport = sportsData.find(s => s.id === selectedSportId);
        const partners = partnersData[selectedSportId] || [];

        let html = `
            <div class="view container" style="padding-top: 2rem;">
                <button class="back-btn" id="back-btn">
                    <i class="fa-solid fa-arrow-left"></i> Back to Sports
                </button>
                
                <div class="section-header">
                    <div>
                        <h2>${sport.name} Partners</h2>
                        <p>Top coaching facilities affiliated with us.</p>
                    </div>
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="partner-search" placeholder="Search partners...">
                    </div>
                </div>
                
                <div class="partner-list">
        `;

        if (partners.length === 0) {
            html += `
                <div class="empty-state">
                    <i class="fa-solid fa-box-open"></i>
                    <p>No partners found for this sport in your area yet.</p>
                </div>
            `;
        } else {
            partners.forEach((partner, index) => {
                html += `
                    <div class="partner-card" style="animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards; opacity: 0;">
                        <div class="partner-header">
                            <h3 class="partner-title">${partner.name}</h3>
                            <span class="partner-badge">Verified</span>
                        </div>
                        <div class="partner-details">
                            <div class="detail-item">
                                <i class="fa-solid fa-location-dot"></i>
                                <span>${partner.distance}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <span>${partner.fees}</span>
                            </div>
                        </div>
                        <div class="action-buttons">
                            <button class="action-btn book-btn" data-index="${index}">Book Coaching</button>
                            <a href="tel:${partner.contact.replace(/[^\d+]/g, '')}" class="action-btn call-btn" title="Call Partner">
                                <i class="fa-solid fa-phone"></i>
                            </a>
                        </div>
                    </div>
                `;
            });
        }

        html += `
                </div>
            </div>
        `;
        appRoot.innerHTML = html;

        document.getElementById('back-btn').addEventListener('click', () => {
            currentView = 'categories';
            selectedSportId = null;
            renderCategories();
        });

        // Search functionality
        const partnerSearch = document.getElementById('partner-search');
        if (partnerSearch) {
            partnerSearch.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                document.querySelectorAll('.partner-card').forEach(card => {
                    const text = card.querySelector('.partner-title').textContent.toLowerCase();
                    card.style.display = text.includes(term) ? '' : 'none';
                });
            });
        }

        // Book Coaching Event Listeners
        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                const partner = partners[index];

                if (partner.website) {
                    window.open(partner.website, '_blank');
                } else {
                    document.getElementById('modal-title').textContent = partner.name;
                    document.getElementById('modal-desc').textContent = partner.description;
                    document.getElementById('modal-maps').href = partner.maps;
                    document.getElementById('modal-contact').href = 'tel:' + partner.contact.replace(/[^\d+]/g, '');
                    document.getElementById('modal-contact-text').textContent = partner.contact;
                    partnerModal.classList.remove('hidden');
                }
            });
        });
    };

    // Initial Render
    renderCategories();
});
