// Theme switcher and simple interactions
const switchBtn = document.getElementById('switch-theme-button');
const body = document.body;
const music = document.getElementById('music');

function switchTheme() {
  const isDark = body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme', !isDark);
  body.setAttribute(
    'aria-label',
    `O site está utilizando o tema ${isDark ? 'dark' : 'light'}`,
  );
  // switch music source if needed
  if (music) {
    music.pause();
    music.querySelector('source').src = isDark
      ? 'assets/musics/inverted-world.mpeg'
      : 'assets/musics/normal-world.mpeg';
    music.load();
    music.play().catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (switchBtn) {
    switchBtn.addEventListener('click', switchTheme);
  }
});
