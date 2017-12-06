import { Component } from '@angular/core';
    

@Component({
selector : 'class-style',
template : `<h2>{{title}}</h2>
            <div [class.Myclass] = "applyClass">Apply Class</div>
            <div [style.color]="applyRed? 'red' : 'blue'">This is style Binding</div>`, 
styles   : [`.Myclass{
color:blue;
}`]        
})
export class TutorialComponent{
public title = "1. Class and Style Binding";
public applyClass = true;
public applyRed = true;


}