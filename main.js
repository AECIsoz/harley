document.getElementById('carmen').hidden = true;
document.getElementById('next').hidden = true;
document.getElementById('gabrielle').hidden = true;
document.getElementById('nextOne').hidden = true;
document.getElementById('restart').hidden = true;
document.getElementById('lily').hidden = true;

let startButton = document.getElementById('start');
let nextButtonOne = document.getElementById('next');
let nextButtonTwo = document.getElementById('nextOne');
let restart = document.getElementById('restart');

let firstMoveToNext = function() {
    document.getElementById('start').hidden = true;
    document.getElementById('carmen').hidden = false;
    document.getElementById('inner-container').style.backgroundImage = "url('./resources/HD2.jpg')";
    document.getElementById('inner-container').style.backgroundSize = '60%';
    document.getElementById('inner-container').style.backgroundPosition = 'left';
    document.getElementsByTagName("BODY")[0].style.backgroundColor = 'white';
    document.getElementById('next').hidden = false;
}

startButton.onclick = firstMoveToNext;

 let secondMoveToNext = function() {
     document.getElementById('next').hidden = true;
     document.getElementById('carmen').hidden = true;
     document.getElementById('nextOne').hidden = false;
     document.getElementById('gabrielle').hidden = false;
     document.getElementById('inner-container').style.backgroundImage = "url('./resources/HD4.jpg')";
 }

 nextButtonOne.onclick = secondMoveToNext;

 let thirdMoveToNext = function() {
    document.getElementById('nextOne').hidden = true;
    document.getElementById('gabrielle').hidden = true;
    document.getElementById('restart').hidden = false;
    document.getElementById('lily').hidden = false;
    document.getElementById('inner-container').style.backgroundImage = "url('./resources/HD2.jpg')";
 }

 nextButtonTwo.onclick = thirdMoveToNext;

 let startAgain = function() {
    document.getElementById('restart').hidden = true;
    document.getElementById('lily').hidden = true;
    document.getElementById('start').hidden = false;
    document.getElementById('inner-container').style.backgroundImage = "url('./resources/HD3.jpg')";
    document.getElementById('inner-container').style.backgroundSize = '100%';
    document.getElementById('inner-container').style.backgroundPosition = 'center';
    document.getElementsByTagName("BODY")[0].style.backgroundColor = 'black';
 }

 restart.onclick = startAgain;