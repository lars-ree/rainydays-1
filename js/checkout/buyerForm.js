const form = document.querySelector("form");
const myname = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postNumber = document.querySelector("#postNumber");
const postError = document.querySelector("#postError");
const gift = document.querySelector("#gift:checked");
const giftAddress = document.querySelector("#giftAddress");
const giftAddressError = document.querySelector("#giftAddressError");
const giftName = document.querySelector("#giftName");
const giftNameError = document.querySelector("#giftNameError");

//------------Form - error message for name problem
function validateName() {
    event.preventDefault();
    if (checkLength(myname.value, 1) === true) {
        nameError.style.display = "none";
        return true;
    } else {
        nameError.style.display = "block";
        myname.invalid = true;
    }
};
myname.addEventListener("keyup", validateName);
//error message for email problem 
function validationEmail() {
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
        email.invalid = true;
    }
};
email.addEventListener("keyup", validationEmail);
// function to check the email pattern
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
//Validation of address
function validateAddress() {
    event.preventDefault();
    if (checkLength(address.value, 5) === true) {
        addressError.style.display = "none";
        return true;
    } else {
        addressError.style.display = "block";
        address.invalid = true;
    }
};
address.addEventListener("keyup", validateAddress);
//Validation of postNumber
function validatepostNumber() {
    event.preventDefault();
    if (checkLength(postNumber.value, 4) === true) {
        postError.style.display = "none";
        return true;
    } else {
        postError.style.display = "block";
        postNumber.invalid = true;
    }
};
postNumber.addEventListener("keyup", validatepostNumber);
//Validation of GiftAddress
function validateGiftAddress() {
    event.preventDefault();
    if (checkLength(giftAddress.value, 5) === true) {
        giftAddressError.style.display = "none";
        return true;
    } else {
        giftAddressError.style.display = "block";
        giftAddress.invalid = true;
    }
};
giftAddress.addEventListener("keyup", validateGiftAddress);
//Validation of GiftName
function validateGiftName() {
    event.preventDefault();
    if (checkLength(giftName.value, 1) === true) {
        giftNameError.style.display = "none";
        return true;
    } else {
        giftNameError.style.display = "block";
        giftName.invalid = true;
    }
};
giftName.addEventListener("keyup", validateGiftName);
