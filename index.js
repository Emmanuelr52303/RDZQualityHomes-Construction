let isAboutOpen = false;
let isServiceOpen = false;
let isRentalOpen = false;
let isModalOpen = false;

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