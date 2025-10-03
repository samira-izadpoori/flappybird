window.onload = function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const birdImg = new Image();
  const topPipeImg = new Image();
  const bottomPipeImg = new Image();

  birdImg.src = "./flappybird.png";
  topPipeImg.src = "./toppipe.png";
  bottomPipeImg.src = "./bottompipe.png";

  function tryDraw() {
    if (!birdImg.complete || !topPipeImg.complete || !bottomPipeImg.complete) {
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background color (sky)
    ctx.fillStyle = "#87ceeb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const birdWidth = 60;
    const birdHeight = 45;
    const birdX = 140;
    const birdY = (canvas.height - birdHeight) / 2;
    ctx.drawImage(birdImg, birdX, birdY, birdWidth, birdHeight);

    const pipeWidth = 80;
    const pipeGap = 140;
    const pipesX = 360;

    const topPipeHeight = 300;
    const topPipeY = (canvas.height - pipeGap) / 2 - topPipeHeight;
    ctx.drawImage(topPipeImg, pipesX, topPipeY, pipeWidth, topPipeHeight);

    const bottomPipeHeight = 300;
    const bottomPipeY = (canvas.height + pipeGap) / 2;
    ctx.drawImage(
      bottomPipeImg,
      pipesX,
      bottomPipeY,
      pipeWidth,
      bottomPipeHeight
    );
  }

  birdImg.addEventListener("load", tryDraw);
  topPipeImg.addEventListener("load", tryDraw);
  bottomPipeImg.addEventListener("load", tryDraw);

  tryDraw();
};
