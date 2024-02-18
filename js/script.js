// console.log('Hello World');
let count = 0;

const seats = document.getElementsByClassName('seat');
for (const seat of seats) {
  let arr = [];
  //   console.log(seat);
  seat.addEventListener('click', function (e) {
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

    const arrInc = arr.includes(seat);
    console.log(arrInc);
    if (count < 4) {
      e.target.style.backgroundColor = '#1DD100';
      e.target.style.color = '#fff';
      if (!arrInc) {
        seatLists.appendChild(setListCreate);
        count = count + 1;
        const availableS = parseInt(seatNum) - 1;
        availableSeat.innerText = availableS;
      } else {
        console.log('hello');
      }
    } else {
      removeEventListener(seat);
    }
    countSeat.innerText = count;
    btnNext.innerHTML = `<input
    id="btnNextMain"
    type="button"
    value="Next"
    class="bg-primary text-white border-2 border-solid border-primary hover:bg-[#fff0] hover:text-primary py-2 sm:py-3 w-full rounded-2xl text-xl font-extrabold cursor-pointer"
  />`;
    const seatList = document.getElementsByClassName('seatList');
    for (const set of seatList) {
      // console.log(set.innerText);
      arr.push(set.innerText);
    }
    // console.log(a[0].length);
    // console.log(arr);
  });
}
