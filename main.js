var car = document.querySelector('img');
window.addEventListener('keydown', steerCar);
window.addEventListener('keydown', driveCar);
function steerCar() {
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
}
function driveCar() {
  // if (event.key === ' ') {

  // }
}
