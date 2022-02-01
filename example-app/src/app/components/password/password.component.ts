import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MaketaskService } from 'src/app/services/maketask.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  password:number;
  passFocus: boolean;
  errMsg = '';
   s = "שדה חובה";
  mouseoverLogin: boolean;
 
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder:FormBuilder,private maketaskService: MaketaskService,private router: Router  ) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required]
      
    });

  }
  login()
  {
    const id: string = this.router.url.split('/')[2];
    this.maketaskService.checkPassword(this.loginForm.value.password,id).subscribe(res=>{
      
     res=="1" ?  this.router.navigate([`/controlc/${id}/paste`]):
     alert("uncorrect password")
    })

  }
}

