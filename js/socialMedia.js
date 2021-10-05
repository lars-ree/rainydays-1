const facebook = document.querySelector(".fa-facebook-f");
const instagram = document.querySelector(".fa-instagram");

facebook.addEventListener("click", function facebook() {
    window.open("https://www.facebook.com", "facebook",
        "width=600,height=400");
})
instagram.addEventListener("click", function instagram() {
    window.open("https://www.instagram.com/prikuhnderlam/", "instagram", "width=600,height=400");
})