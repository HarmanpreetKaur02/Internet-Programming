function exerciseFour()
{
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'CSYM019';

    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'This module includes:';
}

alert('Script Loaded');
document.addEventListener('DOMContentLoaded', exerciseFour);
