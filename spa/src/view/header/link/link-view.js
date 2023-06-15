import View from "../../view";
import './link.css'; 

const CssClasses = {
    ITEM:'nav-item',
    ITEM_SELECTED : 'nav-item_selected'
}
export default class LinkView extends View{
constructor(text){
    const params = {
        tag:"a",
        classNames:[CssClasses.ITEM], 
        textContent: text,
        callback: null, 
    }
    super(params);
}
}