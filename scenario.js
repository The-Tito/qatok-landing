const outcomes = {
  avisar: 'Dos entregas llegan a tiempo y la tercera se reprograma. Deja por escrito la nueva fecha.',
  callar: 'Las tres entregas llegan incompletas. Avisar a tiempo permite reorganizar el trabajo.',
};

const scene = document.querySelector('#scene p');
const choices = document.querySelectorAll('[data-choice]');
for (const button of choices) {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    scene.textContent = outcomes[button.dataset.choice];
    for (const choice of choices) {
      choice.setAttribute('aria-pressed', String(choice === button));
    }
  });
}
