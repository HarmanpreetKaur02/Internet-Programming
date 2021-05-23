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
  console.log(event.keyCode);

  if(event.keyCode == 37)
  { setInterval(leftInterval, 10); }

  if(event.keyCode == 38)
  { setInterval(topInterval, 10);  }

  if(event.keyCode == 39)
  { setInterval(rightInterval, 10);  }

  if(event.keyCode == 40)
  { setInterval(bottomInterval, 10); }
}

function myLoadFunction()
{
  document.addEventListener('keydown', myKeyFunction);
}

alert('Exercise Nine');
document.addEventListener('DOMContentLoaded', myLoadFunction);
