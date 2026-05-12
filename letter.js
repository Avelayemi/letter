const message = '   If  you  are  reading  this,  I  want  to  let  you  know  that  I  miss  talking  to  you  and  I  do  miss  you  a  lot.  It  made  me  wonder  if  you  feel  the  same.\n\n   I  assumed  that  maybe  you  were  just  busy,  so  I  decided  to  give  you  space.  I  realized  how  annoying  it  is  to  have  your  peace  disturbed.\n   I  also  realized  that  we  both  have  a  life  to  go  on  with,  so  please  spend  your  time  with  joy  and  enjoy  life.\n\n Even  though  I  do  have  many  things  to  say,  I  think  that  it  is  better  to  just  keep  them  to  myself,  to  keep  our  peace.\nI  hope  that  you  are  doing  well.\n\n\n\n                                                                          For Ian';

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
                typedText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }

        typeWriter();
    }, 1200);
}