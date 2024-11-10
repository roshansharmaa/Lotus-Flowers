let open = document.querySelector("#menu-open-btn");
let close = document.querySelector("#menu-close-btn");
// let current = "close";

open.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
  // current = "open";
  // console.log(current+'nj');
});

// open.addEventListener("click", () => {
//   if (current == "open") {
//     open.addEventListener("click", () => {
//       document.body.classList.remove("show-mobile-menu");
//       current = "close";
//       console.log(current+"45");
//     });
//   } else {
//     document.body.classList.add("show-mobile-menu");
//     current = 'open';
//     console.log(current+"55");

//   }

// });

close.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});





let preloder = document.querySelector(".preloder");

window.addEventListener(
  "load",
  function () {
    setTimeout(function () {
      preloder.style.display = "none";
    }, 3000);
  });


// let navlinks = document.querySelectorAll(".nav-links");
// navlinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.body.classList.remove("show-mobile-menu");
//   });
// });


  // navbar close sidebar

  let lotus = document.querySelector('#hm')
  lotus.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });


  let product = document.querySelector('#pro')
  product.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

  let gallery = document.querySelector('#gal')
  gallery.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

  let contact = document.querySelector('#con')
  contact.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

  let about = document.querySelector('#abt')
  about.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

