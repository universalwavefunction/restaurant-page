import {content, body} from "./index";

const loadMenu = () => {
  const menuPage = document.createElement('div');
  menuPage.style.cssText = "display:flex; flex-direction: column; align-items: center; min-height: calc(100vh - 98px); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; list-style: none;"
  menuPage.innerHTML = "<h1>Menu</h1>" + "<h2>Entrees</h2>" +
   "<li>Pizza</li><li>Pasta</li><li>Rigattoni</li><li>Salad</li>" + "<h2>Appetizers</h2>" +
    "<li>Caponata</li><li>Spiedini</li><li>Crostini</li><li>Bruschetta</li>"+ "<h2>Drinks</h2>" +
     "<li>Sparkling Water</li><li>Wine</li><li>Negroni</li><li>Campari</li>";
  content.appendChild(menuPage)
}

export {loadMenu};
