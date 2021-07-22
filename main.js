var data = {
  x: 10,
  y: 0,
  driving: false
};

var car = document.querySelector('img');
window.addEventListener('keydown', driveCar);
function driveCar(event) {
  if (event.key === 'ArrowUp') {
    car.setAttribute('class', 'rotate-up');
  }
  if (event.key === 'ArrowDown') {
    car.setAttribute('class', 'rotate-down');
  }
  if (event.key === 'ArrowLeft') {
    car.setAttribute('class', 'rotate-left');
  }
  if (event.key === 'ArrowRight') {
    car.setAttribute('class', 'rotate-right');
  }
  if (event.key === ' ') {
    data.driving = true;
    setInterval(function driveCar(event) {
      car.style.left = (data.x++) + 'px';
    }, 16);
  }
}
