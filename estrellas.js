const recuerdos=[
    {t:"La primera vez que hablamos",txt:"no me acuerdo la veeldad pero recuerdo un poco las veces que ibas a mi casa en ese momento ni me acercaba para hablar en relidad no tenia interes de hacerlo por que no te conocia jsjsjsjs pero ahora ps ps me gusta hablar contigo aun q la verdad soy malisima para hacer conversación."},
    {t:"Pasar tiempo contigo",txt:"Me gusta que pasemos tiempo juntos puedo bromear y platicar aun que al principio cuando te volvi a ver me costo trabajo porque todo me da pena amí asi que no sabia como hacerlo pero ya pasando el tiempo agarre confianza jsjsjs pero aun asi me pongo nerviosa siempre que pasan los dias y de pronto nos volvemos a ver jjsjsjs"},
    {t:"Todas esas veces que has sido amable",txt:"Bueno ps que puedo decir? Al principio me incomodaba cada que eras amable y cada que tratabas de ser atento porque ps aun que ya te conozca desde hace años ps ps no sentia esa confianza como para ser tan cercanos he confiansudo jajaja pero admito que ahora me gusta estar cerca de ti y quisiera abrazarte mucho pero shh me da pena hacerlo jajaja"},
    {t:"hablar contigo",txt:"a lo mejor sonara repetitivo pero quiero decirte que en este mes,hablar contigo se volvió de mis momentos favoritos del día.Aun que sea poco lo que aveces hablemos"},
    {t:"Conocerte",txt:"Quisiera saber algo,quisieras que nos sigamos conociendo? por que yo si quisiera saber mas de ti y que tu sepas mas de mi a lo mejor es demasiado que haya hecho todo esto o quizas no pero bueno nose muy bien, sinceramente aveces me cuesta trabajo desmostrar que quiero a alguien porque no me gusta que lo noten pero weno ya sabes tonterias jsjsj. En fin te quiero ojo piojo y me gustaria decirte que me agradas mucho bueno ya ps la neta me gustas jsjsjs quieres ser mi chava.. *suena musica de vanda de fondo..tururururu* referencia de la rosa de guadalupe jajaja ay no ok ok sha ps"},
    {t:"La estrella mas brillante",txt:"Ya hablando encerio jsjsjs bueno nose si leiste todo pero bueno si llegaste hasta aquí solo queria decirte que me gusta hablar contigo y me gustaria que sigamos conociendonos tranquilamente sin presión ¿te gustaria eso?"},

];
const sky = document.getElementById('sky');
for(let i=0; i<5; i++){
    let s = document.createElement('div');
    s.className='star';
    let tam = 12 + Math.random()*10;
    s.style.width=tam + 'px';
    s.style.height=tam + 'px';
    s.style.left=(10+Math.random()*80)+'%';
    s.style.top=(10+Math.random()*70)+'%';
    s.onclick=()=>abrir(i);
    sky.appendChild(s);
}
function abrir(i){
    document.getElementById('titulo').innerText=recuerdos[i].t;
    document.getElementById('texto').innerText=recuerdos[i].txt;
    document.getElementById('carta').classList.add('mostrar');
}
function cerrar(){
    document.getElementById('carta').classList.remove('mostrar');
}
