var scrollToTopButton = document.getElementById('scrollToTopButton');
var scrollToTopbtnContent = document.querySelector('#scrolRotat');
var rightContent = document.querySelector('.right-content');

rightContent.addEventListener('scroll',function(){
    var scrolme = rightContent.scrollTop;
    if(rightContent.scrollTop>0){
        scrollToTopbtnContent.style.rotate = "0deg";
        scrollToTopButton.style.opacity = "1";
        scrollToTopButton.style.visibility = "visible";
        scrollToTopbtnContent.style.behavior = "smooth";  
    }else{
        scrollToTopbtnContent.style.rotate = "180deg";
        scrollToTopbtnContent.style.behavior = "smooth";
        scrollToTopButton.style.opacity = "0";
        scrollToTopButton.style.visibility = "hiden";
    }
})

scrollToTopButton .addEventListener('click',function(){
    rightContent.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: smooth scroll animation
        
    });
})
