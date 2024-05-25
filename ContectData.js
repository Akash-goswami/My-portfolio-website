var nameInp = document.querySelector('#nameInp');
var emailInp = document.querySelector('#emailInp');
var textareaInp = document.querySelector('#textareaInp');
var submitData = document.querySelector("#submit-btn");

submitData.addEventListener('click',function(){
    console.log("NAME = " + nameInp.value);
    console.log("Work type = " + emailInp.value);
    console.log("Massage " + textareaInp.value);
}) 
function generateWhatsAppLink(message) {
    // Replace '1234567890' with your WhatsApp number 
    var phoneNumber = '918949055213';
    var encodedMessage = encodeURIComponent(message);
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
    return whatsappLink;
}

submitData.addEventListener('click', function() {
    var message = "Name: " + nameInp.value  + "\nemail: " + emailInp.value+ "\nMassage: " + textareaInp.value;
    var whatsappLink = generateWhatsAppLink(message);
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
    
    // Clear input fields after generating link
    nameInp.value = "";
    emailInp.value = "";
    textareaInp.value = "";
});