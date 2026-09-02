function changeBackground() {
    document.body.style.backgroundColor = "#333333";
}

function revealName(element) {
    element.classList.add("revealed");

    // Re-blur after 3 seconds (not change color, just blur)
    setTimeout(function () {
        element.classList.remove("revealed");
    }, 3000);
}


document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOUSE GLOW EFFECT
    ========================================= */
    
    try {
        // Create mouse glow element
        const mouseGlow = document.createElement('div');
        mouseGlow.className = 'mouse-glow';
        document.body.appendChild(mouseGlow);
        
        // Create custom cursor
        const cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        document.body.appendChild(cursorGlow);
        
        // Track mouse movement
        let mouseX = 0;
        let mouseY = 0;
        let glowX = 0;
        let glowY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Update cursor glow immediately
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
        });
        
        // Smooth glow follow
        function animateGlow() {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;
            
            mouseGlow.style.left = glowX + 'px';
            mouseGlow.style.top = glowY + 'px';
            
            requestAnimationFrame(animateGlow);
        }
        
        animateGlow();
        
        // Click effect
        document.addEventListener('mousedown', () => {
            cursorGlow.classList.add('clicking');
        });
        
        document.addEventListener('mouseup', () => {
            cursorGlow.classList.remove('clicking');
        });
    } catch (e) {
        console.log('Mouse glow effect disabled');
    }

    /* =========================================
       PRIVATE NAME REVEAL
    ========================================= */

    try {
        document.querySelectorAll(".private-name").forEach(function (name) {

            name.addEventListener("click", function () {
                revealName(name);
            });

        });
    } catch (e) {
        console.log('Private name reveal disabled');
    }


    /* =========================================
       DYNAMIC SHOOTING STARS
    ========================================= */

    const starContainer = document.querySelector(".stars");

    if (starContainer) {
        /* Remove old static stars */

        starContainer.querySelectorAll(".star").forEach(function (star) {
            star.remove();
        });

        /* Create a new shooting star */

        function createShootingStar() {

            const star = document.createElement("span");

            star.className = "dynamic-star";


            /* Random starting position */

            const startX = -10 + Math.random() * 120;
            const startY = -10 + Math.random() * 120;


            /* Random depth */

            const depth = Math.random();


            /* Smaller = farther away */

            let size;

            if (depth < 0.65) {

                size = 1 + Math.random() * 1.2;

            } else if (depth < 0.9) {

                size = 1.8 + Math.random() * 1.5;

            } else {

                size = 3 + Math.random() * 2;

            }


            /* Random speed */

            const duration = 4 + Math.random() * 3;


            /* Apply position */

            star.style.left = startX + "%";
            star.style.top = startY + "%";


            /* Apply size */

            star.style.width = size + "px";
            star.style.height = size + "px";


            /* Random brightness */

            star.style.opacity =
                0.35 + Math.random() * 0.65;


            /* Very subtle blur */

            star.style.filter =
                `blur(${Math.random() * 0.4}px)`;


            /* Animation speed */

            star.style.animationDuration =
                duration + "s";


            /* Add to container */

            starContainer.appendChild(star);


            /* Remove after animation */

            setTimeout(function () {

                star.remove();

            }, duration * 1000);

        }


        /* =========================================
           STAR SPAWNER
        ========================================= */

        function scheduleStar() {

            createShootingStar();


            /*
               Random delay between stars.
               250–700ms gives us a much denser
               sky without completely flooding it.
            */

            const nextStar =
                250 + Math.random() * 450;


            setTimeout(scheduleStar, nextStar);

        }


        /* =========================================
           INITIAL STAR FIELD
        ========================================= */

        for (let i = 0; i < 25; i++) {

            setTimeout(
                createShootingStar,
                i * 100
            );

        }


        /* Start continuous spawning */

        scheduleStar();
    }

});


/* =================================
   PANEL BUTTONS REVEAL BLUR EFFECT
================================= */

try {
    document.querySelectorAll(".panel-button").forEach(function (button) {

        button.addEventListener("click", function () {
            this.classList.add("revealed");

            // Re-blur after 3 seconds
            setTimeout(function () {
                button.classList.remove("revealed");
            }, 3000);
        });

    });
} catch (e) {
    console.log('Panel buttons effect disabled');
}


/* =================================
   PRIVATE HERO CARD
================================= */

try {
    document.addEventListener("DOMContentLoaded", function () {

        const heroCard = document.querySelector(".hero-gfx-card");

        if (!heroCard) return;

        const privateContent = document.createElement("div");

        privateContent.className = "private-card-content";

        privateContent.innerHTML = `
        <span>PRIVATE</span>
        <h2><span class="rgb-text">ProjectRasty</span></h2>
        <p>2026 Rasty Israel Enterprise©</p>
        <p>is not responsible for the use or distribution</p>
        <p>of third party or pirated software.</p>
    `;

        heroCard.appendChild(privateContent);

        let hideTimer;

    heroCard.addEventListener("click", function () {

        heroCard.classList.add("revealed");

        clearTimeout(hideTimer);

        hideTimer = setTimeout(function () {
            heroCard.classList.remove("revealed");
        }, 3000);

    });

    });
} catch (e) {
    console.log('Private hero card disabled');
}
