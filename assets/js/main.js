/* --------------------------------------------------
   main.js
   - 漢堡選單 / 側邊欄開關
   - 捲動方向偵測，控制 header 隱藏/顯示
-------------------------------------------------- */

// 1) 漢堡選單、側邊選單、遮罩
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

hamburgerBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  overlay.classList.toggle('show');
});
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
});

// 2) 往下捲動隱藏header, 往上捲動顯示header
let lastScrollTop = 0;
const mainHeader = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // 往下捲 -> 隱藏header
    mainHeader.classList.add('hide-header');
  } else {
    // 往上捲 -> 顯示header
    mainHeader.classList.remove('hide-header');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});