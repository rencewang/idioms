const idioms = [
  {
    text: ['心有定境', '不住因果'],
    interpretation:
      'With a settled mind, the karmatic forces, the ups and downs of life will no longer affect you',
    source: '道士下山',
  },
  {
    text: ['饮冰十年', '难凉热血'],
    interpretation:
      'Ten years of drinking ice water will not cool my hot blood',
    source: '梁启超, 饮冰室文集',
  },
  {
    text: ['此心光明', '亦复何言'],
    interpretation: 'This heart is golden, what more is there to say?',
    source: '王阳明',
  },
  {
    text: ['浮舟沧海', '立马昆仑'],
    interpretation:
      'Float in a boat on the sea, ride a horse up the Kunlun Mountains',
    source: '周恩来',
  },
  {
    text: ['年华向晚', '岁月沉香'],
    interpretation:
      'Approaching the end of life, but the years have been fragrant',
  },
  {
    text: ['功名半纸', '风雪千山'],
    interpretation:
      'Even with a little accomplishment, still have to face the wind and snow',
    source: '殿前欢',
  },
  {
    text: ['实事求是', '格物致知'],
    interpretation: 'Seek truth from facts',
  },
  {
    text: ['万古长空', '一朝风月'],
    interpretation: 'Mind the fleeting moments rather than eternal narratives',
    source: '崇慧禅师',
  },
  {
    text: ['不以物喜', '不以己悲'],
    interpretation:
      "Avoid being emotionally affected by external objects or one's own condition",
    source: '范仲淹, 岳阳楼记',
  },
  {
    text: ['苍山负雪', '明烛天南'],
    interpretation:
      'Snow-capped mountains and the Southern sky lit by the reflection from the snow',
    source: '姚鼐, 登泰山记',
  },
  {
    text: ['西湖月满', '东浙潮来'],
    interpretation:
      'Full moon over the West Lake, tides coming in from the East',
  },
  {
    text: ['君臣一梦', '今古空名'],
    interpretation:
      'The kings and queens are no more than dreams, leaving empty names',
    source: '苏轼',
  },
  {
    text: ['灯华易散', '不再惊奇'],
    interpretation: 'The light will fade, nothing will surprise me then',
  },
  {
    text: ['明月大江', '清风山冈'],
    interpretation:
      'What matters how strong the others are? The wind will blow the mountains, the moon will shine on the river',
    source: '金庸, 倚天屠龙记',
  },
  {
    text: ['随心所欲', '随遇而安'],
    interpretation: 'Do as your heart says, and be content with where you are',
  },
  {
    text: ['一切皆流', '无物常驻'],
    interpretation: 'All is liquid, nothing lasts, nothing stays the same',
    source: 'Heraclitus',
  },
  {
    text: ['念念不忘', '必有回响'],
    interpretation: "If you don't forget about it, it will come back to you",
    source: '一代宗师',
  },
  {
    text: ['虹销雨霁', '彩彻云衢'],
    interpretation: 'The rain has given up and the rainbow has just vanished',
    source: '王勃, 滕王阁序',
  },
  {
    text: ['千手百眼', '天下人间'],
    interpretation:
      'All the mortals under the thousand-hand, hundred-eyed divinity',
    source: 'Genshin Impact',
  },
  {
    text: ['长云山乱', '冷月溪明'],
    interpretation:
      'The cloud shrouded mountain in chaos, the moon in cold, the river in clarity',
    source: '苏轼',
  },
  {
    text: ['山河无恙', '烟火寻常'],
    interpretation: 'The landscapes in good health, the fireworks as normal',
  },
  {
    text: ['无用之用', '方为大用'],
    interpretation:
      'The useless is the most useful, the most useful is the useless',
    source: '庄子',
  },
  {
    text: ['光而不耀', '静水流深'],
    interpretation:
      'Be bright but not dazzling, know that still water runs deep',
    source: '老子',
  },
  {
    text: '沧海桑田',
    interpretation: "long time's past, everything has changed.",
  },
  {
    text: '水到渠成',
    interpretation: 'The aqueduct will form when water is there',
    source: '苏轼',
  },
  {
    text: '朱颜辞镜',
    interpretation:
      '朱颜辞镜花辞树: beauty will disappear from the mirror, flowers will depart the tree.',
    source: '王国维',
  },
  {
    text: '溪山无尽',
    interpretation: 'Streams and mountains without end',
  },
  {
    text: '人生海海',
    interpretation:
      'Life will come with turbulence and storms like the sea. If you cannot escape that, might as well enjoy the ride',
    source: '五月天',
  },
  {
    text: '将暮未暮',
    interpretation: 'About dusk, but not quite at dusk',
    source: '席慕蓉',
  },
  {
    text: '盘尼西林',
    interpretation: 'Penicillin',
  },
  {
    text: '满载星海',
    interpretation: 'Filled with the stars and the sea',
  },
  {
    text: '道法自然',
    interpretation: 'Following the rules of nature',
    source: '老子',
  },
  {
    text: '胸有丘壑',
    interpretation: 'Having the mountains and valleys in one’s heart',
  },
  {
    text: '循规蹈矩',
    interpretation: 'Stubbornly following the rules',
  },
  {
    text: '前程似锦',
    interpretation: 'Bright future ahead',
  },
  {
    text: '中正仁和',
    interpretation:
      '中庸正直，仁爱和谐: choosing the middle way, practicing integrity, respecting harmony.',
    source: '雍正',
  },
  {
    text: '与神同行',
    interpretation: 'To walk with God',
    source: 'MTO',
  },
  {
    text: '和光同尘',
    interpretation: "In harmony with the world, not showing one's edges",
    source: '老子',
  },
  {
    text: '举世盛名',
    interpretation: 'Worldwide reputation',
  },
  {
    text: '天下无双',
    interpretation: 'Nobody compares to you',
  },
  {
    text: '与谁同坐',
    interpretation:
      '与谁同坐? 明月清风我: to sit with whom? The moon, the wind, and I',
    source: '苏轼',
  },
  {
    text: '江流日下',
    interpretation: 'Situation worsening day by day',
    source: '孙中山',
  },
  {
    text: '华亭鹤唳',
    interpretation: 'What the victims loved in their lives',
    source: '刘义庆',
  },
  {
    text: '红炉点雪',
    interpretation: 'Instant understanding',
  },
  {
    text: '私人记忆',
    interpretation: 'Private memory',
  },
  {
    text: '宏大叙事',
    interpretation: 'Grand narrative',
  },
  {
    text: '一来二去',
    interpretation: 'After a while',
  },
  {
    text: '急景凋年',
    interpretation: 'Towards the end of a year; how fast time flies',
  },
  {
    text: '试上超然',
    interpretation: '试上超然台上看: climb up the Chaoran Platform and see',
    source: '苏轼',
  },
  {
    text: '倥偬一生',
    interpretation: 'An ordinary life amounting to nothing',
  },
  {
    text: '金色传说',
    interpretation: 'a golden legend',
  },
  {
    text: '国士无双',
    interpretation: 'Talent like no other',
  },
  {
    text: '君子不器',
    interpretation: 'A gentleman should not be a vessel',
  },
  {
    text: '知行合一',
    interpretation: 'Knowledge of the heart and action of the person are one',
    source: '王阳明',
  },
  {
    text: '温良恭俭',
    interpretation:
      '温良恭俭让: be kind, respectful, frugal, and let others go first',
    source: '孔子',
  },
  {
    text: '何夜无月',
    interpretation: 'Which night has no moon?',
    source: '苏轼',
  },
  {
    text: '尽人事听天命',
    interpretation: 'Do your best and leave the rest to fate',
  },
  {
    text: '应该就是现在',
    interpretation: 'It should be approximately now',
    source: '伍佰, Last Dance',
  },
  {
    text: '想好了就去做',
    interpretation: 'If you have thought it through, just go do it',
    source: '上海女子图鉴',
  },
  {
    text: '在此世的星空之外',
    interpretation: 'In the galaxy outside of this life',
    source: 'Genshin Impact',
  },
  {
    text: '君子之交淡如水',
    interpretation: 'The friendship of a gentleman should be as light as water',
    source: '庄子',
  },
  {
    text: '平平淡淡才是真',
    interpretation: 'Plain and simple should be the way',
  },
  {
    text: '人会来就会离开',
    interpretation: 'As people may come, so may they go',
    source: '路过人间',
  },
  {
    text: '虽千万人吾往矣',
    interpretation: 'Though there are millions of people, I will march ahead',
    source: '孟子',
  },
  {
    text: '一切都和后来不同',
    interpretation: 'Everything was different from what it became later',
  },
  {
    text: '热爱可抵岁月蹉跎',
    interpretation: 'Passion can compensate for the years',
  },
  {
    text: '若你困于无风之地',
    interpretation: 'If you are stuck in a windless place',
    source: 'Genshin Impact',
  },
  {
    text: '一切都是最好的安排',
    interpretation: 'Everything happens for the best',
  },
  {
    text: '在盛大的夏天里席卷而过',
    interpretation: 'All of it rolling through the grand summer',
  },
  {
    text: '每个人只能陪你走一段路',
    interpretation: 'Everyone can only be with you for a part of the way',
    source: '贾樟柯, 山河故人',
  },
  {
    text: ['善变惊惶之人', '雨落狂流之夜'],
    interpretation: 'Easily frightened person, stormy and rainy night',
    source: '江南, 龙族',
  },
];
