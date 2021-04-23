
function mainFunction()
{
  var element = document.getElementById('circle');
  element.style.backgroundColor = 'lightBlue';
}

function clickEvent()
{
  var element = document.getElementById('circle');
  element.addEventListener('click', mainFunction);
}

document.addEventListener('DOMContentLoaded', clickEvent);
