import {content, body} from "./index";

const loadContact = () => {
  const contactPage = document.createElement('div');
  contactPage.style.cssText = "display:flex; flex-direction: column; align-items: center; min-height: calc(100vh - 98px);  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;"
  contactPage.innerHTML = "<h1>Contact</h1>" + "<h3>Phone:</h3>" + "<p>(555)555-5555</p>" + "<h3>Email:</h3>" + "<p>pizza@ristorante.com</p>"
  content.appendChild(contactPage)
}

export {loadContact};
