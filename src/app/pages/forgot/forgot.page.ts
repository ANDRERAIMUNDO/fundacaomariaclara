import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  

  registroForm = new FormGroup({
    email: new FormControl(''),
    confirmemail:new FormControl('')
  });
  

  constructor(public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  this.registroForm;
   }

   singupForm () {
    this.registroForm = this.formBuilder.group({
        email: ['', Validators.required],
        confirmemail: ['', Validators.required]
      });
  }
  get email() { return this.registroForm.get('email'); }
  get confirmemail() { return this.registroForm.get('email'); }


  onSubmit() {
    this.router.navigate(['/home']);
    console.warn(this.registroForm.value);
    console.log("submit form");
  }


}
