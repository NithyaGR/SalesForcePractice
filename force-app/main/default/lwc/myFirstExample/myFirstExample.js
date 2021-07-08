import { LightningElement, track } from 'lwc';
import doChange from '@salesforce/apex/ChangeMachineController.doChange';


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

    //variables to store the boolean parameters
    changeBoolean = false;
    machineBoolean = false;


    //variables to store the result from the backend
    @track displayMessage;
    @track error;
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        //each nd every click add the total click counts.
        this.clickedTotalCount++;
        
        if(event.target.label === 'Change'){
            this.changeBoolean = true;
            //this.timeClickedChange = Date.now();
            //this.clickedChangeCount++;
            //this.clickedChangePercent = Math.round((this.clickedChangeCount / this.clickedTotalCount) *100) ; 

        } else if (event.target.label === 'Machine'){
            this.machineBoolean = true;
            // this.timeClickedMachine = Date.now();
            // this.clickedMachineCount++;
            // this.clickedMachinePercent = Math.round((this.clickedMachineCount / this.clickedTotalCount) *100) ; 
        } else {
            this.changeBoolean = true;
            this.machineBoolean = true;
            // this.timeClickedChangeMachine = Date.now();
            // this.clickedChangeMachineCount++;
            // this.clickedChangeMachinePercent = Math.round((this.clickedChangeMachineCount / this.clickedTotalCount) *100) ; 
        }
        doChange(this.changeBoolean, this.machineBoolean)
        .then(result => {
            this.displayMessage = result;
            console.log(result);
        })
        .catch(error => {
            this.error = error;
            console.log(error);
        });


    }
}