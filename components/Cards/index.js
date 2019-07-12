// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
container = document.querySelector(".cards-container")

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(res => {
    console.log(res)
        res.data.articles.bootstrap.forEach(data =>{        
            container.appendChild(createComponent(data))
        res.data.articles.javascript.forEach(data => {
            container.appendChild(createComponent(data))
        res.data.articles.jquery.forEach(data => {
            container.appendChild(createComponent(data))
        res.data.articles.node.forEach(data => {
            container.appendChild(createComponent(data))
        res.data.articles.technology.forEach(data => {
            container.appendChild(createComponent(data))
                    })
                })
            })
        })
    })
})
    
       
    



.catch(error => {
    console.log("Down for Now", error)
})

function createComponent(data) {
    const card = document.createElement("div")
    const title = document.createElement("div")
    title.textContent = data.headline

    const author = document.createElement("div")   
    const imgContainer = document.createElement("div")

    const img = document.createElement("img")
    img.src = data.authorPhoto

    const by = document.createElement("span")
    by.textContent = `By: ${data.authorName}`

    card.append(title, author, imgContainer, img, by)
        author.append(imgContainer, img, by)

    card.classList.add("card")
    title.classList.add("headline")
    author.classList.add('author')
    imgContainer.classList.add("img-container")
    
    return card
}


