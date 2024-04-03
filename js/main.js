// const swiper = new Swiper('.swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
//   effect: "cards",
//   perSlideOffset: 0,
//   perSlideRotate: 0,
//   rotate: false,
//   slideShadows: false,
//   loop: true,
// });



const btn = document.querySelectorAll('.features__subject')
const text = document.querySelectorAll('.features__text')
const s = document.querySelectorAll('.s')


btn.forEach(item => item.addEventListener('click', event => {
  const eventTab = event.target.getAttribute('data-tab');

  btn.forEach(element => element.classList.remove('active', 'features__subject--elipse'));
  text.forEach(element => element.classList.add('hidden'));
  item.classList.add('active', 'features__subject--elipse');
  document.getElementById(eventTab).classList.remove('hidden')
}));