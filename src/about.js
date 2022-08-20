import {content, body} from "./index";

const loadAbout = () => {
  const aboutPage = document.createElement('div');
  aboutPage.style.cssText = "display:flex; flex-direction: column; align-items: center; min-height: calc(100vh - 98px);  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; padding-left:30px; padding-right:30px;"
  aboutPage.innerHTML = "<h1>About</h1>" +
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget feugiat est, id facilisis elit. Integer gravida arcu et gravida molestie. Praesent massa quam, accumsan nec nisl a, rutrum ornare ipsum. Curabitur ac fermentum odio, eu hendrerit elit. In sollicitudin magna nec leo laoreet vulputate. Nunc sollicitudin ligula egestas sapien euismod mollis. Donec gravida purus quis ipsum suscipit maximus. Duis eget sem tincidunt, lacinia enim rhoncus, accumsan libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer scelerisque leo at quam fringilla, eget consequat quam interdum. Maecenas eu nulla in lacus pellentesque molestie. Quisque at lacus quis ante posuere mattis quis efficitur augue. Aliquam ac tempus nibh, quis vulputate nisl. Vivamus rhoncus dignissim felis. <br><br>Pellentesque porta sollicitudin hendrerit. In hendrerit metus erat, accumsan bibendum lorem sollicitudin et. Etiam elementum, neque nec maximus congue, ligula magna egestas augue, quis vehicula libero nibh vel lacus. Donec mollis sollicitudin aliquet. Nulla in efficitur felis. In hac habitasse platea dictumst. Sed volutpat gravida massa, vehicula pellentesque massa. Maecenas magna dolor, posuere quis sodales sit amet, convallis eget nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean facilisis, ante et pharetra hendrerit, mi ante rutrum tellus, ac vulputate enim elit non nulla. </p>";
  content.appendChild(aboutPage)
}

export {loadAbout};
