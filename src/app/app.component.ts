import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  // PROPERTIES ==========================
  length = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  generatedPsw:string = '';
  
  // METODI ==============================

  onLength(e){
    console.log(`e: ${e}`);
    if(!isNaN(e)){
      this.length = parseInt(e);
      console.log(`length: ${this.length}`)
    } else {
      console.log(`length non è un numero`)
    }
  }

  onIncludeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onIncludeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onIncludeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onBtnClick(e){
    e.preventDefault();
    let password_options = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '1234567890';
    let symbols = '|!"£$%&/()=?^*°§;:_-.+';
    this.generatedPsw = '';

    //generazione parametri password

    if(this.includeLetters){
      password_options += letters;
    }
    if(this.includeNumbers){
      password_options += numbers;
    }
    if(this.includeSymbols){
      password_options += symbols;
    }
    console.log(password_options);

    //generazione psw

    for(let i=0; i<this.length; i++){
      let index = Math.floor(Math.random() * password_options.length);
      this.generatedPsw += password_options[index];
    }
    console.log(this.generatedPsw);
  }

}//fine class
