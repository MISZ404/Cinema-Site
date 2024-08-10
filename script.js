const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('selected-seats');
const total = document.getElementById('total');

let ticketPrice = 20;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateSelectedCount();
        }
    });
});

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
