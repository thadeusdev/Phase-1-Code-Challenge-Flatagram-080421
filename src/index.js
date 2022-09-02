const imageUrl = "http://localhost:3000/images";
const commentUrl = "http://localhost:3000/comments"

//Dom render functions
function renderImage(dog){
    document.querySelector("#card-title").innerText = dog.title
    document.querySelector("#card-image").src =dog.image

    //Add like functionality
    const heart = document.querySelector("#like-button").addEventListener("click", (e) => {
        e.preventDefault()
        const dogLikes = document.querySelector("#like-count");
        dog.likes += 1;
        dogLikes.innerText = `${dog.likes} likes`
    })
}

//Fetch requests
function getImage(){
    fetch(`${imageUrl}`)
    .then(res => res.json())
    .then(dogImg => dogImg.forEach(dog => renderImage(dog)))
}
getImage()

function getComment(){
    fetch(`${commentUrl}`)
    .then(res => res.json())
    .then(comments => {
        // add comments
        document.getElementById("comments-list").innerHTML = comments
        .map((comment) => `<li> ${comment.content}</li>`)
        .join("");
    })
}
getComment()