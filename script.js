let tl = gsap.timeline(
    {
        defaults: {
            ease: "SlowMo.easeOut"
        }
    }
);
tl.to("#create", {
    y:'0%',
    duration: 1,
    stagger: 0.3
})

tl.to(".main", {
    y:'100%',
    duration: 0.5,
    delay: 0.5
})
tl.fromTo(".btn",{
    opacity:0},
    {opacity: 1,
    delay: 0.4,
})

let popup = document.getElementById('popup');
let popupOpen = document.getElementById('openpopup');
let fireworks = document.getElementById('fireworks');

//open popup
function openPopup(){
    popup.classList.add("open-popup");
}
popupOpen.addEventListener('click', openPopup);


//close popup
function confettis() {
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250); 
}
fireworks.addEventListener('click', confettis);
