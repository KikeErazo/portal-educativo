const preguntas = [
"¿Cuáles fueron los impactos ambientales inmediatos provocados por la fuga de gases tóxicos en Bhopal?",
"¿Cómo afectó el aire, el agua y el suelo?",
"¿Consecuencias ambientales a largo plazo?",
"¿Contaminación de aguas subterráneas?",
"¿Efectos en biodiversidad?",
"¿Importancia de la gestión de químicos?",
"¿Medidas preventivas ambientales?",
"¿Estrategias de remediación?",
"¿Impacto en comunidades?",
"¿Lecciones del caso?"
];

const respuestas = [
"Contaminación del aire, daño a fauna y ecosistemas",
"Aire tóxico, agua y suelo contaminados",
"Contaminación persistente",
"Infiltración en acuíferos",
"Pérdida de especies",
"Evita accidentes ambientales",
"Control y mantenimiento",
"Descontaminación",
"Afecta salud y entorno",
"Prevención y responsabilidad"
];

let grupos = [];
let turno = null;
let index = 0;
let tiempo = 180;
let timer;

/* AGREGAR GRUPO */
function agregarGrupo(){
 let nombre = document.getElementById("grupo").value;
 if(nombre==="") return;

 grupos.push({nombre, puntos:0});
 document.getElementById("grupo").value="";
 renderGrupos();
 actualizarRanking();
}

/* MOSTRAR BOTONES DE GRUPOS */
function renderGrupos(){
 let html="";
 grupos.forEach((g,i)=>{
 html += `<button class="grupoBtn" onclick="activarGrupo(${i})">${g.nombre}</button>`;
 });
 document.getElementById("gruposBtns").innerHTML = html;
}

/* ACTIVAR GRUPO (BUZZER REAL) */
function activarGrupo(i){
 turno = i;

 document.querySelectorAll(".grupoBtn").forEach(btn=>btn.classList.remove("activo"));
 document.querySelectorAll(".grupoBtn")[i].classList.add("activo");

 iniciarTimer();
}

/* TEMPORIZADOR 3 MIN */
function iniciarTimer(){
 clearInterval(timer);
 tiempo = 180;

 timer = setInterval(()=>{
  tiempo--;

  let min = Math.floor(tiempo/60);
  let sec = tiempo%60;

  document.getElementById("timer").innerHTML =
  "⏱ "+String(min).padStart(2,'0')+":"+String(sec).padStart(2,'0');

  if(tiempo<=0){
   clearInterval(timer);
  }

 },1000);
}

/* VER RESPUESTA (TOGGLE) */
function verRespuesta(){
 let box = document.getElementById("respuestaBox");

 if(box.style.display==="block"){
   box.style.display="none";
 } else {
   box.style.display="block";
   box.innerHTML = "✅ " + respuestas[index];
 }
}

/* DAR PUNTOS */
function darPuntos(p){
 if(turno === null) return;

 grupos[turno].puntos += p;
 actualizarRanking();
}

/* SIGUIENTE */
function siguiente(){
 index++;
 if(index<preguntas.length){
   cargarPregunta();
 } else {
   alert("Actividad finalizada");
 }
}

/* CARGAR PREGUNTA */
function cargarPregunta(){
 document.getElementById("pregunta").innerHTML =
 "Pregunta "+(index+1)+":<br>"+preguntas[index];

 document.getElementById("respuestaBox").style.display="none";
 document.getElementById("timer").innerHTML="⏱ 03:00";
 clearInterval(timer);
}

/* RANKING */
function actualizarRanking(){
 grupos.sort((a,b)=>b.puntos-a.puntos);

 let html="";
 grupos.forEach((g,i)=>{
 html += `<div class="item">${i+1}. ${g.nombre} - ${g.puntos} pts</div>`;
 });

 document.getElementById("ranking").innerHTML = html;
}

cargarPregunta();