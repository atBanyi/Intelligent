/*
模块单独暴露每一张图片
* CeleBrity
export {default as DuaLipa} from  '../image/Celebrity/DuaLipa.gif'
*/
export const imageList1=[
  [
    {
    id:1,
    alt:'111',
    src:require('../image/Productivity/FinancialAnalyst.jpg'),
  },
    {
      id:1,
      alt:'111',
      src:require('../image/Productivity/HelpfulAssistant.gif'),
    },
    {
      id:1,
      alt:'111',
      src:require('../image/Productivity/MarketingManager.jpg'),
    },
  ]
]
export const imagesList = [
  /** Productivity */
  [
    require('../image/Productivity/FinancialAnalyst.jpg'),
    require('../image/Productivity/HelpfulAssistant.gif'),
    require('../image/Productivity/MarketingManager.jpg'),
    require('../image/Productivity/SoftwareEngineer.jpg'),

  ],
  /** CeleBrity */
  [
    require('../image/Celebrity/StevenSpielberg.gif'),
    require('../image/Celebrity/RayCharles.jpg'),
    require('../image/Celebrity/JockoWillink.jpg'),
    require('./Celebrity/DuaLipa.gif'),
  ],
  /** History */
  [
    require('./History/Scocrates.gif'),
    require('./History/NapoleonBonaparte.jpg'),
    require('./History/LeonardoDavinci.jpg'),
    require('./History/AlanTuring.jpg'),
  ],
  /** Wellness&LifeStyle*/
  [
    require('./Wellness&LifeStyle/FlowerExpert.jpg'),
    require('./Wellness&LifeStyle/HoroscopeReader.gif'),
    require('./Wellness&LifeStyle/InteriorDesigner.gif'),
    require('./Wellness&LifeStyle/MichelinStarChef.jpg'),
    require('./Wellness&LifeStyle/Psychologist.jpg'),
  ],
];
// webPack可以使用
// const requireContext = require.context("./images", true, /^\.\/.*\.png$/);
// const images = requireContext.keys().map(requireContext);
// console.log(images);

