
const popupBtn = document.getElementById('popup-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
// const main = document.querySelector(".main");


popupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    // main.style.display = "none"; 

});
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'block';
});


overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});



const popupMenu = document.getElementById('popup-menu');
popupMenu.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    
});

var disableBodyScroll = function(){
    window.body_scroll_pos = $(window).scrollTop(); 
    $('body').css('overflow-y','hidden');
}

var enableBodyScroll = function(){
    $('body').css('overflow-y','scroll');
    $(window).scrollTop(window.body_scroll_pos); 
}