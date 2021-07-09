import { LightningElement, track, wire } from 'lwc';
import doChange from '@salesforce/apex/ChangeMachineController.doChange';
import getRecords from '@salesforce/apex/RecordController.getRecord';
//import getPercent from './helper';


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
    @track changeBoolean = false;
    @track machineBoolean = false;


    //variables to store the result from the backend for displaying in the browser
    @track displayMessage;
    @track error;

    @track displayTableRecord;
    @track errorRecord;
    
    // to feed the record 
    //with params
    @wire (doChange,{change: '$changeBoolean', machine: '$machineBoolean'})
	wiredAccounts({data, error}){
		if(data) {
			this.displayMessage =data;
			this.error = undefined;
		}else {
			this.displayMessage =undefined;
			this.error = error;
		}
    }
    // to get the custom object records
    @wire (getRecords)
	wiredAccounts({data, error}){
		if(data) {
			this.displayTableRecord =data;
            this.errorRecord = undefined;
            console.log(data);
		}else {
			this.displayTableRecord =undefined;
			this.errorRecord = error;
		}
    }
    

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        //each and every click add the total click counts.
        this.clickedTotalCount++;
        
        if(event.target.label === 'Change'){
            this.changeBoolean = true;
            this.machineBoolean = false; // otherwise it won't update the content related to the new click
            console.log(this.changeBoolean);
            console.log(this.timeClickedChange);
            this.clickedChangeCount++;
            this.clickedChangePercent = Math.round((this.clickedChangeCount / this.clickedTotalCount) *100) ; 

        } else if (event.target.label === 'Machine'){
            this.machineBoolean = true;
            this.changeBoolean = false;
            console.log(this.machineBoolean);
            console.log(this.timeClickedMachine);
            this.clickedMachineCount++;
            this.clickedMachinePercent = Math.round((this.clickedMachineCount / this.clickedTotalCount) *100) ; 
        } else {
            this.changeBoolean = true;
            this.machineBoolean = true;
            console.log(this.changeBoolean);
            console.log(this.machineBoolean);
            console.log(this.timeClickedChangeMachine);
            this.clickedChangeMachineCount++;
            this.clickedChangeMachinePercent = Math.round((this.clickedChangeMachineCount / this.clickedTotalCount) *100) ; 
            // debug this later
            //this.clickedChangeMachinePercent = getPercent(this.clickedChangeMachineCount, this.clickedTotalCount);
        }
            // Not going to try as this is with no parameters
    // @wire(doChange)
    // wiredAccounts({ error, data }) {
    //     if (data) {
    //         this.displayMessage = data;
    //     } else if (error) {
    //         console.log(error);
    //         this.error = error.body;
    //     }
    // }

        //calling method imperatively didn't call the server side method.
        // This didn't work - I think, need to check the syntax for 2 params @line no 91
        // console.log("Calling the doChange method")
        // doChange({change: changeBoolean, machine: machineBoolean})
        // //{ strAccountName: searchKey }
        // .then(response => {
        //     this.displayMessage = response;
        //     console.log(response);
        //     console.log("inside the result");
        // })
        // .catch(error => {
        //     console.log("error occurred");
        //     this.error = error.body;
        //     // console.log(error);
        //     // console.log(error.body);          
        //     // console.log(this.error);
        //     //console.log(error["Error"]);
        // });
            // ts files - error
    // sendDataType : function (component, event, helper) {
    //     var action = component.get('c.doChange'); 
    //     // method name i.e. getEntity should be same as defined in apex class
    //     // params name i.e. entityType should be same as defined in getEntity method
    //     action.setParams({
    //         "change" : this.changeBoolean,
    //         "machine" : this.machineBoolean 
    //     });
    //     action.setCallback(this, function(response){
    //         var state = response.getState(); // get the response state
    //         if(state === 'SUCCESS') {
    //             console.log(response.getReturnValue());
    //             //component.set('v.sObjList', response.getReturnValue());
    //             this.displayMessage = response.getReturnValue();
    //         }else {
    //             this.error = response.getReturnValue();
    //         }

    //     });
    //     $A.enqueueAction(action);
    // }


    }  
}