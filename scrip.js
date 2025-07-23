const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  }

  moveStars();
}

function moveStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].y += stars[i].d;
    if (stars[i].y > canvas.height) {
      stars[i].y = 0;
      stars[i].x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawStars, 30);
