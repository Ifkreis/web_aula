document.getElementById('logo').onclick = mudarCorFundo;

function mudarCorFundo()
{

    var cor1 = Math.floor(Math.random() * 255);
    var cor2 = Math.floor(Math.random() * 255);
    var cor3 = Math.floor(Math.random() * 255);
    
    document.querySelector('body').style.backgroundColor = `rgb(${cor1}, ${cor2}, ${cor3})`;


}