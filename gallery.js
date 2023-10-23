const filters = document.querySelectorAll("#filters li span");
const gallery = document.querySelector("#gallery-items");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector(".gallery-modal-body");
const modalImage = document.querySelector("#modal-image");
const images = document.querySelectorAll("#gallery-items img");
let activeImages = Array.from(
  document.querySelectorAll("#gallery-items .gallery-item-active")
);

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    filters.forEach((filter) => {
      filter.classList.remove("active");
    });

    this.classList.add("active");

    activeImages.forEach((image) => {
      image.addEventListener("animationend", function () {
        this.classList.remove("gallery-animation");
      });
    });

    let tag = this.id;

    activeImages = [];

    images.forEach((image) => {
      image.classList.replace("gallery-item-active", "gallery-item-inactive");

      if (tag in image.dataset || tag === "all") {
        image.classList.replace("gallery-item-inactive", "gallery-item-active");
        activeImages.push(image);
      }
    });

    activeImages.forEach((image) => {
      image.classList.add("gallery-animation");
    });
  });
});

images.forEach((image) => {
  image.addEventListener("click", function () {
    modalImage.src = this.src;
    modalImage.alt = this.alt;
    modal.classList.add("show");
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.marginRight = scrollbarWidth + "px";
    document.body.classList.add("hide-overflow");
  });
});

modal.addEventListener("click", function () {
  modal.classList.remove("show");
  document.body.classList.remove("hide-overflow");
  document.body.style.marginRight = "0";
});

modal.children[0].addEventListener("click", function (e) {
  e.stopPropagation();
});

document.querySelector("#modal-prev").addEventListener("click", function () {
  const position = activeImages.findIndex((img) => img.src === modalImage.src);

  const prevPosition = position ? position - 1 : activeImages.length - 1;

  modalImage.src = activeImages[prevPosition].src;
  modalImage.alt = activeImages[prevPosition].alt;
});

document.querySelector("#modal-next").addEventListener("click", function () {
  const position = activeImages.findIndex((img) => img.src === modalImage.src);
  console.log(position);

  const nextPosition = position == activeImages.length - 1 ? 0 : position + 1;

  modalImage.src = activeImages[nextPosition].src;
  modalImage.alt = activeImages[nextPosition].alt;
});
