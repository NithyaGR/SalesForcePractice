import { LightningElement } from 'lwc';

export default class ButtonGroup extends LightningElement {

    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}