let isAboutOpen = false;
let isServiceOpen = false;
let isRentalOpen = false;

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