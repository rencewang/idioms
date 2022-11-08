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
  ['虹销雨霁', '彩彻云衢'],
  ['千手百眼', '天下人间'],
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
  '与神同行',
  '和光同尘',
  '试上超然',
  '举世盛名',
  '天下无双',
  '与谁同坐',
  '江流日下',
  '私人记忆',
  '宏大叙事',
  '一来二去',
  '急景凋年',
  '金色传说',
  '国士无双',
  '君子不器',
  '尽人事听天命',
  '应该就是现在',
  '想好了就去做',
  '君子之交淡如水',
  '平平淡淡才是真',
  '人会来就会离开',
  '虽千万人吾往矣',
  '一切都和后来不同',
  '在此世的星空之外',
  '热爱可抵岁月蹉跎',
  '若你困于无风之地',
  '一切都是最好的安排',
  '在盛大的夏天里席卷而过',
  '每个人只能陪你走一段路',
  ['善变惊惶之人', '雨落狂流之夜'],
];

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
      // document.querySelector('#interpreter').style.display = 'block';

      document.querySelector('#interpreter').style.visibility = 'visible';
      document.querySelector('#interpreter').style.opacity = '1';
      document.querySelector('#interpreter-text').innerHTML = idiom;
    };

    div.innerHTML = `
      <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="200px" preserveAspectRatio="none">
        <text x="0" y="75" lengthadjust="spacingAndGlyphs" textlength="100%" stroke="#ffd102" stroke-width="0">
          ${idiom}
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

// stop animation on forwardContainer when user click on #dot
const dot = document.querySelector('#dot');
dot.setAttribute('data-after', 'stop');
dot.onclick = () => {
  if (forwardContainer.style.animationPlayState == 'running') {
    dot.setAttribute('data-after', 'start');
    forwardContainer.style.animationPlayState = 'paused';
    forwardContainer.style.webkitAnimationPlayState = 'paused';
  } else {
    dot.setAttribute('data-after', 'stop');
    forwardContainer.style.animationPlayState = 'running';
    forwardContainer.style.webkitAnimationPlayState = 'running';
  }
};
