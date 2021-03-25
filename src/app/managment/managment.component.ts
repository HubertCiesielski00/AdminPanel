import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';
import { LinkTemplate } from "../interaces/LinkTemplate";

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent {
  
  @Output() newLink =  new EventEmitter<LinkTemplate>();
  @Output() Toggle = new EventEmitter<void>();


  link: LinkTemplate = { LinkName: '', LinkAdress: '', LinkIcon: ''};
   
  
  linkname: string = '';
  destination: string = '';
  Image: string = '';
  
  NewLink():void{
    this.link = { LinkName:this.linkname, LinkAdress: this.destination, LinkIcon: this.Image};
    this.newLink.emit(this.link);
    this.linkname = '';
    this.destination = '';
    this.Image = '';
   
  }
  
    ToggleVision():void{
      this.Toggle.emit();
    }
  
}
