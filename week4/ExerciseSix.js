function changeHeading()
{
    var variableOne = document.getElementById('heading');
    variableOne.firstChild.nodeValue = 'CSYM019';
}

function changeParagraph()
{
    var variableTwo = document.getElementById('paragraph');
    variableTwo.firstChild.nodeValue = 'This module includes:';
}

function exerciseSix()
{
    var variableOne = document.getElementById('heading');
    variableOne.addEventListener('click', changeHeading);

    var variableTwo = document.getElementById('paragraph');
    variableTwo.addEventListener('click', changeParagraph);
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', exerciseSix)
