const message = '   Hello to Ian, I just want to say that you are being too nonchalant but that is fine.\n   Also just to let you know again, I appreciated your kindness of letting me be your friend. I am happy to be just friend.\n.  The feeling of liking you felt like nightmare. Since you have always been such a jerk, liking you would just be a mistake. Don't even talk about loving you, that would have been a real nightmare. Thank god.\n   That is all, I hope you understand what I am saying now and fuck you.\n\nFor Ian';

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
