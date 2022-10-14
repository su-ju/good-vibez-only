let hoursRunning = false;

const dragElement = () => {
  const elmnt = document.getElementById('my-game');

  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  document.getElementById('my-game-header').onmousedown = (e) => {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };
    document.onmousemove = (e) => {
      e = e || window.event;
      e.preventDefault();

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      let top = elmnt.offsetTop - pos2;
      let left = elmnt.offsetLeft - pos1;

      if (left < -750) left = -750;
      if (left > window.innerWidth - 50) left = window.innerWidth - 50;

      if (top < 0) top = 0;
      if (top > window.innerHeight - 50) top = window.innerHeight - 50;

      elmnt.style.top = `${top}px`;
      elmnt.style.left = `${left}px`;
    };
  };
};

const toggleModal = () => {
  const modal = document.getElementById('my-welcome');
  modal.className = modal.className.includes('my-hidden')
    ? 'my-modal my-visible'
    : 'my-modal my-hidden';
};

const toggleGame = () => {
  const modal = document.getElementById('my-game-container');
  modal.className = modal.className.includes('my-hidden')
    ? 'my-modal my-visible'
    : 'my-modal my-hidden';

  if (!hoursRunning) {
    GameMaker_Init();
    hoursRunning = true;
  }
};

document.getElementById('my-game-button').addEventListener('click', toggleGame);
document
  .getElementById('24-hours-button')
  .addEventListener('click', toggleGame);

document
  .getElementById('my-start-button')
  .addEventListener('click', toggleModal);

document
  .getElementById('my-close-button')
  .addEventListener('click', toggleModal);

dragElement();
