const idioms = [
  {
    text: ['心有定境', '不住因果'],
    interpretation: 'fdsa',
    source: '道士下山',
  },
  {
    text: ['饮冰十年', '难凉热血'],
    interpretation: 'fdsa',
    source: '梁启超, 饮冰室文集',
  },
  {
    text: ['此心光明', '亦复何言'],
    interpretation: 'fdsa',
    source: '王阳明',
  },
  {
    text: ['浮舟沧海', '立马昆仑'],
    interpretation: 'fdsa',
    source: '周恩来',
  },
  {
    text: ['年华向晚', '岁月沉香'],
    interpretation: 'fdsa',
  },
  {
    text: ['功名半纸', '风雪千山'],
    interpretation: 'fdsa',
    source: '殿前欢',
  },
  {
    text: ['实事求是', '格物致知'],
    interpretation: 'Seek truth from facts.',
    source: '',
  },
  {
    text: ['万古长空', '一朝风月'],
    interpretation: 'mind the fleeting moments rather than eternal narratives.',
    source: '崇慧禅师',
  },
  {
    text: ['不以物喜', '不以己悲'],
    interpretation:
      "avoid being emotionally affected by external objects or one's own condition.",
    source: '范仲淹, 岳阳楼记',
  },
  {
    text: ['苍山负雪', '明烛天南'],
    interpretation:
      'snow-capped mountains and the Southern sky lit by the reflection from the snow.',
    source: '姚鼐, 登泰山记',
  },
  {
    text: ['西湖月满', '东浙潮来'],
    interpretation:
      'full moon over the West Lake, tides coming in from the East.',
  },
  {
    text: ['君臣一梦', '今古空名'],
    interpretation: 'fdsa',
    source: '苏轼',
  },
  {
    text: ['灯华易散', '不再惊奇'],
    interpretation: 'fdsa',
  },
  {
    text: ['明月大江', '清风山冈'],
    interpretation: 'fdsa',
    source: '金庸, 倚天屠龙记',
  },
  {
    text: ['随心所欲', '随遇而安'],
    interpretation: 'fdsa',
  },
  {
    text: ['一切皆流', '无物常驻'],
    interpretation: 'Nothing lasts, nothing stays the same.',
    source: 'Heraclitus',
  },
  {
    text: ['念念不忘', '必有回响'],
    interpretation: 'fdsa',
    source: '一代宗师',
  },
  {
    text: ['虹销雨霁', '彩彻云衢'],
    interpretation: 'fdsa',
    source: '王勃, 滕王阁序',
  },
  {
    text: ['千手百眼', '天下人间'],
    interpretation: 'fdsa',
    source: 'Genshin Impact',
  },
  {
    text: '沧海桑田',
    interpretation: "long time's past, everything has changed.",
  },
  {
    text: '水到渠成',
    interpretation: 'fdsa',
    source: '苏轼',
  },
  {
    text: '朱颜辞镜',
    interpretation: 'fdsa',
    source: '王国维',
  },
  {
    text: '溪山无尽',
    interpretation: 'fdsa',
  },
  {
    text: '人生海海',
    interpretation: 'fdsa',
    source: 'fdsa',
  },
  {
    text: '将暮未暮',
    interpretation: 'fdsa',
    source: '席慕蓉',
  },
  {
    text: '盘尼西林',
    interpretation: 'fdsa',
  },
  {
    text: '满载星海',
    interpretation: 'fdsa',
  },
  {
    text: '道法自然',
    interpretation: 'fdsa',
    source: '老子',
  },
  {
    text: '胸有丘壑',
    interpretation: 'fdsa',
  },
  {
    text: '循规蹈矩',
    interpretation: 'fdsa',
  },
  {
    text: '前程似锦',
    interpretation: 'fdsa',
  },
  {
    text: '中正仁和',
    interpretation: 'fdsa',
    source: '雍正',
  },
  {
    text: '与神同行',
    interpretation: 'fdsa',
    source: 'MTO',
  },
  {
    text: '和光同尘',
    interpretation: 'fdsa',
    source: 'fdsa',
  },
  {
    text: '举世盛名',
    interpretation: 'fdsa',
  },
  {
    text: '天下无双',
    interpretation: 'fdsa',
  },
  {
    text: '与谁同坐',
    interpretation: 'fdsa',
    source: '苏轼',
  },
  {
    text: '江流日下',
    interpretation: 'fdsa',
    source: 'fdsa',
  },
  {
    text: '华亭鹤唳',
    interpretation: 'fdsa',
    source: 'fdsa',
  },
  {
    text: '红炉点雪',
    interpretation: 'fdsa',
    source: 'fdsa',
  },
  {
    text: '私人记忆',
    interpretation: 'a private memory',
  },
  {
    text: '宏大叙事',
    interpretation: 'a grand narrative',
  },
  {
    text: '一来二去',
    interpretation: 'fdsa',
  },
  {
    text: '急景凋年',
    interpretation: 'fdsa',
  },
  {
    text: '试上超然',
    interpretation: 'fdsa',
    source: '苏轼',
  },
  {
    text: '倥偬一生',
    interpretation: 'fdsa',
  },
  {
    text: '金色传说',
    interpretation: 'a golden legend',
  },
  {
    text: '国士无双',
    interpretation: 'fdsa',
  },
  {
    text: '君子不器',
    interpretation: 'fdsa',
  },
  {
    text: '尽人事听天命',
    interpretation: 'fdsa',
  },
  {
    text: '应该就是现在',
    interpretation: 'fdsa',
    source: '伍佰, Last Dance',
  },
  {
    text: '想好了就去做',
    interpretation: 'fdsa',
    source: '上海女子图鉴',
  },
  {
    text: '君子之交淡如水',
    interpretation: 'fdsa',
    source: '庄子',
  },
  {
    text: '平平淡淡才是真',
    interpretation: 'fdsa',
  },
  {
    text: '人会来就会离开',
    interpretation: 'fdsa',
    source: '路过人间',
  },
  {
    text: '虽千万人吾往矣',
    interpretation: 'fdsa',
    source: '孟子',
  },
  {
    text: '一切都和后来不同',
    interpretation: 'fdsa',
  },
  {
    text: '在此世的星空之外',
    interpretation: 'fdsa',
    source: 'Genshin Impact',
  },
  {
    text: '热爱可抵岁月蹉跎',
    interpretation: 'fdsa',
  },
  {
    text: '若你困于无风之地',
    interpretation: 'fdsa',
    source: 'Genshin Impact',
  },
  {
    text: '一切都是最好的安排',
    interpretation: 'fdsa',
  },
  {
    text: '在盛大的夏天里席卷而过',
    interpretation: 'fdsa',
  },
  {
    text: '每个人只能陪你走一段路',
    interpretation: 'fdsa',
    source: '贾樟柯, 山河故人',
  },
  {
    text: ['善变惊惶之人', '雨落狂流之夜'],
    interpretation: 'fdsa',
    source: '江南, 龙族',
  },
];
