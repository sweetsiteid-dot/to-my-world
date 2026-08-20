/* =========================
   PASSWORD SYSTEM
========================= */

function checkPassword(){

    const password =
        document.getElementById("passwordInput").value.trim();

    if(password === "2103"){

        const passwordScreen =
            document.getElementById("passwordScreen");

        const websiteContent =
            document.getElementById("websiteContent");

        passwordScreen.style.opacity = "0";

        passwordScreen.style.transition =
            "opacity .8s ease";

        setTimeout(() => {

            passwordScreen.style.display = "none";

            websiteContent.style.display = "block";

            window.scrollTo({
                top:0,
                behavior:"instant"
            });

            startHearts();

        },800);

    }else{

        const input =
            document.getElementById("passwordInput");

        input.style.animation =
            "shake .4s ease";

        setTimeout(() => {

            input.style.animation = "";

        },400);

        alert("Wrong PIN 🖤");

    }

}


/* =========================
   ENTER KEY PASSWORD
========================= */

document.addEventListener("DOMContentLoaded",() => {

    const input =
        document.getElementById("passwordInput");

    if(input){

        input.addEventListener("keydown",(event)=>{

            if(event.key === "Enter"){

                checkPassword();

            }

        });

    }

});


/* =========================
   OPEN OUR STORY
========================= */

function openGift(){

    const music =
        document.getElementById("music");

    if(music){

        music.volume = 0.5;

        music.play().catch(()=>{});

    }

    const giftSection =
        document.getElementById("giftSection");

    if(giftSection){

        giftSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

}


/* =========================
   MUSIC CONTROL
========================= */

function toggleMusic(){

    const music =
        document.getElementById("music");

    const musicBtn =
        document.getElementById("musicBtn");

    if(!music) return;

    if(music.paused){

        music.play().catch(()=>{});

        if(musicBtn){

            musicBtn.innerHTML = "♫";

        }

    }else{

        music.pause();

        if(musicBtn){

            musicBtn.innerHTML = "🔇";

        }

    }

}


/* =========================
   FLOATING HEARTS
========================= */

let heartInterval;


function createHeart(){

    const container =
        document.getElementById("hearts");

    if(!container) return;

    const heart =
        document.createElement("div");

    heart.className = "heart";

    const symbols = [
        "♡",
        "♥",
        "🤍",
        "🖤"
    ];

    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 16 + 12 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 7 + "s";

    heart.style.opacity =
        Math.random() * .5 + .2;

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}


function startHearts(){

    if(heartInterval) return;

    heartInterval =
        setInterval(createHeart,700);

}


/* =========================
   DYNAMIC ANIMATION STYLE
========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes shake{

    0%,100%{
        transform:translateX(0);
    }

    25%{
        transform:translateX(-8px);
    }

    50%{
        transform:translateX(8px);
    }

    75%{
        transform:translateX(-5px);
    }

}

.fade-in{

    opacity:0;

    transform:
        translateY(45px);

    transition:
        opacity 1s ease,
        transform 1s ease;

}

.fade-in.show{

    opacity:1;

    transform:
        translateY(0);

}

`;

document.head.appendChild(style);


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target
                        .classList
                        .add("show");

                }

            });

        },

        {
            threshold:0.12
        }

    );


document
    .querySelectorAll(
        ".section," +
        ".polaroid," +
        ".reason-card," +
        ".timeline-item," +
        ".counter-card," +
        ".final-section," +
        ".ending"
    )
    .forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });


/* =========================
   POLAROID EFFECT
========================= */

const polaroids =
    document.querySelectorAll(".polaroid");


polaroids.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.zIndex = "20";

            card.style.transform =
                "scale(1.06) rotate(0deg) translateY(-10px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.zIndex = "";

            card.style.transform = "";

        }
    );

});


/* =========================
   HERO PARALLAX
========================= */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        if(!hero) return;

        const scroll =
            window.pageYOffset;

        if(scroll < window.innerHeight){

            hero.style.transform =
                `translateY(${scroll * 0.04}px)`;

            hero.style.opacity =
                1 - scroll / 900;

        }

    }
);


