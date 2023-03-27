const video = document.createElement('video');

const leftPage = document.querySelector(".page-left");
const rightPage = document.querySelector(".page-right");

function openPages() {
  leftPage.classList.add("open");
  rightPage.classList.add("open");
}

function closePages() {
  leftPage.classList.remove("open");
  rightPage.classList.remove("open");
}


const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const colors = ['#FF6138', '#FFFF9D', '#BEEB9F', '#79BD8F', '#00A388'];

      let circles = [];

      function Circle(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        this.draw = function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
          ctx.fillStyle = this.c;
          ctx.fill();
        }
        this.update = function() {
            this.x += (Math.random() - 0.5) * 4;
            this.y += (Math.random() - 0.5) * 4;
  
            if (this.x > canvas.width + this.r) {
              this.x = -this.r;
            } else if (this.x < -this.r) {
              this.x = canvas.width + this.r;
            }
  
            if (this.y > canvas.height + this.r) {
              this.y = -this.r;
            } else if (this.y < -this.r) {
              this.y = canvas.height + this.r;
            }
          }
        }
        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
    
            for (let i = 0; i < 100; i++) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              const r = Math.random() * 50;
              const c = colors[Math.floor(Math.random() * colors.length)];
              circles.push(new Circle(x, y, r, c));
            }
    
            animate();
          }
    
          function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
    
            circles.forEach(circle => {
              circle.update();
              circle.draw();
            });
          }
    
          init();