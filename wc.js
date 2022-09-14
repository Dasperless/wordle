/*
Por si se desea probar, usted debe de utilizar le teclado, donde:
- Enter le da el paso a los otras filas.
- Delete borra las letras
- Y recargar le da la siguente letra en la lista, de manera aleatoria.
- Se quiso implementar otras cosa pero no se pudo T-T
*/



/*Variables de de la cantidad de columnas y */
var alto = 6;
var ancho = 5;


var fila = 0;
var columna = 0;

var juego_completado = false;

var lista_palabras = ["abran", "abras","abras","abria","acoja","acojo","acres","actuo","acuna","acuna","acuña","acuña","aguda","agudo","alaju","albos","alojo","aloja","alojo","amina","amina","andas","andes","andes","anima","anima","aojar","aojas","aojos","aojas","apoda","apodo","apoda","apodo","apure","arces","arcos","ardan","ardas","ardes","ardas","ardes","arias","arios","arlos","arpas","Aruba","areis","asees","aseos","asire","asolo","aseis","asian","asias","atoja","atojo","atoja","atojo","avale",  "avara","aerea","bacan","balas","bares","basca","bates","bayas","bebed","bebes","bebes","besen","beses","besos","beses","betas","bojar","bojas","bojos","bojas",   "bolar","bondi","bonos","borre","borre","botad","botan","botas","boten","botes","botas","botes","bulas","buses","caceo","cajas","callo","callo","canas","canes",  "cansa","cansa","capas","capes","capas","capes","caros","casan","casas","casca","casca","Catar","cause","cause","cavas","cavos","cazan","cazas","caida","caido",   "cañas","cañeo","cañas","ceded","cedes","cedes","cefos","celes","cenas","cepas","ceras","cerdo","ceros","cerra","chefs","Chile","China","choco",  "ciega","cines","clubs","coces","coces","codeo","coged","cogen","coger","coges","coges","cogia","cojas","cojos","cojas","colas","coles","colon","coman",   "comed","conos","copas","copas","coral","coras","Corea","corea","corea","corra","corre","corre","corsa","cosas","coses","cosas","coses","coños","creas","crees",   "crees","croar","cruje","cubas","cucos","cuida","cuide","cuida","cuide","culos","cunas","cunas","curdo","curio","cuñas","cuñas","datos","debas",   "debed","dedos","densa","dijes","diles","doman","domes","domes","donan","donas","dores","doria","dorio","dotas","dotes","dotas","dotes","drupa","Dubai",   "Dubai","dudan","dunas","duhos","echas","eches","echos","eches","edita","edita","eleve","ellos","emoji","emoyi","enoja","enojo","enoja","entes",   "envio","erizo","errar","erres","erres","espia","estad","estas","euros","evita","evita","falle","falle", "falos", "ferio", "fetos", "files", "fomes",   "force","frias","fugas","fugas","Gabon","gafas","Gales","galos","gases","gatos","genes","gimen","gimes","godas","godos","goles","gorra","grabe","grabe",   "grave","grave","groar","gurus","guera","habed","habra","habre","habia","hacen","haces","haces","hacia","hagan","hagas","hagas","Haiti","halan","halas",
    "hallo","halla","halas","harte","haran","haras","haria","hayan","hayas","hayas","heces","hecha","hecho","hemos","hiero","hijas","hilan","hilos","hinca",    "hoces","hoces","hojas","huera","huero","hunas","hunos","hurgo","husos","ibais","India","intis","ireis","irian","irias","isbas","jalon","Japon","jemal",   "jemes","jerga","jonia","joyel","jugos","jujeo","kanes","Kenia","kunas","kurda","labia","labre","labre","lacra","lados","lagos","lamen","lapas",   "larga","latas","latas","lazan","lazos","legas","legos","lejos","leyes","libro","lides","limas","liras","lises","locas","locha","locos","losas",    "losas","loteo","lozas","luces","luche","lucho","luche","lucho","lusas","lusos","maceo","Maine","malas","malos","Malta","mamas","mamas","manda",    "manos","mapas","mares","Marin","masco","mases","mases","matas","matas","mayas","mayas","mazos","mecen","meces","meces","menes","menes","menus","mesas",    "mesen","meses","mesas","meses","metas","metes","metas","mezas","mezas","midas","midas","migro","mines","mines","miras","miren","mires","miras","misad",    "mista","mista","mitos","modos","mojar","mojas","mojos","mojas","molas","moles","molas","moles","monas","monos","moras","moros","morro","moras","moved",    "mozas","moños","mucas","mucos","mudas","mueve","mulas","nabos","nadas","nades","nades","Nauru","Nauru","naves","nazis","necia","Nepal","niños",    "nomos","nubes","nucas","nudas","nudos","nulas","nulos","Niger","obras","ollas","omani","ondas","onzas","opera","opera","orcas","orden","ornan","oseas","oseas","ovulo",    "ovulo","pacas","pacen","paces","pajas","pajes","palas","palos","palpa","panes","papua","papus","paras","parda","paren","pares","parta","paras","paris",    "pasen","pases","pases","patos","pañal","pecas","peces","pedos","pegas","pegue","penan","penas","penda","penen","penes","pensa","pense","penas","penes",    "peras","peros","pesad","pesas","pesen","peses","pesos","peses","petas","petas","peais","peñas","pican","pidas","pides","pidas","pines","pipas","pisad",    "pises","plena","pleno","pocas","pocos","podas","poded","poder","podra","podre","podas","podes","podia","poned","ponen","poner","pones","ponga",    "pones","ponia","porfa","posee","posen","poses","posee","posos","poses","potos","pozos","prado","pueda","puede","puedo","pulen","pumas","putas","Qatar","quere",
    "quise","quiso","Quito","quito","quito","rabon","ramos","rapas","rapas","rasco","raspa","ratas","ratos","raeis","reces","reces","redes","rejas","rento",    "rento","reses","reste","reste","retes","retes","reyes","rezan","rezas","rezas","reuna","rices","rifas","rimas","rimen","rimes","rimas","rocas","rojas","rojos","rotos","rubis","runas","rusas",    "Rusia", "rusos", "ruñas", "ruñas", "sabia", "sabia", "sacan", "sacas", "sajon", "salta", "salta", "salva", "Samoa","sanad","sanas","sanas","sapos","saudi",    "sañas","sedes","sedes","sepas","seres","seria","seria","seran","seras","seria","setas","señas","siega","siego","sigan","Siria","siria","siseo","soban",    "sobas","sobes","sobes","soles","soles","sonad","sonar","sonas","soñad","soñar","soñas","soñes","subas","subes","sucia","sucre","sudan","sudar","sudas",    "Sudan","sudas","suela","suena","suene","sueno","sueña","sueñe","sueño","Suiza","suiza","supon","sushi","saxeo","super","tabus","tacos","tapas","tapes",    "tapas","tapes","Tejas","tejas","temas","temen","temes","temas","temes","tened","tenga","tengo","tenia","tenes","tenia","terse","terse","testa","tetar",    "tetas","tetas","Texas","teñia","tiene","tisus","titan","tomad","toman","tomas","tomes","tomas","Tonga","tonos","topos","torpe","tosed","traed","traen",    "traer","traes","trajo","traes","traia","tolar","Tunez","untes","urdas","urnas","usaos","usate","useis","uñoso","vacan","vacas","vagos","vamos","vasca","vasta",    "vates","vayan","vayas","vayas","veces","veces","vedas","veles","velos","veles","vemos","venas","veras","vetas","veian","veias","viera","vigas","vinos",    "vires","vivas","volar","votad","votan","votas", "voten", "votes", "votos", "votas", "votes", "video", "wikis", "wones", "Yemen", "yendo", "yenes", "yesca",    "yogur","yugos","zacas","zarca","zares","zetas","zonas","zorro","zulus","zurda","zurro","acida","acido","acima","acimo","afila","afilo","ambar","anima","apoda",    "apodo","arabe","arbol","arida","arido","atica","atico","atomo","atona","atono","aurea","aureo","avara","avaro","avida","avido","ebola","epale","epica",    "epico","epoca","etica","etico","exito","icono","ignea","igneo","ñames","ñutas","ñutos","ñutas","obolo","ocrea","opera","opimo","orale","oseas","oseos",    "otica","otico","ovida","ovido","ovolo","ujule","unica","unico","urica","urico","usate","usese"
  ];

