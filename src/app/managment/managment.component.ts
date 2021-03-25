import { Component, Output, EventEmitter } from '@angular/core';
import { LinkTemplate } from "../interaces/LinkTemplate";
import { LINKS } from "../interaces/LinkBase";

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent {

  links: LinkTemplate[] = LINKS;

  link: string = '';
  destination: string = '';
  Image:string = ''; 

  AddLink():void{
    this.links.push({
        LinkName: this.link,
        LinkAdress: this.destination,
        LinkIcon: this.Image,
      })
      this.link = '';
      this.destination = '';
      this.Image = '';
      this.ToggleVision();
    }

    @Output() Toggle = new EventEmitter<void>();

    ToggleVision():void{
      this.Toggle.emit();
    }
  
}
