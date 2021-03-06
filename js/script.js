let pickupBtn = document.querySelectorAll('.pick-up-method-radio')[0];
let deliveryBtn = document.querySelectorAll('.pick-up-method-radio')[1];

let individualBtn = document.querySelector('.individual');
let entityBtn = document.querySelector('.entity');
let individualBody = document.querySelectorAll('.yorcontact-body')[0];
let entityBody = document.querySelectorAll('.yorcontact-body')[1];

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


individualBtn.addEventListener('click', () => {
    individualBtn.classList.add('active');
    individualBody.classList.remove('hide');
    entityBtn.classList.remove('active');
    entityBody.classList.add('hide');
});
entityBtn.addEventListener('click', () => {
    individualBtn.classList.remove('active');
    individualBody.classList.add('hide');
    entityBtn.classList.add('active');
    entityBody.classList.remove('hide');
});