/* =========================
   MONTHSARY QUOTES
========================= */

const quotes = [

    "Five months, and I'd still choose you. 🖤",

    "You are my favorite part of every day.",

    "Five months down, hopefully a lifetime to go.",

    "Thank you for being my safe place. 🤍",

    "Every moment with you feels meaningful.",

    "You're not just my girlfriend, you're my home.",

    "I love you more with every passing day.",

    "My world feels better with you in it.",

    "Still you. Always you. 🖤",

    "Five months of us, and this is only the beginning."

];


const quoteElement =
    document.createElement("div");

quoteElement.className =
    "floating-quote";

quoteElement.innerText =
    quotes[0];

document.body.appendChild(
    quoteElement
);


let currentQuote = 0;


setInterval(() => {

    currentQuote++;

    if(
        currentQuote >=
        quotes.length
    ){

        currentQuote = 0;

    }

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteElement.innerText =
            quotes[currentQuote];

        quoteElement.style.opacity =
            "1";

    },500);

},5000);


/* =========================
   QUOTE STYLE
========================= */

const quoteStyle =
    document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

    position:fixed;

    bottom:25px;

    left:50%;

    transform:
        translateX(-50%);

    width:max-content;

    max-width:85%;

    background:
        rgba(15,15,15,.78);

    backdrop-filter:
        blur(15px);

    -webkit-backdrop-filter:
        blur(15px);

    padding:
        11px 20px;

    border-radius:
        50px;

    border:
        1px solid
        rgba(255,255,255,.12);

    font-size:
        12px;

    letter-spacing:
        .3px;

    color:
        #ddd;

    z-index:
        90;

    transition:
        opacity .5s ease,
        transform .5s ease;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,.4);

    pointer-events:
        none;

}

@media(max-width:768px){

    .floating-quote{

        bottom:18px;

        font-size:10px;

        padding:
            10px 16px;

        max-width:80%;

        text-align:center;

    }

}

`;

document.head.appendChild(
    quoteStyle
);


/* =========================
   IMAGE CLICK EFFECT
========================= */

document
    .querySelectorAll(".polaroid img")
    .forEach(image => {

        image.addEventListener(
            "click",
            () => {

                const overlay =
                    document.createElement("div");

                overlay.className =
                    "image-preview";

                overlay.innerHTML = `

                    <div class="preview-close">
                        ×
                    </div>

                    <img
                        src="${image.src}"
                        alt="Memory"
                    >

                `;

                document.body.appendChild(
                    overlay
                );

                document.body.style
                    .overflow = "hidden";


                overlay.addEventListener(
                    "click",
                    (event) => {

                        if(
                            event.target ===
                            overlay ||
                            event.target.classList
                                .contains(
                                    "preview-close"
                                )
                        ){

                            overlay.remove();

                            document.body.style
                                .overflow = "";

                        }

                    }
                );

            }
        );

    });


/* =========================
   IMAGE PREVIEW STYLE
========================= */

const previewStyle =
    document.createElement("style");

previewStyle.innerHTML = `

.image-preview{

    position:fixed;

    inset:0;

    background:
        rgba(0,0,0,.92);

    backdrop-filter:
        blur(15px);

    -webkit-backdrop-filter:
        blur(15px);

    z-index:10000;

    display:flex;

    align-items:center;

    justify-content:center;

    padding:25px;

    animation:
        previewIn .3s ease;

}

.image-preview img{

    max-width:95%;

    max-height:85vh;

    object-fit:contain;

    border-radius:8px;

    box-shadow:
        0 30px 80px
        rgba(0,0,0,.8);

}

.preview-close{

    position:absolute;

    top:20px;

    right:25px;

    width:45px;

    height:45px;

    border-radius:50%;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:30px;

    color:white;

    cursor:pointer;

    background:
        rgba(255,255,255,.08);

    border:
        1px solid
        rgba(255,255,255,.15);

}

@keyframes previewIn{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}

`;

document.head.appendChild(
    previewStyle
);


/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        const input =
            document.getElementById(
                "passwordInput"
            );

        if(input){

            setTimeout(() => {

                input.focus();

            },500);

        }

    }
);
