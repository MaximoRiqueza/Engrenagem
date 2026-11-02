const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playBtn = document.getElementById("playBtn");
const musica = document.getElementById("musica");
const intro = document.getElementById("intro");

const mensaje = document.getElementById("mensaje");
const tiempoDiv = document.getElementById("tiempo");
const flash = document.getElementById("flash");

const hud = document.getElementById("hud");
const porcentaje = document.getElementById("porcentaje");
const destino = document.getElementById("destino");
const cantidadPecas = document.getElementById("cantidadPecas");

let modoAnalisis = false;

const piezas = [];

for(let i = 0; i < 50; i++){

    piezas.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() * 2) - 1,
        vy: (Math.random() * 2) - 1

    });

}

const eventos = [

    {
        tiempo: 12.23,
        texto: "(Gente como a gente não nasceu pro primeiro lugar)",
        flash: true
    },

    {
        tiempo: 17.79,
        texto: "(Não importa o quanto você treine, isso não vai mudar)",
        flash: true
    },

    {
        tiempo: 21.33,
        texto: "Hey, hey!",
        flash: true
    },

    {
        tiempo: 22.68,
        texto: "Eu sempre acreditei",
        flash: true
    },

    {
        tiempo: 23.96,
        texto: "Cada indivíduo tem o seu destino",
        flash: true
    },

    {
        tiempo: 25.53,
        texto: "Estabelecido, é a lei",
        flash: true
    },

    {
        tiempo: 26.79,
        texto: "Humanos têm",
        flash: true
    },

    {
        tiempo: 27.46,
        texto: "Humanos têm o seu também",
        flash: true
    },

    {
        tiempo: 28.76,
        texto: "Uma vocação, porém",
        flash: true
    },

    {
        tiempo: 29.78,
        texto: "Alguns não aceitam suas limitações",
        flash: true
    },

    {
        tiempo: 31.14,
        texto: "E por isso, não funcionam muito bem",
        flash: true
    },

    {
        tiempo: 33.38,
        texto: "Já imaginou um leão tentando voar?",
        flash: true
    },

    {
        tiempo: 36.26,
        texto: "Então, por que humanos insistem em refutar?",
        flash: true
    },

    {
        tiempo: 39.13,
        texto: "Desde criança, eu tenho TOC só de enxergar",
        flash: true
    },

    {
        tiempo: 42.3,
        texto: "Peças sem se encaixar",
        flash: true
    },

    {
        tiempo: 45.08,
        texto: "Observo e analiso, peças de um jogo",
        flash: true
    },

    {
        tiempo: 47.35,
        texto: "Mesmo antes de começar",
        flash: true
    },

    {
        tiempo: 48.44,
        texto: "Monto e desmonto o quebra-cabeça",
        flash: true
    },

    {
        tiempo: 49.96,
        texto: "Até tudo se encaixar",
        flash: true
    },

    {
        tiempo: 51.57,
        texto: "Você quer saber o que eu acho",
        flash: true
    },

    {
        tiempo: 52.87,
        texto: "Com base nos dados e nesse resultado?",
        flash: true
    },

    {
        tiempo: 54.43,
        texto: "Yoichi Isagi como um atacante?",
        flash: true
    },

    {
        tiempo: 56.03,
        texto: "Totalmente inadequado",
        flash: true
    },

    {
        tiempo: 57.21,
        texto: "Eu não sei",
        flash: true
    },

    {
        tiempo: 58.31,
        texto: "O que é que tem de mais",
        flash: true
    },

    {
        tiempo: 59.75,
        texto: "Numa peça de xadrez",
        flash: true
    },

    {
        tiempo: 61.21,
        texto: "Que não entende o que faz?",
        flash: true
    },

    {
        tiempo: 62.74,
        texto: "Analisei vocês",
        flash: true
    },

    {
        tiempo: 64.14,
        texto: "Estudei até demais",
        flash: true
    },

    {
        tiempo: 65.7,
        texto: "E acho que essa mentalidade",
        flash: true
    },

    {
        tiempo: 67.28,
        texto: "É o que te torna incapaz",
        flash: true
    },

    {
        tiempo: 68.78,
        texto: "Pensa um pouco mais",
        flash: true
    },

    {
        tiempo: 69.67,
        texto: "Ei, Isagi, desde que você se tornou",
        flash: true
    },

    {
        tiempo: 72.22,
        texto: "O maior atacante do time",
        flash: true
    },

    {
        tiempo: 73.82,
        texto: "O que é que mudou?",
        flash: true
    },

    {
        tiempo: 75.43,
        texto: "Você não come e não dorme",
        flash: true
    },

    {
        tiempo: 76.97,
        texto: "Tá sempre se sentindo em choque",
        flash: true
    },

    {
        tiempo: 78.67,
        texto: "É seu corpo desconfortável com o que alcançou",
        flash: true
    },

    {
        tiempo: 81.69,
        texto: "Basta olhar pro Itoshi Rin ou pro Loki, eles não sentem a mesma pressão",
        flash: true
    },

    {
        tiempo: 84.41,
        texto: "Afinal, desde criança, já tinham certeza que o topo era sua vocação",
        flash: true
    },

    {
        tiempo: 87.43,
        texto: "Mas eu e você não somos compatíveis pra ser estrelas em ascensão",
        flash: true
    },

    {
        tiempo: 90.42,
        texto: "O Japão só vai ter chance de vencer se você mudar sua visão",
        flash: true
    },

    {
        tiempo: 93.05,
        texto: "Gente como a gente não nasceu pro primeiro lugar",
        flash: true
    },

    {
        tiempo: 98.92,
        texto: "Não importa o quanto você treine, isso não vai mudar",
        flash: true
    },

    {
        tiempo: 104.89,
        texto: "Se todos alcançarem o topo, quem vai sustentar?",
        flash: true
    },

    {
        tiempo: 110.89,
        texto: "Gente como a gente só decide quem vai chegar lá",
        flash: true
    },

    {
        tiempo: 117.19,
        texto: "Um time inteiro cauterizado",
        flash: true
    },

    {
        tiempo: 118.79,
        texto: "Culpa de um só jogador",
        flash: true
    },

    {
        tiempo: 120.61,
        texto: "Isagi, calma, não entenda errado",
        flash: true
    },

    {
        tiempo: 122.4,
        texto: "Você também tem valor",
        flash: true
    },

    {
        tiempo: 123.32,
        texto: "Somos iguais, dois analistas",
        flash: true
    },

    {
        tiempo: 124.76,
        texto: "Mas apenas um de nós aceitou",
        flash: true
    },

    {
        tiempo: 126.23,
        texto: "Sua chance não acabou",
        flash: true
    },

    {
        tiempo: 127.32,
        texto: "Mas você tem que mudar sua visão",
        flash: true
    },

    {
        tiempo: 129.25,
        texto: "Aceite ser o número dois do seu time",
        flash: true
    },

    {
        tiempo: 130.06,
        texto: "Pra assim garantir a vitória do Japão",
        flash: true
    },

    {
        tiempo: 131.87,
        texto: "Mudar é difícil pra quem não quer enxergar",
        flash: true
    },

    {
        tiempo: 135.66,
        texto: "A sua mente tá exausta de tanto tentar",
        flash: true
    },

    {
        tiempo: 141.63,
        texto: "O milagre que espera não vai mais chegar",
        flash: true
    },

    {
        tiempo: 143.67,
        texto: "Peixes vão nadar, cavalos vão correr",
        flash: true
    },

    {
        tiempo: 147.4,
        texto: "Coelhos vão saltar, então, me diz por quê?",
        flash: true
    },

    {
        tiempo: 150.11,
        texto: "Eu não tô dizendo pra você não sonhar",
        flash: true
    },

    {
        tiempo: 153.07,
        texto: "Mas busque algo que possa realizar",
        flash: true
    },

    {
        tiempo: 156.44,
        texto: "Cada drible, cada avanço, cada marcação",
        flash: true
    },

    {
        tiempo: 159.59,
        texto: "Cada finta, cada acerto, cada frustração",
        flash: true
    },

    {
        tiempo: 162.5,
        texto: "Cada vez que você rema contra a direção",
        flash: true
    },

    {
        tiempo: 165.7,
        texto: "O destino te refuta, mas estende a mão",
        flash: true
    },

    {
        tiempo: 168.17,
        texto: "Vejo um corvo aceitando que",
        flash: true
    },

    {
        tiempo: 170.79,
        texto: "O seu destino é voar pra guiar",
        flash: true
    },

    {
        tiempo: 173.38,
        texto: "Toda vez que alguém me conhece, conhece o destino",
        flash: true
    },

    {
        tiempo: 176.79,
        texto: "Mas eu não posso te obrigar a aceitar",
        flash: true
    },

    {
        tiempo: 179.24,
        texto: "Que o seu treinador doente distorceu seus pensamentos",
        flash: true
    },

    {
        tiempo: 182.41,
        texto: "Meu sonho é o suficiente, mesmo eu não sendo o maior gênio",
        flash: true
    },

    {
        tiempo: 185.16,
        texto: "Meu sonho não tem a ver com a posição de um jogador",
        flash: true
    },

    {
        tiempo: 188.14,
        texto: "Farei a França conquistar o que nem mesmo o Pelé conquistou",
        flash: true
    },

    {
        tiempo: 191.69,
        texto: "Mas, claro",
        flash: true
    },

    {
        tiempo: 192.85,
        texto: "Isso só se tornou possível porque eu aceitei",
        flash: true
    },

    {
        tiempo: 195.24,
        texto: "Gente como a gente não nasceu pro primeiro lugar",
        flash: true
    },

    {
        tiempo: 200.89,
        texto: "Não importa o quanto você treine, isso não vai mudar",
        flash: true
    },

    {
        tiempo: 207.04,
        texto: "Se todos alcançarem o topo, quem vai sustentar?",
        flash: true
    },

    {
        tiempo: 212.98,
        texto: "Gente como a gente só decide quem vai chegar lá",
        flash: true
    }

];

