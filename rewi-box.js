var tesmonialForm = document.querySelector("#tesmonial-form");
var creatRrewiuBox = document.querySelector("#creat-rewiu-box");
var submitRew = document.querySelector('#submit-rew');
var inp1Rew = document.querySelector('#tesmonial-form #inp1-rew');
var inp2Rew = document.querySelector('#tesmonial-form #inp2-rew');
var textAria = document.querySelector('#tesmonial-form textarea');




creatRrewiuBox.addEventListener("click",function(event){
    event.stopPropagation();
    tesmonialForm.classList.toggle('tesmonial-form-pop')
})
tesmonialForm.addEventListener('click',function(e){
    e.stopPropagation();
})
document.addEventListener('click',function(){
    tesmonialForm.classList.remove('tesmonial-form-pop')
})

submitRew.addEventListener('click',function(){
    console.log("NAME = " + inp1Rew.value);
    console.log("Work type = " + inp2Rew.value);
    console.log("Massage " + textAria.value);
}) 
function generateWhatsAppLink(message) {
    // Replace '1234567890' with your WhatsApp number 
    var phoneNumber = '918949055213';
    var encodedMessage = encodeURIComponent(message);
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
    return whatsappLink;
}

submitRew.addEventListener('click', function() {
    var message = "Name: " + inp1Rew.value  + "\nWork: " + inp2Rew.value+ "\nMassage: " + textAria.value;
    var whatsappLink = generateWhatsAppLink(message);
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
    
    // Clear input fields after generating link
    inp1Rew.value = "";
    inp2Rew.value = "";
    textAria.value = "";
});

