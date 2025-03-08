window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("gridToggle");
  const container = document.getElementById("link-container");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      container.classList.add("grid-cols-2");
      container.classList.remove("grid-cols-1");
    } else {
      container.classList.remove("grid-cols-2");
      container.classList.add("grid-cols-1"); // Fix here
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }

  setInterval(createSnowflake, 200);
});

