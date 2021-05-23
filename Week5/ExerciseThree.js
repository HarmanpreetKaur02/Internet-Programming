function clickFunction()
{
  var element = document.getElementById('circle');
  element.style.opacity = '0.5';
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', clickFunction);
