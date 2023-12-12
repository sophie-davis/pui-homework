//set detailsbox to equal the detailsbox html element
var detailsBox = document.getElementById('details-box');
//adding mouseover event listener to the entire map page
document.addEventListener('mouseover', function (e) {
//if mouse is over path then make the detail box equal the name of the path the mouse is over
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
//otherwise do not show show the detailsbox
  else {
    detailsBox.style.opacity = "0%";
  }
});
//setting the details box to follow and appear based on the location of the mouse
window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};