function mainFunction()
{
  var element = document.getElementById('circle');
  var circleOpacity = parseFloat(element.style.opacity);
  element.style.opacity = circleOpacity - 0.1;
}

function loadFunction()
{
  var element = document.getElementById('circle');
  element.style.opacity = 0.5;
  element.addEventListener('click', mainFunction);
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', loadFunction);
