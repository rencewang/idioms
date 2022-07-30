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

const idiomsContainer = document.querySelector('#idioms');
idioms.forEach((idiom) => {
  let div = document.createElement('div');
  div.innerHTML = `
    <svg viewbox="0 0 100 20" xmlns="http://www.w3.org/2000/svg" width="100%" height="200px" preserveAspectRatio="none">
      <text x="0" y="15" textlength="100%" lengthadjust="spacingAndGlyphs">${idiom}</text>
    </svg>
  `;
  idiomsContainer.appendChild(div);
});

const scrollTop = Math.random() * (test.clientHeight - window.innerHeight);

window.onload = function () {
  setTimeout(function () {
    window.scrollTo({ top: scrollTop });
  }, 0);
};
