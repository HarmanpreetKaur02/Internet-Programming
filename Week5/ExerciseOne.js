
function mainFunction()
{
  alert('The button was pressed.');
}

function clickEvent()
{
  var element = document.getElementById('circle');
  element.addEventListener('click', mainFunction);
}

document.addEventListener('DOMContentLoaded', clickEvent);
