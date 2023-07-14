"use sctrict";

const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// Dropdown
const itemDropdown = document.querySelector(".item-dropdown");
const itemDropdownMainBtn = document.querySelector(".item-drop-btn-main");
const itemDropdownMenu = document.querySelector(".item-drop-menu");
const itemWhiteListbtn = document.querySelectorAll(".item-whitelist");

if (itemDropdownMainBtn) {
  itemDropdownMainBtn.addEventListener("click", () => {
    itemDropdown.classList.toggle("active");
  });

  itemWhiteListbtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let mainPerson = e.target.getAttribute("data-id");
      document.getElementById("alien").setAttribute("data-id", mainPerson);
      itemDropdown.classList.remove("active");
    });
  });
}

const navDrop = document.querySelector(".nav-link-more");
const navDropList = document.querySelector(".nav-link-drop");
const navDropListItems = document.querySelectorAll(".nav-link-drop-list a");
const menuDropLink = document.querySelector(".menu-drop-link");
const menuDropLinkItems = document.querySelectorAll(".menu-drop-list a");

menuDropLink.addEventListener("click", () => {
  menuDropLink.classList.toggle("active");
});

menuDropLinkItems.forEach((el) => {
  el.addEventListener("click", () => {
    menuDropLink.classList.remove("active");
    burger.classList.remove("active");
    menu.classList.remove("active");
  });
});

navDrop.addEventListener("click", (e) => {
  e.preventDefault();
  navDropList.classList.toggle("active");
});

navDropListItems.forEach((el) => {
  el.addEventListener("click", () => {
    navDropList.classList.remove("active");
  });
});

// ITEMS

const imageTabBtns = document.querySelectorAll(".item-btn");
const itemsTabContents = document.querySelectorAll(".items-content");

imageTabBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let tab = e.target.getAttribute("data-tab");

    imageTabBtns.forEach((el) => {
      el.classList.remove("selected");
    });
    el.classList.add("selected");

    itemsTabContents.forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelector(`.items-content-${tab}`).classList.add("active");
  });
});

// Language

const langItem = document.querySelector(".header-lang-btn");
const langItemBtn = document.querySelector(".header-lang-btn button");
const langDropBtn = document.querySelectorAll(".header-lang-drop button");
const menuLangItem = document.querySelector(".menu-lang-btn");
const menuLangItemBtn = document.querySelector(".menu-lang-btn button");
const menuLangDropBtn = document.querySelectorAll(".menu-lang-drop button");

if (langItem) {
  langItemBtn.addEventListener("click", () => {
    langItem.classList.toggle("active");
  });

  langDropBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let lang = e.target.getAttribute("data-lang");
      langItemBtn.setAttribute("value", lang);
      langItemBtn.querySelector("p").textContent = lang;
      langItem.classList.remove("active");
    });
  });
}

if (menuLangItem) {
  menuLangItemBtn.addEventListener("click", () => {
    menuLangItem.classList.toggle("active");
  });

  menuLangDropBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let lang = e.target.getAttribute("data-lang");
      menuLangItemBtn.setAttribute("value", lang);
      menuLangItemBtn.querySelector("p").textContent = lang;
      menuLangItem.classList.remove("active");
    });
  });
}

// Amount Dropdown

const amountDrop = document.querySelector(".amount-drop");
const amountDropBtn = document.querySelector(".amount-drop-main");
const amountDropItems = document.querySelectorAll(".amount-drop-items button");

if (amountDrop) {
  amountDropBtn.addEventListener("click", () => {
    amountDrop.classList.toggle("active");
  });

  amountDropItems.forEach((el) => {
    el.addEventListener("click", (e) => {
      let num = Number(e.target.textContent);
      amountDropBtn.setAttribute("value", num);
      amountDrop.classList.remove("active");
      amountDropBtn.querySelector("input").value = num;

      if (amountDropBtn.value >= 1) {
        document.querySelector(".mint-free-btn").style.display = "block";
        document.querySelector(".mint-free-btn span").textContent = num;
      }
    });
  });
}

// Wallet tabs

