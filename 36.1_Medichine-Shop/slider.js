// if(window.innerWidth>768){
//   var swiper = new Swiper(".productSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30
//   });
// }else{
//   var swiper = new Swiper(".productSwiper", {
//     slidesPerView: 1
//   });
// }


// if(window.innerWidth>768){
//   var swiper = new Swiper(".productSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30
//   });
// }else{
//   var swiper = new Swiper(".productSwiper", {
//     slidesPerView: 1
//   });
// }


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10, 
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 891px
    891: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})



var other_medicine_info = new Swiper(".OtherMedicineInfoSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 891px
    891: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    // when window width is >= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
