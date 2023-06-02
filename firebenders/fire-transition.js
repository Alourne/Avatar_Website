//  Transition
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    setTimeout(() => {
        transition_el.classList.remove("is-active");
    }, 1300);
}


function changeImageZuko() {
    let displayImage = document.getElementById("image1");
    if (displayImage.src.match("/images/Zuko.jpg")) {
        displayImage.src = "/images/ZukoSolo.jpg"
    } else if(displayImage.src.match("/images/ZukoSolo.jpg")) {
        displayImage.src = "/images/Zuko&Mai.jpg"
    } else if(displayImage.src.match("/images/Zuko&Mai.jpg")) {
        displayImage.src = "/images/Zuko2.jpg"
    } else if(displayImage.src.match("/images/Zuko2.jpg")) {
        displayImage.src = "/images/zukofixed.png"
    } else {
        displayImage.src = "/images/Zuko.jpg"
    }
}

function changeImageIroh() {
    let displayImage = document.getElementById("image2");
    if (displayImage.src.match("/images/Iroh.jpg")) {
        displayImage.src = "/images/iroh2.jpg"
    } else if (displayImage.src.match("/images/iroh2.jpg")) {
        displayImage.src = "/images/zuko&iroh.jpg"
    } else {
        displayImage.src = "/images/Iroh.jpg"
    }
}

function changeImageAzula() {
    let displayImage = document.getElementById("image3");
    if (displayImage.src.match("/images/azulafix.png")) {
        displayImage.src = "/images/azula3.png" 
    } else if (displayImage.src.match("/images/azula3.png")) {
        displayImage.src = "/images/Azula5.jpg"
    } else if (displayImage.src.match("/images/Azula5.jpg")) {
        displayImage.src = "/images/azula4.jpg"
    } else {
        displayImage.src = "/images/azulafix.png"
    }
}

function changeImageOzai() {
    let displayImage = document.getElementById("image4");
    if (displayImage.src.match("/images/Ozai.jpg")) {
        displayImage.src = "/images/ozai2.jpg"
    } else if(displayImage.src.match("/images/ozai2.jpg")) {
        displayImage.src = "/images/firelord.gif"  
    } else {
        displayImage.src = "/images/Ozai.jpg"
    }
}