import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss']
})
export class TutorialPage implements OnInit {
  reachedEnd:boolean = false;
  currentSlideIndex = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  }

  @ViewChild('tutSlides') slides:IonSlides;
  constructor(public shared:SharedService, private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
    
  }

  slideChanged(){
    //get the index
    this.slides.getActiveIndex().then((num)=>{
      this.currentSlideIndex = num;
      this.slides.length().then((len)=>{
        if(num==len-1){
          console.log('end');
          this.reachedEnd = true;
        }
        else{
          console.log('not end');
          this.reachedEnd = false;
        }
      })
    });
    
  }

  slideTo(direction){
    console.log(direction);
    if(direction=='back'){
      this.slides.slidePrev();
    }
    if(direction=='next'){
      this.slides.slideNext();
    }
  }

  goToLogin(){
    // this.nav.push(HomePage);
    this.router.navigate(['/login']);
    this.shared.isDoneWithTutorial = true;
  }

}
