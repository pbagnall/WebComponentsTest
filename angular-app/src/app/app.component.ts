import { Component, ElementRef, ViewChild } from '@angular/core';
import './DropDown.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("dropdown1") dropdown1!: ElementRef;
  @ViewChild("dropdown2") dropdown2!: ElementRef;
  @ViewChild("output1") output1!: ElementRef; 
  @ViewChild("output2") output2!: ElementRef;
  title = 'angular-app';

  updateOutput(e: CustomEvent, target: ElementRef): boolean {
    target.nativeElement.innerHTML = e.detail;
    return false;
  }

  ngAfterViewInit() {
    this.dropdown1.nativeElement.addEventListener("change", (e: any) => this.updateOutput(e, this.output1));
    this.dropdown2.nativeElement.addEventListener("change", (e: any) => this.updateOutput(e, this.output2));
  }
}

