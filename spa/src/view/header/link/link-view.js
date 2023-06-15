import View from "../../view";
import './link.css'; 

const CssClasses = {
    ITEM:'nav-item',
    ITEM_SELECTED : 'nav-item__selected'
}

export default class LinkView extends View{
constructor(pageParam,linkElements ){
    const params = {
        tag:"a",
        classNames:[CssClasses.ITEM], 
        textContent: pageParam.name,
        callback: pageParam.callback, 
    }
    super(params);
    this.linkElements = linkElements;
    this.configureView(pageParam);
}
setSelectedStatus(){
 this.linkElements.forEach(linkElement=> linkElement.setNotSelectedStatus());   
const element = this.elementCreator.getElement();
element.classList.add(CssClasses.ITEM_SELECTED);
}
setNotSelectedStatus(){
    const element = this.elementCreator.getElement();
element.classList.remove(CssClasses.ITEM_SELECTED);
    }

    configureView(pageParam){
        const element = this.elementCreator.getElement();
        element.addEventListener('click', this.setSelectedStatus.bind(this));
        this.elementCreator.setCallback(pageParam.callback);
    }
}