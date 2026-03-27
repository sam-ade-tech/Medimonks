const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('nav-menu');
const navLink = document.getElementById('nav-link');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navLink.classList.toggle ('active');
})



function switchTab(type) {
    const individualBtn = document.getElementById('btn-individual');
    const familyBtn = document.getElementById('btn-family');

    individualBtn.classList.remove('active');
    familyBtn.classList.remove('active');

    if(type === 'individual') {
        individualBtn.classList.add('active');
    } else {
        familyBtn.classList.add('active');
    }
     
    document.getElementById('email').value = '';
    document.getElementById('pin').value = '';

    clearError('email');
    clearError('pin');


    const legend = document.querySelector('#input-field legend');

    legend.textContent = type === 'individual'
     ? 'Email/phone number' 
     : 'Family email';
}

function clearError(field) {
    document.getElementById(field).classList.remove ('error');
    document.getElementById(field + '-error').classList.remove ('show');
}

function handleLogin() {
    let valid = true
    const email = document.getElementById('email');
    const pin = document.getElementById('pin');

    if(!email.value.trim()) {
        email.classList.add('error')
        document.getElementById('email-error').classList.add('show');
        valid = false
    }
    if(!pin.value.trim()){
        pin.classList.add('error')
        document.getElementById('pin-error').classList.add('show')
        valid = false;
    }
    if(valid) {
       alert('logging in as : ' + (document.getElementById('btn-individual').classList.contains('active') ? 'individual' : 'Family'));
    }
}