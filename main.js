var data = {
  x: 10,
  y: 0
};

var car = document.querySelector('img');
window.addEventListener('keydown', steerCar);
function steerCar(event) {
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
    setInterval(function driveCar(event) {
      car.style.left = (data.x++) + 'px';
    //  console.log(data.x);
    }, 16);
  }
}
