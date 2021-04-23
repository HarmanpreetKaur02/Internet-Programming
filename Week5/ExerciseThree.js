function mainFunction()
{
  var element = document.getElementById('circle');
  element.style.opacity = '0.5';
}

function clickFunction()
{
  var element = document.getElementById('circle');
  element.addEventListener('click', mainFunction);
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', clickFunction);
