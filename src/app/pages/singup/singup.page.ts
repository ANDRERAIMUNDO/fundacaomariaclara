import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})

export class SingupPage implements OnInit {
  

    registroForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    brithdate: new FormControl(''),
    phone: new FormControl(''),
    rg: new FormControl(''),
    cpf: new FormControl(''),
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    localidade: new FormControl(''),
    uf: new FormControl('')
  });
  
  constructor(public router: Router,
    public registroService: RegistroService,
    public formBuilder: FormBuilder) { }

    ngOnInit() : void {
     this.singupForm();
    }

    singupForm () {

      this.registroForm = this.formBuilder.group({
        
          name: ['', Validators.required],
          lastname:['', Validators.required],
          email: ['', Validators.required],
          password:['', Validators.required],
          brithdate: ['', Validators.required],
          phone: ['', Validators.required],
          rg: ['', Validators.required],
          cpf: ['', Validators.required],
          logradouro:['', Validators.required],
          numero: ['', Validators.required],
          complemento:['', Validators.required],
          bairro: ['', Validators.required],
          localidade:['', Validators.required],
          uf: ['', Validators.required],
        });
    }

    get name() { return this.registroForm.get('name'); }
    get lastname() { return this.registroForm.get('lastname'); }
    get email() { return this.registroForm.get('email'); }
    get password() { return this.registroForm.get('password'); }
    get brithdate() { return this.registroForm.get('brithdate'); }
    get phone() { return this.registroForm.get('phone'); }
    get rg() { return this.registroForm.get('rg'); }
    get cpf() { return this.registroForm.get('cpf'); }
    get logradouro() { return this.registroForm.get('logradouro'); }
    get numero() { return this.registroForm.get('numero'); }
    get complemento() { return this.registroForm.get('complemento'); }
    get bairro() { return this.registroForm.get('bairro'); }
    get localidade() { return this.registroForm.get('localidade'); }
    get uf() { return this.registroForm.get('uf'); }



    onSubmit() {
      this.router.navigate(['/profile']);
      console.warn(this.registroForm.value);
      console.log("submit form");
    }

}
