const NAV_LIST = document.querySelector("#nav-list")
const hamburger = document.querySelector("#hamburger")
const cancel = document.querySelector("#cancel")
const NAV_ITEM = document.querySelector(".nav__link")
const overlay = document.querySelector(".overlay")

NAV_LIST.style.right = "-250px"
function showMenu() {
  if ((NAV_LIST.style.right = "-250px")) {
    NAV_LIST.style.right = "0px"
  } else {
    NAV_LIST.style.right = "-250px"
  }
}

function hideMenu() {
  if ((NAV_LIST.style.right = "0px")) {
    NAV_LIST.style.right = "-250px"
  }
}

hamburger.addEventListener("click", showMenu)
cancel.addEventListener("click", hideMenu)

// NAV_ITEM.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log("clicked")
//   })
// })
