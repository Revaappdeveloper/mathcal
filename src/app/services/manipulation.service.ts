import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManipulationService {

  constructor() { }

  sumOfNthTerm(n: number) {
    if (n < 0) {
      return 'please enter positive value';
    }
    if (n === 1) {
      return 1;
    } else {
      return (n * (n + 1)) / 2;
    }
  }

  palindrome(str){
    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  fibonacciSeries(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var s = this.fibonacciSeries(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }

}
