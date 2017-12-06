import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `<body>
            <h1 style="color:red">{{title}}</h1> 
             <class-style></class-style>
             <structoral-root></structoral-root>
             <click-keyup></click-keyup>
             <bind-root></bind-root>
             </body>`

})
export class AppComponent {
public title = "Assignment Angular";
}
