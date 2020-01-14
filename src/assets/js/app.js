// import RevealOnScroll from './modules/RevealOnScroll'
// import MobilMenu from './modules/mobilMenu'
// import StickyHeader from './modules/stickyHeader'
import Glide from '@glidejs/glide'

// let mobiMenu = new MobilMenu();
// let stickyHeader = new StickyHeader();

// new RevealOnScroll(document.querySelectorAll(".reveal"), 85)

var glide = new Glide('#intro', {
    type: 'carousel',
    perView: 4,
    navigation: true,
    arrows: true,
    gap: 30,
    // {String} Arrows wrapper class
    arrowsWrapperClass: 'slider__arrows',
    // {String} Main class for both arrows
    arrowMainClass: 'slider__arrows-item',
    // {String} Right arrow
    arrowRightClass: 'slider__arrows-item--right',
    // {String} Right arrow text
    arrowRightText: 'next',
    // {String} Left arrow
    arrowLeftClass: 'slider__arrows-item--left',
    // {String} Left arrow text
    arrowLeftText: 'prev',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()