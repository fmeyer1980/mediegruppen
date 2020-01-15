// import RevealOnScroll from './modules/RevealOnScroll'
// import MobilMenu from './modules/mobilMenu'
import StickyHeader from './modules/stickyHeader'
import Glide from '@glidejs/glide'

// let mobiMenu = new MobilMenu();
let stickyHeader = new StickyHeader();

// new RevealOnScroll(document.querySelectorAll(".reveal"), 85)

var blogSlider = new Glide('#blog-slider', {
    type: 'carousel',
    perView: 4,
    navigation: true,
    gap: 30,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })

  var employeSlider = new Glide('#employe-slider', {
    type: 'carousel',
    perView: 4,
    navigation: true,
    gap: 30,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
blogSlider.mount()
employeSlider.mount()