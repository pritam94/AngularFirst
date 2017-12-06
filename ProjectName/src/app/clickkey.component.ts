import { Component } from '@angular/core';



@Component({
  selector: 'click-keyup',
  template: `<h2 style="color:blue">{{title}}</h2> 
             <p [ngClass]  = "{classOne:cone, classTwo:ctwo}">I will change on clicking below button or clicking any key</p>
             <button (click) = "toggle()"> Click Me</button>
             <button (keyup) = "change()"> press this button and click any key </button>`,
    styles: [`.classOne{color:green }
    .classTwo {background-color:orange}`]         
})
export class ClickComponent {
public title = "3. Click and keyup button";
public cone = true;
public ctwo = true;
toggle(){
this.cone = !this.cone;
this.ctwo = !this.ctwo;
}
change(){
this.cone = !this.cone;
}

}
