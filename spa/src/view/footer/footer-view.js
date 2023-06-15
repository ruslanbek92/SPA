import './footer.css';
import ElementCreator from "../../util/element-creator"


const CssClasses = {
    FOOTER: 'footer',
};
const TEXT = 'SPA example app';

export default class FooterView  {
    constructor(){
        this.elementCreator = this.createView();
       }
   
       getHTMLElement(){
           return this.elementCreator.getElement();
       }
   
       createView(){
           const params ={
               tag:'footer',
               classNames :[CssClasses.FOOTER],
               textContent :TEXT,
               callback:null,
           }
           const createElement = new ElementCreator(params);
           return createElement;
       }
}