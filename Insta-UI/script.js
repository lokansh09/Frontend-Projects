const posts = document.querySelectorAll(".post");

posts.forEach(post => {

  const heart = post.querySelector(".heart");

  post.addEventListener("dblclick", () => {

    heart.classList.remove("opacity-0");
    heart.classList.add("opacity-100", "scale-110");

    setTimeout(() => {
      heart.classList.remove("opacity-100", "scale-110");
      heart.classList.add("opacity-0");
    }, 700);

  });

});