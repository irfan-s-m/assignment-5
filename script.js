let seatNumber = 40;
let seatAdd = 0;
let seatPrice = 550;
let discountPrice = 0;
let totalPrice = 0;
const p1 = "Economy";
const p2 = "550";

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
        createAppend('seat-table', 'p');
    })

}



// innerText function
function setInnerTextValue(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
}

// create & append element function
function createAppend(id1, id2) {
    const element = document.getElementById(id1);
    const createElement = document.createElement(id2);
    const createElement2 = document.createElement('p')
    const createElement3 = document.createElement('p')
    createElement2.innerText = p1;
    createElement3.innerText = p2;
    element.appendChild(createElement);
    element.appendChild(createElement2);
    element.appendChild(createElement3);
}
