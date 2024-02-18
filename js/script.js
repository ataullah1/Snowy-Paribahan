console.log('Hello World');

const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
  //   console.log(seat);
  seat.addEventListener('click', function () {
    console.log('Good Jobs');
  });
}
