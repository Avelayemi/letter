const message = '   If you are reading this, I want you to know that I miss our night calls.  I miss watching you play your games.  I miss you.  But we both have lives to go on with.  It would be selfish to keep you awake when you need your sleep for work.\n   I assumed you were busy when you did not reply, and that is fine.  During these past days, I realized I cannot change who I am to be someone you might like.  I can only be me.  I am learning to see my own value and improve for myself.\n   I did not devote an entire week to this project just to impress you.  You know, we both live in completely different worlds, but I cannot hide my feelings.  Because I have finally learned to love the person I am, I have found the strength to love the person you are.  I am choosing to speak because I refuse to be silent about my own heart.\n   Speaking up lifts a huge weight off my shoulders.  I want you to know that my feelings for you are real.  It is fine if you do not feel the same, but there is one thing I want you to do, and it is to not be ignorant of your own heart.  I will hold onto these feelings for you until I have fully moved on.  When the time comes, I will let you know and never disturb your peace again.\n\nFor Ian';

function showLetter() {
    document.getElementById("introText").style.opacity = 0;
    document.querySelector(".button").style.display = "none";

    const images = document.querySelectorAll(".introPic");
    images.forEach(img => {
        const idNum = parseInt(img.id.split('_')[1]);
        if (idNum <= 6) {
            img.classList.add("slide-left");
        } else {
            img.classList.add("slide-right");
        }
    });

    setTimeout(() => {
        document.getElementById("introText").style.display = "none";
        images.forEach(img => {
            img.style.display = "none";
        });

        const fishes = document.querySelectorAll(".bgWater");
        fishes.forEach(fish => {
            fish.classList.add("water-active");
        });

        const letterBox = document.getElementById("letterBox");
        const typedText = document.getElementById("typedText");
        
        letterBox.style.display = "block";
        let i = 0;

        function typeWriter() {
            if (i < message.length) {
                // This checks if the current part of the text is "For Ian"
                const remainingText = message.substring(i);
                
                if (remainingText.startsWith("For Ian")) {
                    // Create a span to force alignment and prevent the word break
                    const signature = '<span style="display: block; text-align: right; width: 100%;">For Ian</span>';
                    typedText.innerHTML += signature;
                    i = message.length; // Stop the loop since we reached the end
                } else {
                    typedText.innerHTML += message.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30);
                }
            }
        }
        typeWriter();
    }, 1200);
}