function mostrarMensaje(texto){

    mensaje.classList.remove("zoomTexto");

    void mensaje.offsetWidth;

    mensaje.innerText = texto;

    mensaje.style.opacity = 1;

    mensaje.classList.add("zoomTexto");

    setTimeout(() => {

        mensaje.style.opacity = 0;

    }, 3000);

}

function destelloRojo(){

    flash.style.opacity = 0.4;

    setTimeout(() => {

        flash.style.opacity = 0;

    }, 200);

}

function verificarEventos(){

    const tiempoActual = musica.currentTime;

    eventos.forEach(evento => {

        if(
            tiempoActual >= evento.tiempo &&
            !evento.mostrado
        ){

            mostrarMensaje(evento.texto);

            if(evento.flash){
                destelloRojo();
            }

            evento.mostrado = true;
        }

    });

}

function actualizarTiempo(){

    const total = Math.floor(musica.currentTime);

    const minutos =
        String(Math.floor(total / 60))
        .padStart(2,"0");

    const segundos =
        String(total % 60)
        .padStart(2,"0");

    tiempoDiv.innerText =
        `${minutos}:${segundos}`;

}

function actualizarHUD(){

    if(!modoAnalisis) return;

    porcentaje.innerText =
    Math.floor(
        70 + Math.random() * 30
    ) + "%";

    cantidadPecas.innerText =
    "PEÇAS: " + piezas.length;

    const estados = [

        "CALCULANDO",
        "PREVENDO",
        "ANALISANDO",
        "CONFIRMADO"

    ];

    destino.innerText =
    estados[
        Math.floor(
            Math.random() *
            estados.length
        )
    ];

}

