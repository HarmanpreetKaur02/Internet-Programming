var interval = 0; //global variable

/*
To maintain the count of global variable
function myClickEvent()
{
 myVariable = myVariable + 1;
 console.log(myVariable);
}
*/

function leftInterval()
{
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;

  element.style.left = positionLeft - 1 + 'px';
}

function rightInterval()
{
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;

  element.style.left = positionLeft + 1 + 'px';
}

function topInterval()
{
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;

  element.style.top = positionTop - 1 + 'px';  //To move the circle by 5 pixels
}

function bottomInterval()
{
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;

  element.style.top = positionTop + 1 + 'px';
}

function myKeyFunction(event)
{
  clearInterval(interval);
  console.log(event.keyCode);

  if(event.keyCode == 37)
  { interval = setInterval(leftInterval, 10); }

  if(event.keyCode == 38)
  { interval = setInterval(topInterval, 10);  }

  if(event.keyCode == 39)
  { interval = setInterval(rightInterval, 10);  }

  if(event.keyCode == 40)
  { interval = setInterval(bottomInterval, 10); }

  if(event.keyCode == 32)
  { clearInterval(interval);  }
}

function myLoadFunction()
{
  document.addEventListener('keydown', myKeyFunction);
}

/*
  To check count of global variable
function myLoadEvent()
{
 document.addEventListener('click', myClickEvent);
}*/

alert('Exercise Ten');
document.addEventListener('DOMContentLoaded', myLoadFunction);
