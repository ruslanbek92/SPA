import ElementCreator from "../../../../util/element-creator";
import View from "../../../view";
import "./card.css";
import cardsInfo from "../../../../data/cards";
const CssClasses = {
    CONTAINER: 'card',
   FIELD: 'card__field',
   BUTTON: 'card__button',
};

const CARD_TEXT_MORE= "Подробнее...";

export default class CardView extends View{
    constructor(card){
        const params = {
            tag:"section",
            classNames:[CssClasses.CONTAINER], 
            textContent: '',
            callback: null, 
        }
        super(params);
        this.firstField = "";
        this.secondField = "";
        this.configureView(card)
    }

    configureView(card){
        const paramsLabel = {
            tag:"label",
            classNames:[CssClasses.FIELD], 
            textContent: card.name,
            callback: null, 
        }
        const labelCreator = new ElementCreator(paramsLabel);

        const  paramsButton = {
            tag:"button",
            classNames:[CssClasses.BUTTON], 
            textContent: CARD_TEXT_MORE,
            callback: null, 
        }
        const  buttonCreator = new ElementCreator(paramsButton);
        this.elementCreator.addInnerElement(labelCreator)
        this.elementCreator.addInnerElement(buttonCreator);
    }
}