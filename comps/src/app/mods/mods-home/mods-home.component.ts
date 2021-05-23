import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items: any[] = [
    {title:'What is Angular?', content:'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. '},
    {title:'What is Typescript?', content:'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.'},
    {title:'What is JavaScript?', content:'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'}
  ];
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
