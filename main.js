const idioms = [
  ['心有定境', '不住因果'],
  ['饮冰十年', '难凉热血'],
  ['此心光明', '亦复何言'],
  ['浮舟沧海', '立马昆仑'],
  ['年华向晚', '岁月沉香'],
  ['万古长空', '一朝风月'],
  ['不以物喜', '不以己悲'],
  ['苍山负雪', '明烛天南'],
  ['西湖月满', '东浙潮来'],
  ['君臣一梦', '今古空名'],
  ['灯华易散', '不再惊奇'],
  '朱颜辞镜',
  '溪山无尽',
  '人生海海',
  '将暮未暮',
  '盘尼西林',
  '满载星海',
  '道法自然',
  '应该就是现在',
];

// reorder idioms for every load
const shuffle = (array) => {
  let modifiedArray = array.slice();
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [modifiedArray[currentIndex], modifiedArray[randomIndex]] = [
      modifiedArray[randomIndex],
      modifiedArray[currentIndex],
    ];
  }

  return modifiedArray;
};

const increaseStroke = (element) => {
  const stroke = element.getAttribute('stroke-width');
  element.setAttribute('stroke-width', parseFloat(stroke) + 0.05);
};

const addIdiomsToContainer = (idioms, container) => {
  shuffle(idioms).forEach((idiom) => {
    let div = document.createElement('div');

    div.classList.add('idiom-row');
    div.onclick = (element) => {
      increaseStroke(element.target);
    };

    div.innerHTML = `
      <svg viewbox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" width="100%" height="200px" preserveAspectRatio="none">
        <text x="0" y="15" textlength="100%" lengthadjust="spacingAndGlyphs" stroke="green" stroke-width="0">${idiom}</text>
      </svg>
    `;
    container.appendChild(div);
  });
};

const forwardContainer = document.querySelector('#forward');
const backwardContainer = document.querySelector('#backward');
addIdiomsToContainer(idioms, forwardContainer);
addIdiomsToContainer(idioms, backwardContainer);

// randomize position on page when reloading
const scrollTop =
  Math.random() * (forwardContainer.clientHeight - window.innerHeight);
window.onload = function () {
  setTimeout(function () {
    window.scrollTo({ top: scrollTop });
  }, 0);
};

// scroll backwardContainer in reverse direction
window.addEventListener('scroll', (e) => {
  backwardContainer.style.bottom = `-${window.scrollY}px`;
});
