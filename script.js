// reorder idioms for every load
const shuffle = (array) => {
  let modifiedArray = array.slice();
  return modifiedArray.sort(() => Math.random() - 0.5);
};

// increase stroke width of the text
const increaseStroke = (element) => {
  const stroke = element.getAttribute('stroke-width');
  element.setAttribute('stroke-width', parseFloat(stroke) + 0.2);
};

const addIdiomsToContainer = (idioms, container) => {
  shuffle(idioms).forEach((idiom) => {
    let parent = document.createElement('div');
    parent.classList.add('idiom-row-parent');

    let div = document.createElement('div');
    div.classList.add('idiom-row');
    div.classList.add('noselect');

    div.onclick = (element) => {
      increaseStroke(element.target);

      document.querySelector('#interpreter').style.visibility = 'visible';
      document.querySelector('#interpreter').style.opacity = '1';

      document.querySelector('#interpreter-text').innerHTML = idiom.text;
      document.querySelector('#interpreter-interpretation').innerHTML =
        idiom.interpretation ? `${idiom.interpretation}` : '';
      document.querySelector('#interpreter-source').innerHTML = idiom.source
        ? `${idiom.source}`
        : '';
    };

    div.innerHTML = `
      <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="200px" preserveAspectRatio="none">
        <text x="0" y="75" lengthadjust="spacingAndGlyphs" textlength="100%" stroke="#d88585" stroke-width="0">
          ${idiom.text}
        </text>
      </svg>
    `;

    parent.appendChild(div);
    container.appendChild(parent);
  });
};

document.querySelector('#interpreter-close').onclick = () => {
  document.querySelector('#interpreter').style.visibility = 'hidden';
  document.querySelector('#interpreter').style.opacity = '0';
};

const forwardContainer = document.querySelector('#forward');
const backwardContainer = document.querySelector('#backward');
addIdiomsToContainer(idioms, forwardContainer);
addIdiomsToContainer(idioms, backwardContainer);

// randomize position on page when reloading
const scrollTop =
  Math.random() * (forwardContainer.clientHeight - window.innerHeight);
window.scrollTo({ top: scrollTop });

// remove loading screen after 3 seconds
setTimeout(() => {
  document.querySelector('#loading').style.opacity = 0;
  document.querySelector('#loading').style.zIndex = -100;
  // document.querySelector('#loading').remove();
}, 1000);

// scroll backwardContainer in reverse direction and infinite scroll
window.addEventListener('scroll', (e) => {
  backwardContainer.style.bottom = `-${window.scrollY}px`;
  if (window.scrollY >= forwardContainer.clientHeight - window.innerHeight) {
    window.scrollTo({ top: 5 });
  } else if (window.scrollY == 0) {
    window.scrollTo({
      top: forwardContainer.clientHeight - window.innerHeight - 5,
    });
  }
});

// limit scroll amount for every 1 second
// let scrolledAmount = window.scrollY;
// let timeout;

// window.addEventListener('scroll', (e) => {
//   let scrollingAmount = window.scrollY;
//   let scrollMax = 300;

//   // Scrolling down
//   if (scrollingAmount > scrolledAmount + scrollMax) {
//     console.log('No scroll allowed!');

//     // "force" scroll positioin
//     window.scrollY = scrolledAmount + scrollMax;

//     // a timeout to prevent scrolling for at least 2 seconds
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       console.clear();
//       console.log('ok, you can scroll again.');

//       // Update the scroll limit
//       scrolledAmount = scrolledAmount + scrollMax;
//     }, 1000);
//   }
// });
