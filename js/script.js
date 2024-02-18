// console.log('Hello World');
let seatArr = [];
let unicArr = [];
let count = 0;

const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
  //   console.log(seat);

  seat.addEventListener('click', function (e) {
    e.target.style.backgroundColor = '#1DD100';
    e.target.style.color = '#fff';
    // console.log(e.target);
    const seat = e.target.innerText;
    const seatLists = document.getElementById('seatReasive');
    const countSeat = document.getElementById('countSeat');
    const availableSeat = document.getElementById('seatsNum');
    const seatNum = availableSeat.innerText;
    const btnNext = document.getElementById('btnNext');

    const setListCreate = document.createElement('div');
    setListCreate.innerHTML = ` <div
    class="flex justify-between text-base font-normal text-[#03071299]"
  >
    <p class="seatList">${seat}</p>
    <p>Economoy</p>
    <p>550</p>
  </div>`;
    seatLists.appendChild(setListCreate);
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
    const seatList = document.getElementsByClassName('seatList');
    let at = [];
    for (const a of seatList) {
      const arr = a.innerText;
      at.push(arr);
      // console.log(arr);
    }
    console.log(at, seat);
    const b = at.includes(seat);
    console.log(b);
    // if (!at.includes(seat)) {
    //   console.log('dubble');
    // } else {
    //   console.log('single');
    // }
  });
}
