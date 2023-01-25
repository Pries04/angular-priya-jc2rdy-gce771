import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app1',
  templateUrl: './app.component.html',
  styles: [`
  // p {
  //   font-family: Lato;
  //   padding: 10px;
  //   border-radius: 10px;
  //   background-color: rosybrown;
  // }
  h5 {
    font-family: Lato;
    padding: 10px;
    border-radius: 15px;
    background-color: rgb(214, 80, 80);
  }
  h4 {
    font-family: Lato;
    padding: 10px;
    border-radius: 15px;
    background-color: rgb(68, 332, 166);
  }

  `]

})
export class AppComponent  {
  
app1:string = 'Welcome';


onupdate()
{
  this.app1 = 'Hai Priya'
}


}
@Component({
  selector: 'app2',
  template: `  
  
  <button (click)="ona2()">APP2</button>
  <p>{{app2}}</p>
  `,
  styles: [
  
  ]

})
export class AppComponent1  {
  app2:string = 'Welcomelogin';
 
  ona2(){
    this.app2 = 'PRIYA'
  }
}


@Component({
  selector: 'app3',
  template: `  
  
<button>2way</button>
  `,
})
export class AppComponent3  {

 
}