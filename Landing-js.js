window.addEventListener('load', function (){
    this.console.log('el contenido a cargado');

    var images = [];

    images[0] = 'assets/image-big.png'
    images[1] = 'assets/image-big2.png'
    images[2] = 'assets/image-big3.jpg'

    var i = 0;

    function Cambioimages() {
    document.slider.src = images[i];
    if(i < 2) {
        i++;
    } else {
        i = 0;
    }
    }

    this.setInterval(Cambioimages, 1000)
});

