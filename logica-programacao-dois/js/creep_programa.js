/*var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

pincel.fillStyle = 'green'
pincel.fillRect(0, 0 ,350,300);

pincel.fillStyle = 'black'
pincel.fillRect(50,50,90,90);

pincel.fillStyle = 'black'
pincel.fillRect(200,50,90,90);

pincel.fillStyle = 'black'
pincel.fillRect(140,140, 60, 100);

pincel.fillStyle = 'black'
pincel.fillRect(140,140, 60, 100);

pincel.fillStyle = 'black'
pincel.fillRect(200,200, 40, 100);

pincel.fillStyle = 'black'
pincel.fillRect(100,200, 40, 100);

*/







    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle='black';
    pincel.beginPath();
    pincel.moveTo(50, 50);
    pincel.lineTo(50, 400);
    pincel.lineTo(400, 400);
    pincel.fill();

    pincel.fillStyle='white';
    pincel.beginPath();
    pincel.moveTo(100, 175);
    pincel.lineTo(100, 350);
    pincel.lineTo(275, 350);
    pincel.fill();



