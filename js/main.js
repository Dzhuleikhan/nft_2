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
const itemWhiteListLink = document.querySelectorAll(".item-whitelist a");

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
      // amountDropBtn.querySelector("input").value = num;

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
