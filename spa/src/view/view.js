import ElementCreator from "../util/element-creator";

export default class View{
    constructor(params){
        this.elementCreator = this.createView(params);
    }
    getHTMLElement(){
        return this.elementCreator.getElement();
    }
    createView(params){
        const elementParams ={
            tag:params.tag,
            classNames :params.classNames,
            textContent :params.textContent,
            callback:params.callback,
        }
        const createElement = new ElementCreator(elementParams);
        return createElement;
     }
}