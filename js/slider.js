function showImage(sliderId, index) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll("img");
  
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) {
        img.classList.add("active");
      }
    });
  }
  