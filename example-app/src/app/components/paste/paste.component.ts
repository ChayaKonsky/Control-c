import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MaketaskService } from 'src/app/services/maketask.service';
import { Text } from '../../class/Text';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css']
})
export class PasteComponent implements OnInit {

  constructor(private router:Router,private maketaskService: MaketaskService) { }
  pasteform:FormGroup
  text;

  ngOnInit() {
    const id: string = this.router.url.split('/')[2];
    this.maketaskService.getTextById(id).subscribe(a=> {this.text=a[0],console.log(a[0]),console.log(this.text);
      console.log(this.text.text);
      
    
    })
   
    
    
    

  }

}
