const bodyHomePage = document.querySelector(".home-page")


const mobileMenue = document.querySelector(".mobile-menu")
const mainMenu = document.querySelector(".main-menu")
const childPage = document.querySelector(".child-page")
const appWrapper = document.querySelector(".app-wrapper")

let width = screen.width
console.log(width);
if (width < 600) {
  mobileMenue.addEventListener("click", () => {
    mainMenu.classList.remove("hidden")
    mobileMenue.classList.add("hidden")
  })
  appWrapper.addEventListener("click", () => {
    console.log("clicked");
    mainMenu.classList.add("hidden")
    mobileMenue.classList.remove("hidden")    
  })
  mainMenu.classList.add("hidden")
  mobileMenue.classList.remove("hidden")    
} else {
  mainMenu.classList.remove("hidden")
  mobileMenue.classList.add("hidden")
}