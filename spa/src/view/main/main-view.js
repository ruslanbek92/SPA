import View from "../view";
import './main.css'

const CssClasses = {
MAIN : 'main'
}
export default class MainView extends View{
constructor(){
    const params = {
        tag:"main",
        classNames:[CssClasses.MAIN], 

        textContent: "",
        callback: null, 
    }
    super(params);
}
}