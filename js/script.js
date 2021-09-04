let pickupBtn = document.querySelectorAll('.pick-up-method-radio')[0];
let deliveryBtn = document.querySelectorAll('.pick-up-method-radio')[1];

document.querySelector('.delivery').addEventListener('click', () => {
    if (pickupBtn.checked) {
        document.querySelector('.delivery-row').classList.add('disable');
        document.querySelectorAll('.delivery-col')[1].classList.remove('disable');
        document.querySelector('.delivery__pickup').classList.remove('disable');
    } else {
        document.querySelector('.delivery-row').classList.remove('disable');
        document.querySelectorAll('.delivery-col')[1].classList.add('disable');
        document.querySelector('.delivery__pickup').classList.add('disable');
    }
});