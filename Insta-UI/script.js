const posts = document.querySelectorAll(".post");

// disable dragging for all images
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable","false");
});

posts.forEach(post => {

  const heart = post.querySelector(".heart");
  const likeText = post.parentElement.querySelector(".likes");
  const likeIcon = post.parentElement.querySelector(".like-btn");

  post.addEventListener("dblclick", () => {

    heart.classList.remove("opacity-0");
    heart.classList.add("opacity-100","scale-110");

    setTimeout(() => {
      heart.classList.remove("opacity-100","scale-110");
      heart.classList.add("opacity-0");
    },600);


    // get current likes
    let num = parseInt(likeText.innerText);

    // increase likes
    num++;

    // update UI
    likeText.innerText = num;


    // icon flash
    likeIcon.style.fill = "red";

    setTimeout(()=>{
      likeIcon.style.fill = "none";
    },400);

  });

});
