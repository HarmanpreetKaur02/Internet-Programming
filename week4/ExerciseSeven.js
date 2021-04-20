function data()
{
  var element = document.getElementById('name');
  alert(element.value);
}

function clicked()
{
  var element = document.getElementById('button');
  element.addEventListener('click', data);
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', clicked);