var palabra = lista_palabras[Math.floor(Math.random() * lista_palabras.length)].toUpperCase();
console.log(palabra);

  window.onload = function(){
    inicio();

  }

  function inicio(){
    /*Ayuda a crear la pizarra del wordle*/ 
    for (let i = 0; i < alto; i++) {
        for (let j = 0; j < ancho; j++) {
            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
let teclado = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ "],
    ["Espacio", "Z", "X", "C", "V", "B", "N", "M", "Borrar" ],
    ["Siguiente"]
];

document.addEventListener("keyup", (k) => {
    if (juego_completado) return;
    //alert(k.code);  //indica que tecla se esta precionando en el teclado
    if ("KeyA" <= k.code && k.code <="Keyz"){
        if (columna < ancho) {
            let currTile = document.getElementById(fila.toString() + '-' + columna.toString());
            if (currTile.innerText == "") {
                currTile.innerText = k.code[3];
                columna += 1;
            }
        }
    }
    else if (k.code == "Delete"){
        if (0 < columna && columna <= ancho){
            columna -= 1;
        }
        let currTile = document.getElementById(fila.toString() + '-' + columna.toString());
        currTile.innerText = "";
    }
    else if (k.code == "Enter") {
        update();
        fila += 1; 
        columna = 0; 
    }
    if (!juego_completado && fila == alto) {
        juego_completado = true;
        document.getElementById("Respuesta").innerText = word;
    }

})

function update() {
    let correcta = 0;
    for (let w = 0; w < ancho; w++) {
        let letra_ente = document.getElementById(fila.toString() + '-' + w.toString());
        let letra = letra_ente.innerText;
          if (palabra[w] == letra) {
            letra_ente.classList.add("correcto");
            correcta += 1;
        } 
        else if (palabra.includes(letra)) {
            letra_ente.classList.add("posible");
        } 
        else {
            letra_ente.classList.add("incorrecta");
        }
        if (correcta == ancho) {
            juego_completado = true;
        }
    }
}

  }

















/*
  - Referencias:
(S.N), [Kenny Yip Coding]. (200,1,29). Build a Wordle Clone in JavaScript HTML CSS [Video]. YouTube. https://www.youtube.com/watch?v=ckjRsPaWHX8
Ian, Lenehan [Ian, Lenehan].(2022,1,19). Build a Wordle clone using HTML, CSS & Javascript! [Video]. YouTube. https://www.youtube.com/watch?v=j7OhcuZQ-q8
*/
