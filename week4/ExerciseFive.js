function exerciseFive()
{
    var variableOne = document.getElementById('heading');
    variableOne.firstChild.nodeValue = 'CSYM019';

    var variableTwo = document.getElementById('paragraph');
    variableTwo.firstChild.nodeValue = 'This module includes:';
}

alert('Script Loaded');
document.addEventListener('click', exerciseFive);
