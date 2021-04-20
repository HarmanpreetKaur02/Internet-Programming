function data()
{
  var element = document.getElementById('name');
  var elementDiv = document.getElementById('division');
  elementDiv.firstChild.nodeValue = element.value;
}

function clicked()
{
  var element = document.getElementById('button');
  element.addEventListener('click', data);
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', clicked);
