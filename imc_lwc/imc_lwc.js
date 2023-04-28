import { LightningElement } from 'lwc';

export default class imc_lwc extends LightningElement {

    inputImc = {
        nome: '',
        peso: '',
        altura: ''
     }
     nome1 = '';
     peso1 = '';
     altura1 = '';
     mensagem = '';
  
     
     hendleCaptar(event) {
        
        let inputName = event.target.name;
        let inputValue = event.detail.value;
      
        this.inputImc = {
           ...this.inputImc, [inputName]: inputValue
        };
        
        this.nome1 = this.inputImc.nome;
        this.peso1 = this.inputImc.peso;
        this.altura1 = this.inputImc.altura;
  
     }
     calcularIMC() {
        const peso = parseFloat(this.peso1);
        const altura = parseFloat(this.altura1);
  
        const imc = (peso / (altura * altura)).toFixed(2);
  
        let classificacao = '';
  
        if (imc < 18.5) {
           classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
           classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
           classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
           classificacao = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
           classificacao = 'Obesidade grau 2';
        } else {
           classificacao = 'Obesidade grau 3';
        }
  
        this.mensagem = `Seu IMC é ${imc} - Classificação: ${classificacao}`;
  
     }
  }
  
  

