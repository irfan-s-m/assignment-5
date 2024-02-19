let seatNumber = 40;
let seatAdd = 0;
let seatPrice = 550;
let discountPrice = 0;
let totalPrice = 0;
let grandTotal = 0;
const p2 = "Economy";
const p3 = 550;

const seatbuttons = document.querySelectorAll(".seat");
for (const seat of seatbuttons) {
    seat.addEventListener('click', function () {
        seatAdd = seatAdd + 1;
        seatNumber = seatNumber - 1;
        if (seatAdd >= 5) {
            alert("You Can't buy more than 4 tickets")
            return;
        }
        seat.style.backgroundColor = "#1DD100";
        setInnerTextValue('seats-left', seatNumber);
        setInnerTextValue('seat-count-plus', seatAdd);
        seat.setAttribute('disabled', true);

        // Seat Append
        const seatTable = document.getElementById('seat-table');
        const seatNameText = seat.innerText;
        let createElement = document.createElement('p');
        createElement.innerText = seatNameText;
        let createElement2 = document.createElement('p');
        createElement2.innerText = p2;
        let createElement3 = document.createElement('p');
        createElement3.innerText = p3;
        seatTable.appendChild(createElement);
        seatTable.appendChild(createElement2);
        seatTable.appendChild(createElement3);

        // Coupon button enable
        if (seatAdd >= 4) {
            const couponBtn = document.getElementById('coupon-btn');
            couponBtn.removeAttribute('disabled', true);
        }

        // total Price
        totalPrice = totalPrice + seatPrice;
        document.getElementById('total-price-span').innerText = totalPrice;

        // coupon discount
        const couponBtn = document.getElementById('coupon-btn');
        couponBtn.addEventListener('click', function () {
            const discountContainer = document.getElementById('discount-price');
            discountContainer.classList.remove('hidden');
            const couponForm = document.getElementById('coupon-form');
            const coupon = couponForm.value;
            const hideCoupon = document.getElementById('coupon')
            hideCoupon.classList.add('hidden');
            if (coupon === 'NEW15') {
                discountPrice = totalPrice * 0.15;
                grandTotal = totalPrice - discountPrice;
                document.getElementById('discount-price-span').innerText = discountPrice;
                document.getElementById('grand-total').innerText = grandTotal;
            }
            else if (coupon === 'Couple 20') {
                discountPrice = totalPrice * 0.20;
                grandTotal = totalPrice - discountPrice;
                document.getElementById('discount-price-span').innerText = discountPrice;
                document.getElementById('grand-total').innerText = grandTotal;
            }
            else {
                grandTotal = totalPrice;
                document.getElementById('discount-price-span').innerText = discountPrice;
                document.getElementById('grand-total').innerText = grandTotal;
            }
        })
    })
}

// Modal main button enable
const numberForm = document.getElementById('number-form');
numberForm.addEventListener('keyup', function (event) {
    const numberFormValue = event.target.value;
    if (numberFormValue >= 1) {
        const modalButton = document.getElementById('modal-main-btn');
        modalButton.removeAttribute('disabled', true);
    }
    else if (numberFormValue < 1) {
        const modalButton = document.getElementById('modal-main-btn');
        modalButton.setAttribute('disabled', true);
    }
})


// Modal button reset
const reset = document.getElementById('modal-btn');
reset.addEventListener('click', function () {
    window.location.reload();
})

// innerText function
function setInnerTextValue(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
}