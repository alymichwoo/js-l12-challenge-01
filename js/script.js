const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Fetch Picsum API

const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};

//Randomly Select the Index of an Image

const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};

//Display the Image

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

//Add Click Event

button.addEventListener("click", function () {
    getImage();
});

