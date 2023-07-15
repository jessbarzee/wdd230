let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};


if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    })
  })
  imagesToLoad.forEach((img) => {
    observer.observe(img)
  })
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img)
  })
}


// LOCAL STORAGE

const MILLIS_PER_DAY = 24 * 60 * 60 * 1000

let today = new Date()
let lastVisit = localStorage.getItem("visit");
let visitSpan = document.querySelector(".visit");

if (lastVisit != null) {
  let lastVisitDate = new Date(lastVisit)
  let daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY)
  visitSpan.textContent = daysSinceLastVisit
} else {
  visitSpan.textContent = 0
}

localStorage.setItem("visit", today)

