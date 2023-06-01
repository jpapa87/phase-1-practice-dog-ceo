console.log('%c HI', 'color: firebrick')
// on page load, fetches the images using the url above ⬆️

// parses the response as JSON

// adds image elements to the DOM for each 🤔 image in the array

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
    .then(r => r.json())
    .then (allDogs => {
        renderAllDogs(allDogs.message)
    })

function renderAllDogs(allDogsArray){
    allDogsArray.forEach((dogPicture) => {
    const dogImage = document.createElement('img')
    dogImage.src= dogPicture
    const imageBox = document.querySelector('#dog-image-container')
        imageBox.append(dogImage)
    })
}
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
    .then(r => r.json())
    .then (allDogsBreeds => {
        for(const breed in allDogsBreeds.message){
    const dogList = document.querySelector('#dog-breeds')
    const dogBreed= document.createElement("li")
    // Once all of the breeds are rendered in the <ul>, 
    dogBreed.textContent= breed
    
    // add JavaScript so that, when the user clicks on any one of the <li>s, 

    dogBreed.addEventListener('click', (e) => {
        e.target.style= "color: purple" 
        // the font color of that <li> changes. This can be a color of your choosing.

    console.log(e.target) 
    // console to figure out how to target the item
    })
            dogList.append(dogBreed)
        // console.log(dogList)
        }
    
    })
 
