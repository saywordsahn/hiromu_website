const images_div = document.getElementById("images_div")
let counter = 0

const img_links = [
    "https://m.media-amazon.com/images/I/81Wj9h2xlkL.jpg",
    "https://www.travelcaffeine.com/wp-content/uploads/2013/10/golden-pavilion-kyoto-japan-956-800x488.jpg",
    "https://blog.sakura.co/wp-content/uploads/2023/08/kaiseki-ryori-overview.png",
    "https://www.his-usa.com/destination-japan/up_img/cke/imgs/2017822/shutterstock_akiugreatfalls (2).jpg",
    "https://m.media-amazon.com/images/I/6188fXzI+DL._AC_SX679_.jpg"
]

const images = []

// Create image and add properties
for (let i = 0; i < img_links.length; i+= 1){
    img = document.createElement("img")
    img.atr = "image_" + i
    img.src = img_links[i]
    img.classList.add("image_five")
    images.push(img)
}
const before_button = document.getElementById("before_button")
const after_button = document.getElementById("after_button")

// Functions
const renderButtons = function(){
    if(counter == 0){
        before_button.classList.add("hide")
        after_button.classList.remove("hide")
    }
    if(counter > 0){
        before_button.classList.remove("hide")
        after_button.classList.remove("hide")
    }
    if(counter == 4){
        after_button.classList.add("hide")
    }
}

const removeImageWithFadeOut = function(image){
    image.classList.add('fade-out')
    // image.classList.remove('fade-in')
    
    image.addEventListener("transitionend", function(){
        image.classList.remove('fade-out')
        image.remove()
        images_div.appendChild(images[counter])
        
    })
}

// const addImageWithFadeIn = function(image){
//     image.classList.add("opacity-zero")
//     image.classList.add('fade-in')
//     image.classList.remove('fade-out')
    
    
//     image.addEventListener("transitionend", function(){
//         image.classList.remove('fade-in')
//         images_div.appendChild(image)

//         // requestAnimationFrame(() => {
//         //     image.classList.add('visible');
//         // });
//     })

// }

before_button.addEventListener("click", function(){
    if(counter > 0){
        removeImageWithFadeOut(images[counter])
        console.log(2)
        counter--
        // addImageWithFadeIn(images[counter])
    }
    renderButtons()
})

after_button.addEventListener("click", function(){
    if(counter < 4){
        removeImageWithFadeOut(images[counter])
        counter++
        // addImageWithFadeIn(images[counter])
        
    }
    renderButtons()
})

images_div.appendChild(images[counter])
renderButtons()