
function myKeyFunction()
{
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + 'px';
}

/* When the circle is clicked, it moves to the left
function myClickFunction()
{
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + 'px';
}
*/

function myLoadFunction()
{
  var element = document.getElementById('circle');
  //element.addEventListener('click', myClickFunction);
  document.addEventListener('keydown', myKeyFunction);
}

alert('Exercise 7');
document.addEventListener('DOMContentLoaded', myLoadFunction);
