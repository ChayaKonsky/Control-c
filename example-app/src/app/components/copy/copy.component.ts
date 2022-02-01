import { Component, Input, OnInit } from '@angular/core';
import { Text } from 'src/app/class/Text';
import { MaketaskService } from 'src/app/services/maketask.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {
  @Input() Text: Text
  correct = "";
  text: Text;
  id;
  constructor(private formBuilder: FormBuilder, private maketaskService: MaketaskService, private router: Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      title: ['', Validators.required],
      id: ['', Validators.required],
      text: ['', Validators.required],
      password: ['', Validators.required]

    });

  }
  save() {
    this.maketaskService.getMaxId().pipe(
      map( result => result &&   +result.id ? result.id +2: 500 ),
      map( id =>  (  {...this.loginForm.value, id } as Text)),
      tap(text => this.maketaskService.sendData(text ).pipe(
                   tap( res => console.log(res, )),
                   tap( _ =>this.router.navigate([`/controlc/${text.id}`]) )
           )
           .subscribe())
    )
    .subscribe()
    

  }

}


