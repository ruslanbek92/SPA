import './product.css';
import View from '../../view';
import cardsInfo from '../../../data/cards';
import CardView from './card/card-view';
cardsInfo
const CssClasses = {
    PRODUCT: 'product',
};

export default class ProductView extends View{
    constructor(){
        const params = {
            tag:"section",
            classNames:[CssClasses.PRODUCT], 
            textContent: '',
            callback: null, 
        }
        super(params);
        this.firstField = "";
        this.secondField = "";
        this.configureView()
    }
    configureView(){
 cardsInfo.forEach((card)=>{
    const cardView = new CardView(card);
    this.elementCreator.addInnerElement(cardView.getHTMLElement());
 })
    }
}