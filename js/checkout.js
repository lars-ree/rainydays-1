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
const bycard = document.querySelector(".by_card");
const wrap_payment = document.querySelector(".wrap_payment-by-card");
const byvipps = document.querySelector(".by_vipps");
const buyer_phone = document.querySelector(".buyer_phone");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");
const credit_card = document.querySelector("#credit_card");
const card_expire_month = document.querySelector("#card_expire_month");
const card_expire_year = document.querySelector("#card_expire_year");
const expiryDateCardError = document.querySelector("#expiryDateCardError");
const visa = document.querySelector("#visa");
const master = document.querySelector("#master");
const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");
const phone = document.querySelector("#phone");
/*const done = document.querySelector("button");*/
const myProduct = document.querySelector("#myProduct");
const myTotal = document.querySelector(".myTotal");
const edit = document.querySelector("#edit");
//--------------------------Product buy
const cartItems = JSON.parse(localStorage.getItem("cartList"));
console.log(cartItems);
let total = 0;
cartItems.forEach(function (cartElement) {
    total += cartElement.productPrice;
    myProduct.innerHTML +=
        `<div class="cart-productChosen">
    <figure class = "checkout-modal_photo"><img src= "${cartElement.productPhoto}" alt="${cartElement.productPhotoAlt}"></figure>
    <h5 class="cart-item">${cartElement.productType}</h5>
    <h5 class="cart-item">Price: ${cartElement.productPrice},-</h5>
    <h5 class="cart-item">Size: ${cartElement.sizeChoice}</h5>
    <h5 class="cart-item">Color: ${cartElement.color}</h5></div>`;
});
myTotal.innerHTML = `Total: ${total}`;
//--------------Edit
edit.onclick = function () {
    window.history.back();
}
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
//---------------PAYMENT----------------------------------------------------------
//show payment by card option
wrap_payment.style.display = "none";
let clickCountCard = 0;
function showByCard() {
    clickCountCard++;
    wrap_payment.style.display = "block";
    if (clickCountCard % 2 === 0) {
        wrap_payment.style.display = "none";
    }
}
bycard.addEventListener("click", showByCard);
//Validation Credit card number
function validateCreditCard() {
    event.preventDefault();
    if (checkLength(credit_card.value, 16) === true) {
        credit_cardError.style.display = "none";
        return true;
    } else {
        credit_cardError.style.display = "block";
        credit_card.invalid = true;
    }
};
credit_card.addEventListener("keyup", validateCreditCard);
//allow only 16 numbers
credit_card.oninput = function () {
    if (credit_card.value.length !== 16) {
        credit_card.value = credit_card.value.slice(0, 16);
    }
}
//Validation CVV
function validationCvv() {
    if (checkLength(cvv.value, 3) === true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display = "block";
        cvv.invalid = true;
    }
};
cvv.addEventListener("keyup", validationCvv);
// function to allow only 3 numbers on input
cvv.oninput = function () {
    if (cvv.value.length !== 3) {
        cvv.value = cvv.value.slice(0, 3);
    }
}
//Validation Expiry date card
/*function validateExpiryDateCard() {
    event.preventDefault();
    if ((card_expire_month.value !== "MM") && (card_expire_year.value !== "YYYY")) {
        expiryDateCardError.style.display = "none";
        return true;
    } else {
        expiryDateCardError.style.display = "block";
        expiryDateCard.invalid = true;
    }
};
done.addEventListener("click", validateExpiryDateCard);*/
//Validation name in the card
function validateCardName() {
    event.preventDefault();
    if (checkLength(cardName.value, 1) === true) {
        cardNameError.style.display = "none";
    } else {
        cardNameError.style.display = "block";
        cardName.invalid = true;
    }
};
cardName.addEventListener("keyup", validateCardName);
//------------------------------------------------------------show payment by Vipps option
buyer_phone.style.display = "none";
let clickCountVipps = 0;
function showByVipps() {
    clickCountVipps++;
    buyer_phone.style.display = "block";
    if (clickCountVipps % 2 === 0) {
        buyer_phone.style.display = "none";
    }
}
byvipps.addEventListener("click", showByVipps);
//Phone validation 
function validationPhone() {
    event.preventDefault();
    if (validatePhone(phone) === true) {
        phoneError.style.display = "none";
        return true;
    } else {
        phoneError.style.display = "block";
        phone.invalid = true;
    }
};
//Allow only 10 digits
phone.oninput = function () {
    if (phone.value.length !== 10) {
        phone.value = phone.value.slice(0, 10);
    }
}
//Check pattern of phone 
function validatePhone(phone) {
    const regEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    const patternMatchesPhone = regEx.test(phone);
    return patternMatchesPhone;
}
phone.addEventListener("keyup", validationPhone);
// function to check if the length of the input value is valid
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}
// function to run when the form is submitted
/*function submitForm(event) {
    event.preventDefault();
    form.reset();
}
form.addEventListener("submit", submitForm);*/
