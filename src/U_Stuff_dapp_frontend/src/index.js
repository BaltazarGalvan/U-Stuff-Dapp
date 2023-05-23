import { U_Stuff_dapp_backend } from "../../declarations/U_Stuff_dapp_backend";

const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");
const offCanvasCollapse = document.querySelector(".offcanvas-collapse");
import imgArray from "./imgArray.js";

console.log("imgArray");

let carouselInnerHTML = "";
let carouselIndicatorsHTML = "";

document.querySelector("#navbarSideCollapse").addEventListener("click", () => {
  offCanvasCollapse.classList.toggle("open");
});

document.querySelector(".navbar-nav").addEventListener("click", () => {
  if (offCanvasCollapse.classList.contains("open"))
    offCanvasCollapse.classList.toggle("open");
});

imgArray.forEach((carouselImg, index) => {
  carouselIndicatorsHTML =
    carouselIndicatorsHTML +
    `<button
          style="background-color:white"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide-to="${index}"
          aria-label="Slide ${index + 1}"
          class="${carouselImg.buttonClass}"
          ${carouselImg.buttonAriaCurrent}
        ></button>  `;

  carouselInnerHTML =
    carouselInnerHTML +
    `<div class="${carouselImg.class}">
          <img src="${carouselImg.source}" alt="${carouselImg.altText}"/>
          <div class="carousel-caption text-start">
            <h4>${carouselImg.name}</h4>
            <p>${carouselImg.description}</p>
          </div>
        </div>`;
});

carouselIndicators.innerHTML = carouselIndicatorsHTML;
carouselInner.innerHTML = carouselInnerHTML;

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await U_Stuff_dapp_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });
