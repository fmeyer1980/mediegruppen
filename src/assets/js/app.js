import RevealOnScroll from './modules/RevealOnScroll'
import MobilMenu from './modules/mobilMenu'
import StickyHeader from './modules/stickyHeader'

let mobiMenu = new MobilMenu();
let stickyHeader = new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".reveal"), 85)