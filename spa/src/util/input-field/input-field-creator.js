import ElementCreator from "../element-creator";
import "./input-field.css";

const InputFieldCssClasses = {
    CONTAINER: 'field_container',
    CONTAINER_REVERSE : 'field_container_reverse'
};
export default class InputFieldCreator extends ElementCreator{
        createElement(param){
            this.element = document.createElement('div');
            this.element.classList.add(InputFieldCssClasses.CONTAINER);
            param.classNames.forEach((name)=>{
                this.element.classList.add(name);
            })
            
            this.setCallback(param.callback);
            this.inputElement = document.createElement('input');
            this.labelElement = document.createElement('label');

            this.setTextContent(param.textContent);
            this.element.append(this.labelElement, this.inputElement);
        }

        setTextContent(text){
         this.labelElement.textContent = text;
        }

        setCallback(callback) {
            if (typeof callback === 'function') {
                this.element.addEventListener('keyup', (event) => callback(event));
            }
        }
}