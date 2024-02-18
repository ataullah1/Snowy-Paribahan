// console.log('Hello World');
let seatArr = [];
let count = 0;

const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
  //   console.log(seat);

  seat.addEventListener('click', function (e) {
    e.target.style.backgroundColor = '#1DD100';
    e.target.style.color = '#fff';
    // console.log(e.target);
    const seat = e.target.innerText;
    const setList = document.getElementById('seatReasive');
    const countSeat = document.getElementById('countSeat');
    const availableSeat = document.getElementById('seatsNum');
    const seatNum = availableSeat.innerText;
    const btnNext = document.getElementById('btnNext');

    seatArr.push(seat);
    if (seatArr.includes(seat)) {
      console.log(seatArr);
    }

    const setListCreate = document.createElement('div');
    setListCreate.innerHTML = ` <div
    class="flex justify-between text-base font-normal text-[#03071299]"
  >
    <p>${seat}</p>
    <p>Economoy</p>
    <p>550</p>
  </div>`;
    setList.appendChild(setListCreate);
    count = count + 1;
    countSeat.innerText = count;
    const availableS = parseInt(seatNum) - 1;
    availableSeat.innerText = availableS;
    btnNext.innerHTML = `<input
    id="btnNextMain"
    type="button"
    value="Next"
    class="bg-primary text-white border-2 border-solid border-primary hover:bg-[#fff0] hover:text-primary py-2 sm:py-3 w-full rounded-2xl text-xl font-extrabold cursor-pointer"
  />`;
  });
}
