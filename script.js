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
  ['饮冰十年', '难凉热血'],
  ['明月大江', '清风山冈'],
  ['随心所欲', '随遇而安'],
  ['一切皆流', '无物常驻'],
  ['念念不忘', '必有回响'],
  '沧海桑田',
  '水到渠成',
  '朱颜辞镜',
  '溪山无尽',
  '人生海海',
  '将暮未暮',
  '盘尼西林',
  '满载星海',
  '道法自然',
  '胸有丘壑',
  '沧海桑田',
  '水到渠成',
  '人生海海',
  '循规蹈矩',
  '前程似锦',
  '中正仁和',
  '应该就是现在',
  '君子之交淡如水',
  '平平淡淡才是真',
  '一切都是最好的安排',
  '想好了就去做',
  '在盛大的夏天里席卷而过',
  '一切都和后来不同',
  '人会来就会离开',
  '每个人只能陪你走一段路',
  '热爱可抵岁月蹉跎',
  '若你困于无风之地',
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

// increase stroke width of the text
const increaseStroke = (element) => {
  const stroke = element.getAttribute('stroke-width');
  element.setAttribute('stroke-width', parseFloat(stroke) + 0.2);
};

const addIdiomsToContainer = (idioms, container) => {
  shuffle(idioms).forEach((idiom) => {
    let div = document.createElement('div');

    div.classList.add('idiom-row');
    div.classList.add('noselect');
    div.onclick = (element) => {
      increaseStroke(element.target);
    };

    div.innerHTML = `
      <svg viewbox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" width="100%" height="200px" preserveAspectRatio="none">
        <text x="0" y="15" textlength="100%" lengthadjust="spacingAndGlyphs" stroke="#3d5af1" stroke-width="0">${idiom}</text>
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
  if (window.scrollY >= forwardContainer.clientHeight - window.innerHeight) {
    window.scrollTo({ top: 0 });
  } else if (window.scrollY == 0) {
    window.scrollTo({
      top: forwardContainer.clientHeight - window.innerHeight,
    });
  }
});
