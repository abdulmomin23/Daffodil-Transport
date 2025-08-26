// const container = document.querySelector('.container');
// const registerBtn = document.querySelector('.register-btn');
// const loginBtn = document.querySelector('.login-btn');
const loginbutton = document.querySelector('.btn');

// registerBtn.addEventListener('click', () => {
//     container.classList.add('active');
// });


// loginBtn.addEventListener('click', () => {
//     container.classList.remove('active');
// });




loginbutton.addEventListener('click', (e) => {
    e.preventDefault(); // stop form from submitting
    window.location.href = "http://127.0.0.1:5500/index2.html";
});





function showSection(sectionId) {
    document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

function bookSeat() {
    alert("Seat booked! You will receive a confirmation SMS.");
}

function preBook() {
    alert("Seat pre-booked successfully!");
}

function cancelSeat() {
    alert("Seat canceled. If someone applies for the same seat, you’ll get a notification.");
}

function knockBus() {
    alert("Knock to driver. Driver will see your location!");
}

function logout() {
    alert("Logged out successfully!");
}
