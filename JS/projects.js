const imageContainerOverlay = document.querySelectorAll('.image-container-overlay');
const portfoiloItem = document.querySelectorAll('.portfolio-item')
const about = document.getElementById("about")


// highlighting projects on main page
for(let i = 0; i < portfoiloItem.length; i++) {
  portfoiloItem[i].addEventListener("mouseover", (event) => {
      imageContainerOverlay[i].classList.add("hidden");
  portfoiloItem[i].addEventListener("mouseout", () => {
      imageContainerOverlay[i].classList.remove("hidden");
    })
  });
  portfoiloItem[i].addEventListener("click", ()=>{
    console.log("clicked");
  })
}

