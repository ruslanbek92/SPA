import ElementCreator from '../../util/element-creator';
import IndexView from '../main/index/index-view';
import View from '../view';
import './header.css';
import LinkView from './link/link-view';
import ProductView from '../main/product/product-view';
const CssClasses = {
    HEADER: 'header',
    NAV: 'nav'
};
const NamePages = {
  INDEX: 'ГЛАВНАЯ',
  PRODUCT : 'КАРТОЧКИ'
}
const START_PAGE_INDEX = 0;
const linkElements = [];
export default class HeaderView extends View{
 constructor(mainComponent){
    const params = {
        tag:"header",
        classNames:[CssClasses.HEADER], 

        textContent: "",
        callback: null, 
    }
    super(params);
    this.configureView(mainComponent);
 }

 configureView(mainComponent){
    const paramsNav = {
        tag:"nav",
        classNames:[CssClasses.NAV], 

        textContent: "",
        callback: null, 
    }

    const  creatorNav = new ElementCreator(paramsNav)

    this.elementCreator.addInnerElement(creatorNav);
    const pages = this.getPages(mainComponent)
   
    pages.forEach((page, index)=>{
        const linkElement = new LinkView(page, linkElements);
        creatorNav.addInnerElement(linkElement.getHTMLElement());
        linkElements.push(linkElement);
        if(index === START_PAGE_INDEX) {
            page.callback();
            linkElement.setSelectedStatus()
        };
    });
 }

  getPages(mainComponent){
    const indexView = new IndexView();
    const productView = new ProductView();

     const pages = [
        {
            name:NamePages.INDEX,
            callback: ()=>mainComponent.setContent(indexView)
        },
        {
            name:NamePages.PRODUCT,
            callback: ()=>mainComponent.setContent(productView)
        }
    ]
   return pages;
  }
}