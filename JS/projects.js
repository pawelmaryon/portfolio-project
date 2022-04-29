const imageContainerOverlay = document.querySelectorAll('.image-container-overlay');
const portfoiloItem = document.querySelectorAll('.portfolio-item')
const about = document.getElementById("about")

//loading pages to modal - work in progress**************************************************
// const loadHTML = ( id, filename )  => {
//   console.log(`div id:${id}, filename: ${filename}`);
//   let xhttp;
//   let element = document.getElementById(id);
//   let file = filename;
  
//   if (file) {
//     xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4) {
//         if (this.status == 200) {element.innerHTML = this.responseText;}
//         if (this.status == 404) {element.innerHTML = "<h2>Page not Found</h2>";}
//       }
//     }
//     xhttp.open("GET", `Projects/${file}`, true);
//     xhttp.send();
//   }
// }

// highlighting projects on main page
for(let i = 0; i < portfoiloItem.length; i++) {
  portfoiloItem[i].addEventListener("mouseover", (event) => {
      imageContainerOverlay[i].classList.add("hidden");
  portfoiloItem[i].addEventListener("mouseout", () => {
      imageContainerOverlay[i].classList.remove("hidden");
    })
  });
}

