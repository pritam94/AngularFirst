import { Component } from '@angular/core';



@Component({
  selector: 'structoral-root',
  template: `<h2 style="color:red">{{title}}</h2> 
             <p *ngIf = "ShowElement"> Show If Element</p>
             <p *ngIf = "DontShow"> This will not be shown</p>
             <ul style="color:green">
             <li *ngFor = "let color of colors">{{color}}</li>
             </ul>`           
})
export class NgIfForComponent {
public title = "2. Example of structutal directives *ngIf and *ngFor ";
public ShowElement = true;
public DontShow= false;
public colors = ['red', 'blue', 'black'];
}