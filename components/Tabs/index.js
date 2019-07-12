// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.

const main = document.querySelector(".topics")
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log(data)
    const array = data.data.topics
    array.forEach(items => {
         const topic = document.createElement("div")
         topic.textContent = items
         topic.classList.add("tab")
         main.appendChild(topic)
    })
    console.log(main)
})

.catch(error => {
    console.log("Down for Now", error)
})
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

