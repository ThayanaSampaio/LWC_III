import { LightningElement, track } from 'lwc';

export default class Lwc_iii_2 extends LightningElement {   

   inputs = {
      firstname: '',
      lastname: '',
      email: '',
      website: '',
      company: '',
      annualrevenue: ''
   };

   handleInputChange(event) {
      console.log("Valor do campo preenchido: " + event.detail.value);
      console.log("Valor do nome do campo: " + event.target.name);

      let nameinput = event.target.name;
      let value = event.detail.value;

      this.inputs = {
         ...this.inputs,
         [nameinput]: value
      };

      console.log(this.inputs);
   }
}