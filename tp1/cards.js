document.addEventListener('DOMContentLoaded', function() {
    const selecion = document.getElementById("Seleccion");
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");
    const top3 = document.getElementById('top3');


    top3.addEventListener('click',()=>{
        card1.getElementsByTagName('img')[0].src = 'la-pelota.webp';
         // Restablecer el texto del párrafo al valor inicial
        card1.getElementsByTagName('p')[0].textContent = ' El fútbol es un deporte de equipo que se juega entre dos equipos de once jugadores cada uno. El objetivo del juego es marcar goles al introducir la pelota en la portería del equipo contrario. Los jugadores utilizan principalmente sus pies para controlar y pasar la pelota, aunque también pueden usar otras partes del cuerpo, excepto las manos y los brazos(a excepción del portero dentro de su área de penalti). inicial';

        card2.getElementsByTagName('img')[0].src='el-mundo-del-futbol.jpg';
        card2.getElementsByTagName('p')[0].textContent=' Es uno de los deportes más populares y ampliamente practicados en todo el mundo. También es conocido como soccer en algunos países, principalmente en América del Norte.';

        card3.getElementsByTagName('img')[0].src='futbol.jpg';
        card3.getElementsByTagName('p')[0].textContent='El fútbol tiene países con ligas y equipos que son considerados de alto nivel en términos de calidad de juego, talento de los jugadores y competitividad.';

    });

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
