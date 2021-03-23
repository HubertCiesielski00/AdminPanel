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

 remove(index:any){
   this.links.splice(index, 1);
 }
}
