let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   
};

document.querySelector('#nav-close').onclick = () =>{
   navbar.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
   
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
};


window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');

  if(window.scrollY > 0){ 
     document.querySelector('.header').classList.add('active');
  }else{
   document.querySelector('.header').classList.remove('active');
  }
};


var swiper = new Swiper(".product-slider", {
   loop:true, 
   grabCursor:true,
   spaceBetween: 20,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
       0: {
         slidesPerView: 1,
       },
       640: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
   },
});

var swiper = new Swiper(".clients-slider",{
   loop:true,
   grabCursor:true,
   spaceBetween:20,
   breakpoints:{
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
},
});


/*


*/