function dibujarConexiones(){

    for(let i = 0; i < piezas.length; i++){

        for(let j = i + 1; j < piezas.length; j++){

            const dx =
                piezas[i].x - piezas[j].x;

            const dy =
                piezas[i].y - piezas[j].y;

            const distancia =
                Math.sqrt(dx * dx + dy * dy);

            if(distancia < 120){

                ctx.beginPath();

                ctx.moveTo(
                    piezas[i].x,
                    piezas[i].y
                );

                ctx.lineTo(
                    piezas[j].x,
                    piezas[j].y
                );

                if(modoAnalisis){

                    ctx.strokeStyle =
                    "rgba(255,0,0,0.35)";

                }else{

                    ctx.strokeStyle =
                    "rgba(255,255,255,0.08)";
                }

                ctx.stroke();

            }

        }

    }

}

function actualizar(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    dibujarConexiones();

    piezas.forEach(p => {

        p.x += p.vx;
        p.y += p.vy;

        if(
            p.x < 0 ||
            p.x > canvas.width
        ){
            p.vx *= -1;
        }

        if(
            p.y < 0 ||
            p.y > canvas.height
        ){
            p.vy *= -1;
        }

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            3,
            0,
            Math.PI * 2
        );

        if(modoAnalisis){

            ctx.fillStyle = "#ff4444";

        }else{

            ctx.fillStyle = "white";
        }

        ctx.fill();

    });

    verificarEventos();

    actualizarTiempo();

    actualizarHUD();

    requestAnimationFrame(
        actualizar
    );
}

actualizar();

playBtn.addEventListener("click", () => {

    musica.play();

    intro.style.display = "none";

});

document.addEventListener("keydown",(e)=>{

    if(e.code === "Space"){

        modoAnalisis = !modoAnalisis;

        if(modoAnalisis){

            hud.style.opacity = 1;

            mostrarMensaje(
                "ANÁLISE ATIVADA"
            );

            destelloRojo();

        }else{

            hud.style.opacity = 0;

            mostrarMensaje(
                "ANÁLISE DESATIVADA"
            );

        }

    }

});

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});