import { Component } from '@angular/core';
import {LinkTemplate} from '../interaces/LinkTemplate';
import {LINKS} from '../interaces/LinkBase';


@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.css']
})
export class LinkBoxComponent{

  links: LinkTemplate[] = LINKS;

  Visible:boolean =  true;

  ToggleVision():void{
    this.Visible = !this.Visible;
  }

  //Leter here willl be added API ti sync. HTML view with database
  AddLink(link:any):void{
    this.links.push({
      LinkName: link.LinkName,
      LinkAdress: link.LinkAdress,
      LinkIcon: link.LinkIcon,
    })
  }

 remove(index:any){
   if(confirm(`Czy na pewno chcesz usunąć link do ${this.links[index].LinkName}?`))
   this.links.splice(index, 1);
 }
}
