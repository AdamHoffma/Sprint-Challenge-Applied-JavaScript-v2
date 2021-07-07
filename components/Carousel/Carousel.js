/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

const container = document.querySelector(".carousel-container")
container.appendChild(carousel())

function carousel() {

const circle = document.createElement("div")
const lButton = document.createElement("div")
const img1 = document.createElement("img")
const img2 = document.createElement("img")
const img3 = document.createElement("img")
const img4 = document.createElement("img")
const rButton = document.createElement("div")

circle.append(lButton, img1, img2, img3, img4, rButton)

circle.classList.add("carousel")
lButton.classList.add("left-button")
rButton.classList.add("right-button")

img1.src = "./assets/carousel/mountains.jpeg"
img2.src = "./assets/carousel/computer.jpeg"
img3.src = "./assets/carousel/trees.jpeg"
img4.src = "./assets/carousel/turntable.jpeg"
classList.toggle("carousel")

lButton.clickHandler("click", event => {
  circle.classList.toggle("carousel")
})

let i = 0;


const count = (array) => {
    if (i >= array.length) i = 0;
    array[i].click();
    i ++;}

return circle
}

console.log("hi")

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
