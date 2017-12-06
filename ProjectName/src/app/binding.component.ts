import { Component } from '@angular/core';



@Component({
  selector: 'bind-root',
  template: `<h2 style="color:red">{{title}}</h2>
            Hello {{OneWay}}!
            <h5 style = "color:black">This is one way binding</h5><br>
        
           <input type = "text" [(ngModel)] = "fname">
           <input type = "text" [(ngModel)] = "lname"><br>
           Fullname : {{fname}} {{lname}}
           <h5 style = "color:black">This is two way binding</h5>`          
})
export class BindComponent {
public title = "4. One way and Two way binding";
public fname;
public lname;
public OneWay = "Pritam";
}
