let groomArray = [
  {
    name: "Hrdit Sing",
    tag: "Friend",
    category: "groom",
    img: "./img/groomsmen/1.jpg",
  },
  {
    name: "Sono Sing",
    tag: "Friend",
    category: "groom",
    img: "./img/groomsmen/2.jpg",
  },
  {
    name: "Jony Sing",
    tag: "Friend",
    category: "groom",
    img: "./img/groomsmen/3.jpg",
  },
  {
    name: "Jony Sins",
    tag: "Friend",
    category: "groom",
    img: "./img/groomsmen/4.jpg",
  },
];

let brideArray = [
  {
    name: "Sharraddha Clerk",
    tag: "Friend",
    category: "bride",
    img: "./img/bridesmaid/1.jpg",
  },
  {
    name: "Angelina Joline",
    tag: "Friend",
    category: "bride",
    img: "./img/bridesmaid/2.jpg",
  },
  {
    name: "Niki Manaj ",
    tag: "Friend",
    category: "bride",
    img: "./img/bridesmaid/3.jpg",
  },
  {
    name: "Natiale Jones",
    tag: "Friend",
    category: "bride",
    img: "./img/bridesmaid/4.jpg",
  },
];

let filterBtn = document.querySelectorAll(".filter-btn");
let itemContainer = document.querySelector(".item-container");

window.addEventListener(" DOMContentLoaded", () => {
  groomDisplay(groomArray);
});

//this is a comment
// this is
filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let dataSet = e.currentTarget.dataset.filter;
    brideArray.filter((Bride) => {
      if (Bride.category === dataSet) {
        brideDisplay(brideArray);
      }
    });
    groomArray.filter((Groom) => {
      if (Groom.category === dataSet) {
        groomDisplay(groomArray);
      }
    });
  });
});

function brideDisplay(bride) {
  let BrideItem = bride.map((item) => {
    return `<div class="people-item">
      <div class="people-item-inner">
          <img src=${item.img} alt="People">
          <h4>${item.name}</h4>
          <span>${item.tag}</span>
          <div class="social-links-people">
            <ul><li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
      </div>
    </div>`;
  });
  BrideItem = BrideItem.join("");
  itemContainer.innerHTML = BrideItem;
}

function groomDisplay(groom) {
  let GroomItem = groom.map((item) => {
    return `<div class="people-item">
      <div class="people-item-inner">
          <img src=${item.img} alt="People">
          <h4>${item.name}</h4>
          <span>${item.tag}</span>
          <div class="social-links-people">
              <ul><li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
              </ul>
          </div>
      </div>
    </div>`;
  });
  GroomItem = GroomItem.join("");
  itemContainer.innerHTML = GroomItem;
}
