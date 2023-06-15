import ElementCreator from '../../util/element-creator';
import View from '../view';
import './header.css';

const CssClasses = {
    HEADER: 'header',
    NAV: 'nav'
};
export default class HeaderView extends View{
 constructor(){
    const params = {
        tag:"hedaer",
        classNames:[CssClasses.HEADER], 

        textContent: "",
        callback: null, 
    }
    super(params);
    this.configureView();
 }

 configureView(){
    const paramsNav = {
        tag:"nav",
        classNames:[CssClasses.NAV], 

        textContent: "",
        callback: null, 
    }
    const  creatorNav = new ElementCreator(paramsNav)

    this.elementCreator.addInnerElement(creatorNav);
 }

}