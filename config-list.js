const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: '志祺七七：強者我朋友',
    feedID: 'shasha77-interview',
    homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
    thumbnailBorderColor: '0000FF',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.endsWith('｜志祺七七')) },
      (item) => { return (item.title.indexOf('《強者我朋友》') > -1) },
      (item) => { return (item.title.indexOf(' ft. ') > -1) },
      (item) => { return (item.title.indexOf('《今天不讀稿》') === -1) },
    ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    options: {
      maxItems: 10
    }
  },
  {
    title: '志祺七七：今天不讀稿',
    feedID: 'shasha77-talk',
    thumbnailBorderColor: 'FF00FF',
    homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.endsWith('｜志祺七七')) },
      (item) => { return (item.title.indexOf('《強者我朋友》') === -1) },
      (item) => { return (item.title.indexOf(' ft. ') === -1) },
      (item) => { return (item.title.indexOf('《今天不讀稿》') > -1) },
    ], // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    options: {
      maxItems: 10
    }
  },
  {
    title: '公視P#新聞實驗室',
    feedID: 'Ppsharp_newslab',
    homepageURL: 'https://www.youtube.com/channel/UCMDcOT4z7GS1SRGG2g7z43g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '我的學習筆記',
    feedID: 'mynotebooks',
    homepageURL: 'https://www.youtube.com/channel/UCAS8QqEyGGH71xYgFzNSbuw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '瑩真律師',
    feedID: 'LawyerAngela',
    homepageURL: 'https://www.youtube.com/channel/UCLzWMcpNlhHo0c0yOyWksvQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '關鍵評論網：國際話題',
    feedID: 'TheNewsLens',
    homepageURL: 'https://www.youtube.com/channel/UC4bokYuSrVGpI6_WYv7Gdbw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('｜國際大風吹') > -1) || (item.title.indexOf('｜國際值日生') > -1)) }
    ],
    options: {
      maxItems: 10
    }
  },
  {
    title: '淇食很科學',
    feedID: 'HiThisIsAchi',
    homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '叉雞說故事',
    feedID: 'bbqporkchicken',
    homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '異色檔案說故事',
    feedID: 'mystery2018',
    homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
    options: {
      maxItems: 10
    }
  },
  {
    title: '斐姨所思【阿姨想知道】',
    feedID: 'fanamericantime-interview',
    homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    thumbnailBorderColor: '0000FF',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
    itemFilters: [
      ItemFiltersPreset.between30minTo180Min,
      (item) => { return (item.title.indexOf('斐姨所思【阿姨想知道】') > -1) },
    ],
    options: {
      maxItems: 3
    }
  },

]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '文字與資本主義 冏冏',
//     feedID: 'Kyontw828',
//     homepageURL: 'https://www.youtube.com/channel/UC_xVdv15MR17rQf-nUl92MA',
//     itemFilters: ItemFiltersPreset.between6minTo60Min,
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
