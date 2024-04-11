document.addEventListener('DOMContentLoaded', function() {
    const selecion = document.getElementById("Seleccion");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");



    

    selecion.addEventListener('click', () => {
        const imagen1 = card1.querySelector('.card-img-top');
        imagen1.src = 'ARG.jpg'; // Cambiar la ruta de la imagen según sea necesario

        /*cambiamos el texto de la etiqueta P usando la classe*/
        const text1 =  card1.querySelector(".card-text");
        text1.textContent=" Argentina lidera el ranking fifa por su desempeño en los ultimos años siendo campeon del mundial en qatar 2022, campon de america y campeon de la finalizima ante italia teniendo un total de 1858 pts";

        const imagen2 = card2.querySelector('.card-img-mid');
        imagen2.src = 'francia.jpg';

        /*es una forma mas de cambiar el texto del P usando el id*/ 
        document.getElementById("p2").innerText="Francia es la segunda seleccion mejor rankeada en el ranking fifa dado a el subcampeonato mundial 2022, campeon 2018 teniendo 1840.59 pts";
        

        const imagen3 = card3.querySelector('.card-img-low');
        imagen3.src = 'belgica.webp';

        document.getElementById("p3").innerText="Belgica se queda con el tercer puesto dado que siempre clasifica a los grandes torneos teniendo un invicto de cinco años en su estadio 8 victorias y cinco empates teniendo asi 1795.23 pts en ranking fifa"

    });

    const Equipo = document.getElementById("Equipo");

    Equipo.addEventListener('click',()=>{

        const imagen1 = card1.querySelector('.card-img-top');
        imagen1.src = 'city.jpg'; // Cambiar la ruta de la imagen según sea necesario
        document.getElementById("p1").innerText="El Manchester city es lider en ranking fifa al nivel de clubes es el vijente campeon de la Champions league";
        
        const imagen2 = card2.querySelector('.card-img-mid');
        imagen2.src = 'inter.jpg'; 
        document.getElementById("p2").innerText="El inter de milan es el 2do mejor equipo a nivel de clubes siendo el subcampeon de la Champions league ";
        

        const imagen3 = card3.querySelector('.card-img-low');
        imagen3.src = 'real.jpg'; 
        document.getElementById("p3").innerText="Real madrid se queda con el tercer puesto siendo el club mas ganador de la Champions league"

        

    });




    const ligas = document.getElementById('Ligas');

    ligas.addEventListener('click',()=>{
        const imagen1 = card1.querySelector('.card-img-top');
        imagen1.src = 'italia.jpg';
        document.getElementById("p1").innerText="En la cima del ranking mundial, la Serie A italiana se ha colocado en primer lugar con 1619,5 Pts ";

        const imagen2 = card2.querySelector('.card-img-mid');
        imagen2.src = 'PREMIERLEAGUE1.jpg';
        document.getElementById("p2").innerText="En segundo lugar la denominada liga mas competitiva del mundo se queda con el segundo lugar la Premier legue";

        const imagen3 = card3.querySelector('.card-img-low');
        imagen3.src= 'LALIGASANMTANDER.jpg';
        document.getElementById("p3").innerText="En tercer lugar la liga española denominada la liga santander bajandose del trono hasta este puesto";



    });




});
