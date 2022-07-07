import React from 'react'
import ReactDOM from 'react-dom/client'
import RepeaterContainer from './components/Repeater/RpeaterContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
let itemsA = [{icon: "https://static.wixstatic.com/media/37d031_e73979b40b734e039938ddd1e5995886~mv2.png", iconName: "name1"},
              {icon: "https://static.wixstatic.com/media/37d031_e73979b40b734e039938ddd1e5995886~mv2.png", iconName: "name2"},
              {icon: "https://static.wixstatic.com/media/37d031_e73979b40b734e039938ddd1e5995886~mv2.png", iconName: "name3"},
              {icon: "https://static.wixstatic.com/media/37d031_e73979b40b734e039938ddd1e5995886~mv2.png", iconName: "name4"}
              ]
let itemsB = [{title: "one",description: "sdsd", price: 112, priceType: 120},
              {title: "two",description: "sdsd", price: 112, priceType: 120}]
let titleA = "תוספות"
let titleB = "תוספות בתשלום"
let titleC = "PDF כותרת לקובץ ה"
let PdfFile = "tofes-101.pdf"

root.render(
  <React.StrictMode>
    <RepeaterContainer itemsA={itemsA} itemsB={itemsB} titleA={titleA} titleB={titleB} titleC={titleC} PdfFile={PdfFile}/>
  </React.StrictMode>
);