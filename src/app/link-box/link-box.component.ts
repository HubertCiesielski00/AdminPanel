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

 remove(index:any){
   if(confirm(`Czy na pewno chcesz usunąć link do ${this.links[index].LinkName}?`))
   this.links.splice(index, 1);
 }
}
