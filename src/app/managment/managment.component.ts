import { Component } from '@angular/core';
import { LinkTemplate } from "../interaces/LinkTemplate";
import { LINKS } from "../interaces/LinkBase";

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent {

  links: LinkTemplate[] = LINKS;

  AddLink(link: string, address: string, icon:string ):void{
    this.links.push(
      {
        LinkName: link,
        LinkAdress: address,
        LinkIcon: icon,
      }
    )
    link = '';
  }

}
