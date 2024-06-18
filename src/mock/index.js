import Hotel from "./img/hotel.jpg";
import svgContent from "./img/circle-check.svg";
import indexCss from "./index.css";
import "./util.js";

function component() {
  const element = document.createElement("img");
  element.src = Hotel;
  window.document.getElementById("svg-loader").src = svgContent;
  return element;
}

document.body.appendChild(component());
