const navigation = document.querySelector('#primaryMenu');
const alertHeight = document.querySelector('#alert')  ? document.querySelector('#alert').offsetHeight : 0;
const scrollUp   = "-translate-y-0";
const scrollUpBg = "bg-nav-scrolled";
const scrollUpBgDark = "dark:bg-nav-scrolled";
const scrollDown = "-translate-y-32";
let lastScroll = (0 + alertHeight);

console.log(lastScroll)

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= (alertHeight + 130)) {
    navigation.classList.remove(scrollUp, scrollUpBg, scrollUpBgDark);
    return;
  }

  if (currentScroll > lastScroll && !navigation.classList.contains(scrollDown)) {
    // down
    navigation.classList.remove(scrollUp, scrollUpBg, scrollUpBgDark);
    navigation.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    navigation.classList.contains(scrollDown)
  ) {
    // up
    navigation.classList.remove(scrollDown);
    navigation.classList.add(scrollUp, scrollUpBg, scrollUpBgDark);
  }
  lastScroll = currentScroll;
});