const walletTabBtns = document.querySelectorAll(".wallet-tab-btn");
const walletTabContent = document.querySelectorAll(".wallet-tab-content");

if (walletTabBtns) {
  walletTabBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let tab = e.target.getAttribute("data-tab");

      walletTabBtns.forEach((el) => {
        el.classList.remove("active");
      });
      el.classList.add("active");

      walletTabContent.forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(`.wallet-tab-content-${tab}`).style.display =
        "grid";
    });
  });
}

// Select bg
const itemsBg = document.querySelectorAll(".item-select-bg");
const itemsBg1 = document.querySelectorAll(".item-select-1");
const itemsBg2 = document.querySelectorAll(".item-select-2");

const defaultBg = "./img/green-bg.png";
const defaultItem = "./img/placeholder.png";

itemsBg.forEach((el) => {
  el.addEventListener("click", (e) => {
    let bg = e.target.getAttribute("data-bg");
    let bgId = e.target.getAttribute("data-id");
    let nftBg = document
      .getElementById("bacground")
      .setAttribute("data-id", bgId);
    document.getElementById("choose-item-1").classList.add("active");
    document.getElementById("choose-item-1-bg").setAttribute("src", bg);
    document.getElementById("bacground").setAttribute("src", bg);
  });
});

if (document.querySelector(".choose-bg-remove")) {
  document.querySelector(".choose-bg-remove").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("choose-item-1").classList.remove("active");
    document.getElementById("bacground").setAttribute("src", defaultBg);
  });
}

// Select item1

itemsBg1.forEach((el) => {
  el.addEventListener("click", (e) => {
    let item = e.target.getAttribute("data-item");
    let item1 = e.target.getAttribute("data-id");
    document.getElementById("item1").setAttribute("data-id", item1);
    document.getElementById("choose-item-2").classList.add("active");
    document.getElementById("item1").setAttribute("src", item);
  });
});
if (document.querySelector(".choose-item1-remove")) {
  document
    .querySelector(".choose-item1-remove")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("choose-item-2").classList.remove("active");
      document.getElementById("item1").setAttribute("src", defaultItem);
    });
}

// Select item2
itemsBg2.forEach((el) => {
  el.addEventListener("click", (e) => {
    let item = e.target.getAttribute("data-item");
    let item2 = e.target.getAttribute("data-id");
    document.getElementById("item2").setAttribute("data-id", item2);
    document.getElementById("choose-item-3").classList.add("active");
    document.getElementById("item2").setAttribute("src", item);
  });
});

if (document.querySelector(".choose-item2-remove")) {
  document
    .querySelector(".choose-item2-remove")
    .addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("choose-item-3").classList.remove("active");
      document.getElementById("item2").setAttribute("src", defaultItem);
    });
}

// Modal
const approve = document.querySelector(".approve");
const overlay = document.querySelector(".overlay");
const overlayClose = document.querySelector(".modal-close");

// Data

const attr = {
  main_nft_id: "new",
  attributes: {
    first_item: "a",
    second_item: "b",
    third_item: "c",
  },
};

let nftMainId = document.getElementById("alien");
let nftBg = document.getElementById("bacground");
let nftItem1 = document.getElementById("item1");
let nftItem2 = document.getElementById("item2");

if (approve) {
  approve.addEventListener("click", () => {
    overlay.classList.add("is-open");
  });

  overlayClose.addEventListener("click", () => {
    overlay.classList.remove("is-open");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("is-open");
    }
  });

  setTimeout(() => {
    approve.classList.remove("disabled");
  }, 2000);

  approve.addEventListener("click", () => {
    let nftMainImgId = nftMainId.getAttribute("data-id");
    let nftBgId = nftBg.getAttribute("data-id");
    let nftItemFirst = nftItem1.getAttribute("data-id");
    let nftItemSecond = nftItem2.getAttribute("data-id");
    attr.main_nft_id = nftMainImgId;
    attr.attributes.first_item = nftBgId;
    attr.attributes.second_item = nftItemFirst;
    attr.attributes.third_item = nftItemSecond;
    console.log(attr);
  });
}
