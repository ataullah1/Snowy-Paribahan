console.log('Hello World');

const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
  //   console.log(seat);
  let seatArr = [];

  seat.addEventListener('click', function (e) {
    // console.log(e.target);
    const seat = e.target.innerText;
    seatArr.push(seat);
    const setList = document.getElementById('seatReasive');
    const setListCreate = document.createElement('div');
    setListCreate.innerHTML = ` <div
    class="flex justify-between text-base font-normal text-[#03071299]"
  >
    <p>${seat}</p>
    <p>Economoy</p>
    <p>550</p>
  </div>`;
    if (seatArr.includes(seat)) {
      console.log(seatArr);
    }
    setList.appendChild(setListCreate);

    e.target.style.backgroundColor = '#1DD100';
    e.target.style.color = '#fff';
  });
}
