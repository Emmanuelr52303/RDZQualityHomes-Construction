let isAboutOpen = false;
let isServiceOpen = false;
let isRentalOpen = false;
let isModalOpen = false;
let stars = 0;
const reviewStars = document.querySelector(" .review__stars")

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        console.log('Close')
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    console.log("Open")
    document.body.classList += " modal--open"
}

function toggleAbout() {
    if(isAboutOpen) {
        isAboutOpen = false
        return document.body.classList.remove("about--open")
    }
    isAboutOpen = true;
    document.body.classList += " about--open"
}

function toggleService() {
    if(isServiceOpen) {
        isServiceOpen = false
        return document.body.classList.remove("service--open")
    }
    isServiceOpen = true;
    document.body.classList += " service--open"
}

function toggleRental() {
    if(isRentalOpen) {
        isRentalOpen = false
        return document.body.classList.remove("rental--open")
    }
    isRentalOpen = true;
    document.body.classList += " rental--open"
}

function setStars(num) {
    const reviewStars = document.querySelector(".review__stars")
    stars = num;
    console.log(stars)
    reviewStars.innerHTML = `<i class="${stars>=1?"fa-solid fa-star":"fa-regular fa-star"}" onclick="setStars(1)"></i>
        <i class="${stars>=2?"fa-solid fa-star":"fa-regular fa-star"}" onclick="setStars(2)"></i>
        <i class="${stars>=3?"fa-solid fa-star":"fa-regular fa-star"}" onclick="setStars(3)"></i>
        <i class="${stars>=4?"fa-solid fa-star":"fa-regular fa-star"}" onclick="setStars(4)"></i>
        <i class="${stars>=5?"fa-solid fa-star":"fa-regular fa-star"}" onclick="setStars(5)"></i>`;
    
}

function review(event) {
    event.preventDefault();
    alert("Review form is currently unavailable. Coming soon.");
}