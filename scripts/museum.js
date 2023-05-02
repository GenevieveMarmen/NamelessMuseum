//javaScript code for form validation ticketing page

function calculatePrice() {
    //declare ticket type
    let ticket = document.getElementById('ticketType');
    let tIndex = ticket.selectedIndex;
    //return the ticket value of the selected index
    let ticketPrice = ticket.options[tIndex].value;

    //declare quantity of ticket selected
    let quantity = document.getElementById('ticketQuantity');
    let qIndex = quantity.selectedIndex;
    let quantitySelected = quantity.options[qIndex].value;

    //display the subtotal of ticket choice and price
    document.getElementById('ticketPrice').value =
        (ticketPrice * quantitySelected).toFixed(2);

    calculateTotal();
}

function calculateTotal() {
    let ticketValue = window.parseFloat(document.getElementById('ticketPrice').value);
    document.getElementById('txtSubtotal').value = ticketValue.toFixed(2);
    const TAX_RATE = 0.15;
    let taxValue = ticketValue * TAX_RATE;
    document.getElementById('txtTax').value = taxValue.toFixed(2);
    document.getElementById('txtTotal').value = (ticketValue + taxValue).toFixed(2);
}

function validateForm() {
    let selectedTicket = document.getElementById('ticketType');
    let selectedQuantity = document.getElementById('ticketQuantity');
    const enteredFName = document.getElementById('first_name');
    const enteredLName = document.getElementById('last_name');
    var email = document.getElementById('email');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var selectedCard = document.getElementById('radio');
    const enteredCName = document.getElementById('cname');
    const enteredCNumber = document.getElementById('cnumber');

    if (enteredFName.value === '') {
        window.alert('You must enter your first name');
        enteredFName.focus();
        return false;
    } else if (enteredLName.value === '') {
        window.alert('You must enter your last name');
        enteredLName.focus();
        return false;
    } else if (!email.value.match(pattern)) {
        window.alert('You have entered an invalid email');
        email.focus();
        return false;
    } else if (selectedTicket.selectedIndex === 0) {
        window.alert('A ticket type must be selected');
        selectedTicket.focus();
        return false;
    } else if (selectedQuantity.selectedIndex === 0) {
        window.alert('A ticket quantity must be selected');
        selectedQuantity.focus();
        return false;
    } else if (enteredCName.value === '') {
        window.alert('Please enter the name associated with the card used for payment');
        enteredCName.focus();
        return false;
    } else if (enteredCNumber.value.length != 16) {
        window.alert('Please enter a valid credit card number that includes 16 digits and expiration date');
        enteredCNumber.focus();
        return false;
    } else if (!checkCC()) {
        window.alert('Please choose a card to make the payment');
        selectedCard.focus();
        return false;
    } else {

        return true;
    }
}

function ticketPurchased() {
    window.alert('Thank you for your purchase. Your tickets have been sent to your email. We look forward to your visit.');
}


function checkCC() {
    if (document.getElementById('visa').checked) {
        return true;
    }
    if (document.getElementById('master_card').checked) {
        return true;
    }
    if (document.getElementById('american_express').checked) {
        return true;
    }
    return false;
}

