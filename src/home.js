import {content} from "./index";

const loadHome = () => {
  const frontPage = document.createElement('div')
  frontPage.innerHTML += "<h1>Ristorante</h1>"
  content.appendChild(frontPage)
}

export {loadHome};
