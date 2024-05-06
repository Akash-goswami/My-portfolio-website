var menuBars = document.querySelector("#menu-bars");
var leftContent = document.querySelector(".left-content");


menuBars.addEventListener('click',function(e){
    e.stopPropagation();
    leftContent.classList.toggle('show')
})
leftContent.addEventListener('click',function(e){
    e.stopPropagation();
})
document.addEventListener('click',function(e){
    leftContent.classList.remove('show')    
})
