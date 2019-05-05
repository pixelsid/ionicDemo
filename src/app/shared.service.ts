import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isDoneWithTutorial:boolean = false;
  public tutotrialSlides = [
    {name:'DOCTORS', desc:'One way to announce or promote a certain new product or special', image:'assets/img/tut1.png'},
    {name:'DRUGS', desc:'I know how it can be terrible for you at nights and even', image:'assets/img/tut2.png'},
    {name:'APPOINTMENT', desc:'Kidney stones are very hard mineral deposits that happen to form', image:'assets/img/tut3.png'}
  ]
  constructor() { }
}
