document.addEventListener("DOMContentLoaded", function () {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomPosition() {
    var posX = getRandomNumber(0, window.innerWidth - 1);
    var posY = getRandomNumber(250, 300);
    return { x: posX, y: posY };
  }

  function getRandomOpacity() {
    var opacity = getRandomNumber(1, 5) / 10
    return opacity
  }

  function getRandomSize() {
    var size = getRandomNumber(5, 10);
    return size;
  }

  function getRandomAngle() {
    var angle = getRandomNumber(0, 360);
    return angle;
  }

  function createRandomstar() {
    var star = document.createElement("p");
    star.classList.add("star");
    star.style.borderRadius = "50%";
    star.style.width = getRandomSize() + "px";
    star.style.height = star.style.width;
    star.style.backgroundColor = "rgba(255, 255, 255, 0)";

    var initialDirection = getRandomNumber(0, 1) === 0 ? -1 : 1;

    var startPosition = getRandomPosition();
    star.style.position = "absolute";
    star.style.left = startPosition.x + "px";
    star.style.top = startPosition.y + "px";
    star.style.transform = "rotate(" + getRandomAngle() + "deg)";

    document.body.appendChild(star);

    var intervalId = setInterval(function () {
      star.style.top = parseFloat(star.style.top) - 1.005 + "px";

      star.style.left = parseFloat(star.style.left) + initialDirection * 0.1 + "px";

      var currentOpacity = parseFloat(star.style.backgroundColor.split(",")[3]);
      if (currentOpacity < 0.3) {
        star.style.backgroundColor = "rgba(255, 255, 255, " + (currentOpacity + 0.00399) + ")";
      }

      if (parseFloat(star.style.top) < -parseFloat(star.style.height)) {
        clearInterval(intervalId);
        star.remove();
      }
    }, 20);
  }

  var createStarInterval = setInterval(function () {
    createRandomstar();
  }, 250);
});
