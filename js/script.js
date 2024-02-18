// console.log('Hello World');
let count = 0;
let totalPrCount = 0;

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
    const totalPrice = document.getElementById('totalPrice');
    const grandTotalPrice = document.getElementById('grandTotalPrice');
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
        totalPrCount += 550;
        count += 1;
        const availableS = parseInt(seatNum) - 1;
        availableSeat.innerText = availableS;
      } else {
        alert('Sorry, you have already booked this seat.');
      }
    } else {
      alert(
        'You cannot select more than four seats at a time. You have already selected four seats.'
      );
      removeEventListener(seat);
    }
    countSeat.innerText = count;
    totalPrice.innerText = totalPrCount;
    grandTotalPrice.innerText = totalPrCount;
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
    // console.log(arr);
    coupon();
  });
}

function coupon() {
  const seatList = document.getElementsByClassName('seatList');
  let arr = [];
  for (const set of seatList) {
    // console.log(set.innerText);
    const setVlu = set.innerText;
    arr.push(setVlu);
  }
  // console.log(arr);
  if (arr.length === 4) {
    const inp = document.getElementById('couponInp');
    inp.disabled = false;
    inp.classList.add('bg-white');
    inp.parentNode.classList.add('bg-white');

    const btn = document.getElementById('btnCoupon');
    btn.parentNode.innerHTML = `<button
    id="btnCouponAct"
    class="bg-primary text-white h-full px-4 rounded-lg text-base font-semibold border-2 border-solid border-primary hover:bg-[#fff0] hover:text-primary cursor-pointer">
    Apply
  </button>`;

    const btnAct = document.getElementById('btnCouponAct');
    btnAct.addEventListener('click', function () {
      if (typeof discount() === 'number') {
        btnAct.innerText = 'Applied';
        () => {
          btnCouponAc.parentNode.parentNode.classList.add('hidden');
        };

        btnAct.parentNode.parentNode.removeAttribute('class');
        btnAct.parentNode.parentNode.innerHTML = `<div
      class="py-4 text-base font-medium inter flex justify-between mt-2"
    >
      <p>Discount</p>
      <p>BDT <span id="disc">${discount()}</span></p>
    </div>`;
        // const disc = document.getElementById('disc');
        // const dNum = parseFloat(disc);
        // document.getElementById('grandTotalPrice').innerText =
        //   totalPrCount - dNum;
      }
      // descc();
    });
  }
}

function discount() {
  const inpValue = document.getElementById('couponInp').value;
  if (inpValue === 'NEW15') {
    const desc15 = (totalPrCount * 15) / 100;
    return desc15;
  } else if (inpValue === 'Couple 20') {
    const desc20 = (totalPrCount * 20) / 100;
    return desc20;
  } else if (inpValue === '') {
    alert('Please Input a coupon code.');
  } else {
    alert('Please Input a valid coupon code.');
  }
}

// function descc() {
//   const disc = document.getElementById('disc');
//   const dNum = parseInt(disc);
//   const totalPrice = document.getElementById('totalPrice');
//   const gNum = parseInt(totalPrice);
//   const des = totalPrCount - dNum;
//   // console.log(des);
//   return des;
// }
// // console.log(descc());
// const disc = document.getElementById('disc');
// const dNum = parseFloat(disc);
// console.log(dNum);
