//  Transition
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove("is-active");
    }, 700);
}

function changeImage() {
    let displayImage = document.getElementById("image1");
    if (displayImage.src.match("images/Aang_air.jpg")) {
        displayImage.src = "images/monkgyatso.jpg"
    } else {
        displayImage.src = "images/Aang_air.jpg"
    }
}

function changeImageYang() {
    let displayImage = document.getElementById("image2");
    if (displayImage.src.match("images/Aang_air.jpg")) {
        displayImage.src = "images/yangchen.jpg" 
    } else {
        displayImage.src = "images/Aang_air.jpg"
    }
}

function changeImageAang() {
    let displayImage = document.getElementById("image3");
    if (displayImage.src.match("images/Aang_air.jpg")) {
        displayImage.src = "images/AangGif.gif" 
    } else {
        displayImage.src = "images/Aang_air.jpg"
    }
}