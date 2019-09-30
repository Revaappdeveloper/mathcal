import { Component, OnInit, Input } from '@angular/core';
import {ManipulationService} from 'src/app/services/manipulation.service'

@Component({
  selector: 'app-reusable-mathcal',
  templateUrl: './reusable-mathcal.component.html',
  styleUrls: ['./reusable-mathcal.component.css']
})
export class ReusableMathcalComponent implements OnInit {
  
  @Input('title') title = '';

  nthTerm= null;
  output= null;

  constructor(private manipulationService: ManipulationService) { }

  ngOnInit() {
  }

  onKeyUp(event){
    console.log(this.title);
    if (this.title === 'Sum of N'){
      this.output= this.manipulationService.sumOfNthTerm(Number(this.nthTerm));
      console.log(this.output);
    }
    else if (this.title === 'Palindrome'){
      this.output= this.manipulationService.palindrome(this.nthTerm);
      console.log(this.output);
    }
    else if (this.title === 'Fibonacci'){
      this.output= this.manipulationService.fibonacciSeries(Number(this.nthTerm));
      console.log(this.output);
    }
    else{
      console.log("Unknown Operation");
    }
    
  }

  
}
