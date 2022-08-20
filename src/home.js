import {content, body} from "./index";

const loadHome = () => {
  const frontPage = document.createElement('div');
  frontPage.innerHTML = "<h1>Il miglior cibo italiano nel mondo</h1>";
  frontPage.style.cssText += "background-color: white; width: 100%;   font-family: Helvetica Neue, Helvetica, Arial, sans-serif; text-align: center;"
  body.style.cssText += "background-image: url('italian-food.jpg'); background-size: cover";
  content.appendChild(frontPage)
}

export {loadHome};
