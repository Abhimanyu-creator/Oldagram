const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const userId = document.getElementById("user-id")
const postsId = document.getElementById("posts-id")
const interactionId = document.getElementById("interaction-id")


for (let i = 0; i < posts.length; i++) {
    userId.innerHTML += `
    <div class="user-info">
        <img class="user-pp" src="${posts[i].avatar}">
            <div>
                <h2 class="user-name font-bold">${posts[i].name}</h2>
                <h3 class="user-location font-normal">${posts[i].location}</h3>
            </div>  
    </div>
    <div>
        <img class="post-containt" src="${posts[i].post}">  
    </div>
    <div class="button-section">
        <img class="btn" src="images/icon-heart.png">
        <img class="btn" src="images/icon-comment.png">
        <img class="btn" src="images/icon-dm.png">
    </div>
    <div>
       <h4 class="likes-el font-bold">${posts[i].likes}likes</h4>
       <h4 class="comments-el font-normal">
         <span class="font-bold">${posts[i].username}</span>
         : ${posts[i].comment} 
       </h4>
    </div
`
}
