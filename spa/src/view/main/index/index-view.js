import InputFieldCreator from "../../../util/input-field/input-field-creator";
import View from "../../view";
import "./index.css";

const CssClasses = {
    INDEX: 'index',
};

const FIELD_TEXT_ONE = 'Поле для вывода 1';
const FIELD_TEXT_TWO = 'Поле для вывода 2';

export default class IndexView extends View{
  constructor(){
    const params = {
        tag:"section",
        classNames:[CssClasses.INDEX], 
        textContent: '',
        callback: null, 
    }
    super(params);
    this.firstField = "";
    this.secondField = "";
    this.configureView()
  } 
  
  configureView(){
    let paramsInput = {
        tag:"input",
        classNames:[], 
        textContent: FIELD_TEXT_ONE,
        callback: (event)=>this.keyupHandler(event,"firstInput"), 
    }
    
    let inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());

     paramsInput = {
        tag:"input",
        classNames:[], 
        textContent: FIELD_TEXT_TWO,
        callback: (event)=>this.keyupHandler(event,"secondInput"), 
    }
    
     inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  keyupHandler(event, fieldName){
   if(event.target instanceof HTMLInputElement){
    this[fieldName] = event.target.value;
   }   
}
}