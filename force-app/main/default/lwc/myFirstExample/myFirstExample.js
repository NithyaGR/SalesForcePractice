import { LightningElement } from 'lwc';


export default class MyFirstExample extends LightningElement {
    // variables to store the click counts of the each button and the total counts (- the first one)
    clickedTotalCount = 0 ;
    clickedChangeCount = 0 ;
    clickedMachineCount = 0 ;
    clickedChangeMachineCount = 0 ;

    // variables to store the percentage of the clicks on the each button
    clickedChangePercent = 0;
    clickedMachinePercent = 0;
    clickedChangeMachinePercent = 0;

    // variables to to store the time clicked 
    
    timeClickedChange = 0;
    timeClickedMachine = 0;
    timeClickedChangeMachine = 0;

    
    // variable to store the name/label of the button which is clicked
    clickedButtonLabel;
     

    doChange(event) {
        this.clickedButtonLabel = event.target.label;
        //each nd every click add the total click counts.
        this.clickedTotalCount++;
        if(event.target.label === 'Change'){
            this.timeClickedChange = Date.now();
            this.clickedChangeCount++;
            this.clickedChangePercent = Math.round((this.clickedChangeCount / this.clickedTotalCount) *100) ; 

        } else if (event.target.label === 'Machine'){
            this.timeClickedMachine = Date.now();
            this.clickedMachineCount++;
            this.clickedMachinePercent = Math.round((this.clickedMachineCount / this.clickedTotalCount) *100) ; 
        } else {
            this.timeClickedChangeMachine = Date.now();
            this.clickedChangeMachineCount++;
            this.clickedChangeMachinePercent = Math.round((this.clickedChangeMachineCount / this.clickedTotalCount) *100) ; 
        }

    }
}