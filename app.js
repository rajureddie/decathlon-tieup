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
    },
    {
        id: 'football',
        name: 'Football',
        icon: 'fa-solid fa-futbol',
        bg: './assets/images/football.jpg'
    },
    {
        id: 'pickleball',
        name: 'Pickleball',
        icon: 'fa-solid fa-table-tennis-paddle-ball',
        bg: './assets/images/pickleball.jpg'
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
    }
];

const partnersData = {

    'skating': [
        { name: 'Stratos Tightend Arena', distance: '2.0 km', fees: 'Contact Facility', contact: 'Walk-in', maps: 'https://maps.google.com/?q=Stratos+Tightend+Arena+Kukatpally', description: 'Skating academy located in Kukatpally (PIN: 500072).' },
        { name: 'Sk8skool Sports Academy', distance: '5.5 km', fees: 'Contact Facility', contact: '+91 99729 98476', maps: 'https://maps.google.com/?q=Sk8skool+Sports+Academy+Bowrampet', description: 'S.No.803-805, Near Indian Oil Petrol Bunk, Oakridge School Road (PIN: 500090).' }
    ],
    'cricket': [
        { name: 'SV Cricket Academy', distance: '4.5 km', fees: 'Contact Facility', contact: 'Verify Location', maps: 'https://maps.google.com/?q=SV+Cricket+Academy+Nizampet', description: 'Cricket academy located in Nizampet/Hafeezpet area (PIN: 500090).' },
        { name: 'RC Cricket Academy', distance: '6.0 km', fees: 'Contact Facility', contact: 'Walk-in', maps: 'https://maps.google.com/?q=RC+Cricket+Academy+Miyapur', description: 'Opposite Ratnadeep Supermarket, Westend Colony, Bandlaguda/Miyapur (PIN: 500049).' },
        { name: 'KPRR Bigbox Cricket', distance: '4.5 km', fees: 'Contact Facility', contact: 'Book via App/Walk-in', maps: 'https://maps.google.com/?q=KPR+Box+Cricket+Nizampet', description: 'Swapna Sai Nivas, Balaji Hills Colony, Venkatraya Nagar, Nizampet (PIN: 500090).' },
        { name: 'Stratos Tightend Arena', distance: '2.0 km', fees: 'Contact Facility', contact: 'Walk-in', maps: 'https://maps.google.com/?q=Stratos+Tightend+Arena+Kukatpally', description: 'Multi-sport and box cricket arena located in Kukatpally (PIN: 500072).' },
        { name: 'Playing 11 (SAG Sports)', distance: '1.5 km', fees: 'Contact Facility', website: 'https://sagsplaying11.com', contact: '+91 93914 25692', maps: 'https://maps.google.com/?q=Playing+11+Box+Cricket+Kukatpally', description: 'Beside Vajras Adobe, Sangeet Nagar, Shivayagari Nagar, Kukatpally (PIN: 500072).' }
    ],
    'gym-fitness': [
        { name: 'NavYoga Academy', distance: '2.0 km', fees: 'Contact Facility', website: 'https://navyoga.in', contact: '+91 85005 99642', maps: 'https://maps.google.com/?q=NavYoga+Academy+Kukatpally', description: 'Plot 3/A, Rd No 1, KPHB Phase 5, Kukatpally (500072).' },
        { name: 'Jayravi Yogashala', distance: '1.5 km', fees: 'Contact Facility', contact: 'Check JustDial', maps: 'https://maps.google.com/?q=Jayravi+Yogashala+Kukatpally', description: 'Beside Dhanalaxmi Centre, Rd No 2, Kukatpally.' },
        { name: 'TATVA YOGA Studio', distance: '4.5 km', fees: 'Contact Facility', website: 'https://tatvayoga.in', contact: '+91 89775 43454', maps: 'https://maps.google.com/?q=TATVA+YOGA+Studio+Pragathi+Nagar', description: '401 Harmony Tower, Pragathi Nagar (500090).' },
        { name: 'Nirvaana Yoga Academy', distance: '3.0 km', fees: 'Contact Facility', contact: '+91 94946 51333', maps: 'https://maps.google.com/?q=Nirvaana+Yoga+Academy+Kukatpally', description: 'Plot No 71, Samhitha Enclave, KPHB Phase 9 (500085).' },
        { name: 'Body Beast Gym', distance: '2.5 km', fees: 'Contact Facility', contact: '+91 99660 00616', maps: 'https://maps.google.com/?q=Body+Beast+Gym+Kukatpally', description: 'Vijaya Residency Rd, Bagh Ameer, Kukatpally (500072).' },
        { name: 'Phoenix Fitness', distance: '12.0 km', fees: 'Contact Facility', website: 'https://phoenixfitnesshyderabad.com', contact: '+91 70933 43485', maps: 'https://maps.google.com/?q=Phoenix+Fitness+Petbasheerabad', description: '3rd Floor, Above Max Showroom, Petbasheerabad (500055).' },
        { name: 'Saaram Studio', distance: '5.0 km', fees: 'Contact Facility', contact: 'Check JustDial', maps: 'https://maps.google.com/?q=Saaram+Studio+Moosapet', description: 'Plot No 13, Mystic Hills, Moosapet (500018).' },
        { name: 'Biradhar Gym', distance: 'N/A', fees: 'Contact Facility', contact: 'Unverified Location', maps: 'https://maps.google.com/?q=Biradhar+Gym', description: 'Primarily found in Navi Mumbai. Contact facility directly.' },
        { name: 'Ultra Muscle', distance: '4.5 km', fees: 'Contact Facility', contact: '+91 80088 73285', maps: 'https://maps.google.com/?q=Ultra+Muscle+Pragathi+Nagar', description: 'Banjara Towers, Kakatiya Hills, Pragathi Nagar (500090).' },
        { name: 'Health Zone Fitness', distance: '1.5 km', fees: 'Contact Facility', contact: '+91 96662 21444', maps: 'https://maps.google.com/?q=Health+Zone+Fitness+Kukatpally', description: 'Andhra Bank Building, Balaji Nagar, Kukatpally (500072).' },
        { name: 'Fitness Plus', distance: '2.0 km', fees: 'Contact Facility', contact: '+91 90000 76440', maps: 'https://maps.google.com/?q=Fitness+Plus+Kukatpally', description: 'BJP Office Rd, Shanthi Nagar, Kukatpally (500072).' },
        { name: 'Aura X Gym', distance: '0.5 km', fees: 'Contact Facility', contact: 'Verify at center', maps: 'https://maps.google.com/?q=Aura+X+Gym+Kukatpally', description: 'Behind Lakshore Mall / Ashoka One Mall, Kukatpally.' }
    ],

    'basketball': [
        { name: 'Don Bosco Basketball Academy', distance: '6.5 km', fees: 'Contact Facility', contact: '+91 81433 96779', maps: 'https://maps.google.com/?q=Don+Bosco+Basketball+Academy+Erragadda', description: 'Don Bosco High School, BSP Colony, Erragadda (PIN: 500018).' }
    ],
    'badminton': [
        { name: 'KPR Badminton Stadium', distance: '4.5 km', fees: 'Contact Facility', contact: 'Book via Playo', maps: 'https://maps.google.com/?q=KPR+Badminton+Stadium+Nizampet', description: 'Badminton stadium offering coaching and hourly booking located in Nizampet (PIN: 500090).' }
    ],
    'swimming': [
        { name: 'Zion Sports Swimming Academy', distance: '10.0 km', fees: 'Contact Facility', contact: '+91 91212 91312', maps: 'https://maps.google.com/?q=Zion+Sportz+Swimming+Academy+Mallampet+Bachupally', description: 'Located in Mallampet, Bachupally (PIN: 500090).' },
        { name: 'KPR Swimming Pool', distance: '7.0 km', fees: 'Contact Facility', contact: 'Walk-in', maps: 'https://maps.google.com/?q=KPR+Swimming+Pool+Miyapur', description: 'Located opposite Old Age Home, Miyapur (PIN: 500049).' },
        { name: 'Rahul Swim Academy', distance: '2.0 km', fees: 'Contact Facility', contact: '+91 93928 85513', maps: 'https://maps.google.com/?q=Rahul+Swim+Academy+Kukatpally', description: 'CJR Sports Centre, Opp. Bhasyam Brooks School, Kukatpally (PIN: 500072).' },
        { name: 'Seasons Indoor Swimming Pool', distance: '6.5 km', fees: 'Contact Facility', contact: '+91 91216 63784', website: 'https://seasonswim.com', maps: 'https://maps.google.com/?q=Seasons+Indoor+Swimming+Pool+Erragadda', description: 'Located beside Nissan Showroom, Sanath Nagar (PIN: 500018).' },
        { name: 'Wild Waters', distance: '35.0 km', fees: 'Ticket based', website: 'https://wildwaters.in', contact: '+91 91779 97381', maps: 'https://maps.google.com/?q=Wild+Waters+Masaniguda+Shankarpally', description: 'Water park at Masaniguda Village, Shankarpally (PIN: 501203).' }
    ],
    'football': [
        { name: 'Zion Sportz', distance: '10.0 km', fees: 'Contact Facility', website: 'https://zionsportz.com', contact: '+91 97045 26071', maps: 'https://maps.google.com/?q=Zion+Sportz+Mallampet+Bachupally', description: 'Football turf and professional sports training academy in Mallampet, Bachupally (PIN: 500090).' }
    ],
    'pickleball': [
        { name: '4S Pickleball', distance: '6.0 km', fees: 'Contact Facility', website: 'https://4spickleball.com', contact: '+91 74168 96868', maps: 'https://maps.google.com/?q=4S+Pickleball+Mayuri+Nagar+Miyapur', description: 'Dedicated pickleball facility at MIG-1075, Rd Number 42B, Mayuri Nagar, Miyapur (PIN: 500049).' }
    ],
    'mountain-trekking': [

    ],
    'running': [

    ],
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
                    <img src="./assets/images/decathlon-logo.png" alt="Decathlon Logo" style="height: 25px; margin-bottom: 15px; opacity: 0.9; filter: brightness(0) invert(1);">
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
                    <h2>Find Your Perfect Decathlon Facilities</h2>
                    <p>Elevate your game with top-rated facilities and expert coaches near you.</p>
                </div>
                <div class="container">
                    <div class="section-header">
                        <div>
                            <h2>Explore Sports</h2>
                            <p>Select a sport to find the best facilities.</p>
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
                        <h2>${sport.name} Facilities</h2>
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
                    <i class="fa-solid fa-person-running"></i>
                    <h3>Coming Soon!</h3>
                    <p>We are currently expanding our coaching network for this sport.<br />Check back later to find your perfect Decathlon partner.</p>
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
