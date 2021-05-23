function mainFunction()
{
  var element = document.getElementById('circle');
  var variable = parseFloat(element.style.opacity);
  element.style.opacity = variable - 0.01;
}

function myInterval()
{
  setInterval(mainFunction, 10);
}

function myLoadFunction()
{
  var element = document.getElementById('circle');
  element.style.opacity = 1;
  element.addEventListener('click', myInterval);
}

alert('Script Loaded 6');
document.addEventListener('DOMContentLoaded', myLoadFunction);
