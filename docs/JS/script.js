const toggletThemeElement = document.getElementById('toggle-theme');
const toggleIconElement = document.getElementById('toggle-icon');
const toggleTextElement = document.getElementById('toggle-text');
const colorsElement = document.getElementById('colors');
const gobackElement = document.getElementById('goback');
const selectColorsElement = document.getElementById('selectColors');
const unitadKingdomFlagElement = document.getElementById('unitedkingdomFlag');
const germanFlagElement = document.getElementById('germanFlag');
const spainFlagElement = document.getElementById('spainFlag');
const paragraphElement = document.getElementById('paragraph');
const logoElement = document.querySelectorAll('.logo');


const colorStyle = document.documentElement.style;
const defaultLenguage = 'Soy Ramon Saavedra, un apasionado desarrollador frontend con una sed constante de conocimiento y creatividad'

const childrenNod = colorsElement.childNodes;
const newColor = 'hsl(0, 0 %, 0 %)';

toggletThemeElement.addEventListener('click', (e) => {
  document.body.classList.toggle('dark');
  if (toggleIconElement.src.includes('moon-regular.svg')) {
    toggleIconElement.src = 'assets/images/sun-regular.svg'
    toggleTextElement.textContent = 'Light Mode'
  } else {
    toggleIconElement.src = 'assets/images/moon-regular.svg'
    toggleTextElement.textContent = 'Dark Mode'
  }
});
const children = Array.from(document.querySelectorAll("#colors > div"));


const toggleColors = (showColors) => {
  colorsElement.classList.toggle('colors', !showColors);
  colorsElement.classList.toggle('colorsdisplay', showColors);

  children.forEach(child => {
    child.classList.toggle('colors__item', showColors);
    child.classList.toggle('pointer-none', !showColors);
  });

  selectColorsElement.textContent = showColors ? 'Select color' : '';
  gobackElement.textContent = showColors ? 'Go back' : '';
  document.documentElement.style.setProperty('--primary-color', showColors ? newColor : '');
};

colorsElement.addEventListener('click', () => {
  toggleColors(true)
});
goback.addEventListener('click', () => {
  toggleColors(false);
  children.forEach(child => {
    child.classList.add('pointer-none');
    document.documentElement.style.setProperty('--primary-color', newColor);
  });
});

colorsElement.addEventListener('click', (e) => {
  colorStyle.setProperty('--primary-color', e.target.dataset.color);
});
document.documentElement.style.setProperty('--primary-color', newColor);
// titleElement.style.color = `var(--primary-color)`;

const handleClick = (event) => {
  const clickedButton = event.target;
  const paragraphElement = document.getElementById('paragraph'); // Reemplaza 'miParrafo' con el ID correcto de tu párrafo

  switch (clickedButton.id) {
    case 'unitedkingdomFlag':
      paragraphElement.textContent = "I'm Ramon Saavedra, a passionate frontend developer with a constant thirst for knowledge and creativity";
      break;
    case 'germanFlag':
      paragraphElement.textContent = 'Ich bin Ramon Saavedra, ein leidenschaftlicher Frontend-Entwickler mit einem ständigen Durst nach Wissen und Kreativität';
      break;
    case 'spainFlag':
      paragraphElement.textContent = defaultLenguage;
      break;
    default:
      break;
  }
}

const buttonUnitedKingdom = document.getElementById('unitedkingdomFlag');
buttonUnitedKingdom.addEventListener('click', handleClick);

const buttonGerman = document.getElementById('germanFlag');
buttonGerman.addEventListener('click', handleClick);

const buttonSpain = document.getElementById('spainFlag');
buttonSpain.addEventListener('click', handleClick);

// logoElement.forEach((logos) => {
//   logos.addEventListener('click', (e) => {
//     console.log(e.target);

//     switch (true) {
//       case logos.classList.contains('htmllogo'):
//         experienceHTML.textContent = '5 months'
//         logoElement.style.transform = "translateY(-300px)";
//         break;
//       case logos.classList.contains('csslogo'):
//         experienceCss.textContent = '3 months'
//         break;
//       case logos.classList.contains('javascriptlogo'):
//         experienceJavaScript.textContent = '5 months'
//         break;
//       case logos.classList.contains('reactlogo'):
//         experienceReact.textContent = 'By learning'
//         break;
//     }
//   })
// })
