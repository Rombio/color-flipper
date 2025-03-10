const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const randomHexColorCode = () => {
  return "#" + n.slice(0, 6);
};

btn.addEventListener("click", function () {
  let randomNumber = `#${(Math.random() * 0xfffff * 1000000)
    .toString(16)
    .slice(0, 6)}`;

  document.body.style.background = randomNumber;
  color.textContent = randomNumber;
});
