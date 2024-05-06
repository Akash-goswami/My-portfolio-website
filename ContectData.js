var nameInp = document.querySelector('#nameInp');
var emailInp = document.querySelector('#emailInp');
var textareaInp = document.querySelector('#textareaInp');
var submitData = document.querySelector("#submit-btn");

// submitData.addEventListener("click", function(e) {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Retrieve values from form input elements
//     var nameValue = nameInp.value.trim();
//     var emailValue = emailInp.value.trim();
//     var messageValue = textareaInp.value.trim();

//     // Validate email format using a regular expression
//     var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailFormat.test(emailValue)) {
//         alert('Please enter a valid email address.');
//         return; // Exit the function if email is invalid
//     }

//     // Create a new data object for the current form submission
//     var newData = {
//         name: nameValue,
//         email: emailValue,
//         message: messageValue
//     };

//     // Retrieve existing data from localStorage (if any)
//     var existingData = localStorage.getItem('formData');
//     var formDataArray = [];

//     if (existingData) {
//         try {
//             // Parse existingData into an array
//             formDataArray = JSON.parse(existingData);

//             // Ensure formDataArray is an array
//             if (!Array.isArray(formDataArray)) {
//                 throw new Error('Retrieved data is not an array');
//             }
//         } catch (error) {
//             console.error('Error parsing existing data:', error.message);
//             // Reset formDataArray to an empty array
//             formDataArray = [];
//         }
//     }

//     // Append the new data to the existing data array
//     formDataArray.push(newData);

//     // Save the updated data array back to localStorage
//     localStorage.setItem('formData', JSON.stringify(formDataArray));

//     // Provide feedback to the user
//     console.log('New form data appended and saved to localStorage:', newData);
//     alert('Thanku for Conect me ❤️');

//     // Reset form fields
//     nameInp.value = '';
//     emailInp.value = '';
//     textareaInp.value = '';
// });
// var savedFormData = localStorage.getItem('formData');
// var allFormData = savedFormData ? JSON.parse(savedFormData) : [];

// if (!Array.isArray(allFormData)) {
//     // Handle the case where allFormData is not an array (e.g., initialize as an empty array)
//     allFormData = [];
// }
// // // Clear all data stored in localStorage
// // localStorage.clear();

// // // Optionally, provide feedback to the user
// // console.log('All data cleared from localStorage.');

// // // You can also alert the user or perform other actions to confirm data deletion
// // alert('All saved data has been cleared.');

// // // If needed, reset any UI elements or state that may be affected by clearing the data
// // // For example:
// // nameInp.value = '';
// // emailInp.value = '';
// // textareaInp.value = '';

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