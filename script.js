const vectors = document.querySelector('.vector');
const navLink = document.querySelector('.nav-links');

vectors.addEventListener('click', () => {
  vectors.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('ul.nav-links li').forEach((n) => n.addEventListener('click', () => {
  vectors.classList.remove('active');
  navLink.classList.remove('active');
}));

const guests = [
  {
    id: '1',
    speakerName: 'Joe Tabet',
    title: 'Founding/Managing Director | JT+Partners',
    experience: 'Exceptional multi-award-winning architect with +20years extensive experience in worldwide architecture, master-planning/urban design, construction industry.',
    faceshot: './Images/Joe-Tabet.jpg',
  },
  {
    id: '2',
    speakerName: 'Kourosh Salehi',
    title: 'Design Director - MENA| LWK + PARTNERS',
    experience: 'British architect, Urbanist and educator with over 30 years international experience in the UK, Asia and the Middle East. He has led the design process for a number of urban skylines in cities like London, Hong Kong, Shanghai and Makkah and Doha',
    faceshot: './Images/kourosh.jpg',
  },
  {
    id: '3',
    speakerName: 'Prof. Dr. Anna Cornaro',
    title: 'Chair Department of Architecture Associate Professor | American University in Dubai',
    experience: 'She combines academic research and professional practice as associate principal in the international awarded architecture office COdESIGN. Many of her projects have been awarded and exhibited all over the world.',
    faceshot: './Images/annarita-cornaro.jpg',
  },
  {
    id: '4',
    speakerName: 'Amer Mneimneh',
    title: 'Vice President, Urbanism + Planning, Middle East & Africa | AECOM Middle East',
    experience: 'Strategic planner and urban designer with a background in architecture. He has more than 20 years experience gained in the Middle East and his portfolio boasts a range of award-winning, high-profile developments.',
    faceshot: './Images/Amer.png',
  },
  {
    id: '5',
    speakerName: 'Naser Raed Fakhouri',
    title: 'Architect | Bainona Engineering Consultancy',
    experience: 'With a Bachelor of Architecture degree from the American University of Sharjah. Fakhouri work attempts to bridge the gap between architecture, locality, context, and vernacularity.',
    faceshot: './Images/Naser.png',
  },
  {
    id: '6',
    speakerName: 'Ralf Steinhauer',
    title: 'Director | RSP',
    experience: 'Over 17 years of professional experience in Asia, Australia, Middle East and Europe. His predilection with architecture is one that exerts a comprehensive knowledge base spanning from conceptual design through to project delivery.',
    faceshot: './Images/Ralf.png',
  },
];

const openMore = document.querySelector('.more');
const closeLess = document.querySelector('.less');

const loadGuests = () => {
  const guestSpeakers = document.querySelector('.guest-speakers');
  guestSpeakers.innerHTML = '';
  guests.forEach((guest) => {
    const li = document.createElement('li');
    if (guest.id === '1' || guest.id === '2') {
      li.className = 'guest';
    } else {
      li.className = 'guest';
      li.classList.toggle('active');
    }

    li.innerHTML = `
    <div class="faceshot">
      <img
        src="${guest.faceshot}"
        alt="headshot of ${guest.speakerName}"
      />
    </div>
    <div class="resume">
      <h4 class="name">${guest.speakerName}</h4>
      <h5 class="title">${guest.title}</h5>
      <span class="line-secondary"></span>
      <p class="experience">${guest.experience}</p>
    </div>
    `;

    guestSpeakers.appendChild(li);
  });
};

window.onload = () => {
  loadGuests();
};

openMore.addEventListener('click', () => {
  const li = document.getElementsByClassName('guest');
  for (let i = 0; i < li.length; i += 1) {
    li[i].setAttribute('class', 'guest');
  }
  openMore.classList.add('active');
  closeLess.classList.add('active');
});

closeLess.addEventListener('click', () => {
  const li = document.getElementsByClassName('guest');
  for (let i = 2; i < li.length; i += 1) {
    li[i].setAttribute('class', 'guest active');
  }

  closeLess.classList.remove('active');
  openMore.classList.remove('active');
});
