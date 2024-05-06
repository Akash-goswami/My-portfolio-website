var contectPop = document.querySelector('.contect-pop');
var inp1Cont = document.querySelector('#inp1-cont');
var inp2Cont = document.querySelector('#inp2-cont');
var textAriaCont = document.querySelector('.contect-pop textarea');
var submitContect = document.querySelector('#submit-contect');
var contectShow = document.querySelector('#contect-show');

contectShow.addEventListener("click",function(event){
    event.stopPropagation();
    contectPop.classList.toggle('contect-pop-show');    
})
contectPop.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the document
});
document.body.addEventListener("click", function() {
    if (contectPop.classList.contains('contect-pop-show')) {
        contectPop.classList.remove('contect-pop-show');
    }
});

contectShow.addEventListener("click",function(event){
    event.stopPropagation();
    contectPop.classList.toggle('contect-pop-smal-show');    
})
contectPop.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up to the document
});
document.body.addEventListener("click", function() {
    if (contectPop.classList.contains('contect-pop-smal-show')) {
        contectPop.classList.remove('contect-pop-smal-show');
    }
});
function generateWhatsAppLink(message) {
    // Replace '1234567890' with your WhatsApp number 
    var phoneNumber = '918949055213';
    var encodedMessage = encodeURIComponent(message);
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
    return whatsappLink;
}

submitContect.addEventListener('click', function() {
    var name = inp1Cont.value.trim();
    var email = inp2Cont.value.trim();
    var message = textAriaCont.value.trim();
    
    // Check if required fields are not empty
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return; // Exit the function if any required field is empty
    }
    
    // Prepare the message with form field values
    var messageContent = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    
    // Generate WhatsApp link with the message
    var whatsappLink = generateWhatsAppLink(messageContent);
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
    
    // Clear input fields after generating link
    inp1Cont.value = "";
    inp2Cont.value = "";
    textAriaCont.value = "";
});
