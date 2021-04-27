import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  descripcion:AbstractControl;

  listaNotas:Array<string>;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required,Validators.minLength(10)]],
      descripcion: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(20)]]
    });

    this.titulo = this.formulario.controls["titulo"];
    this.descripcion = this.formulario.controls["descripcion"];
    this.listaNotas = [];
  }

  ngOnInit(): void {
    

  }

  crear(){
    console.log(this.titulo.value);
    console.log(this.descripcion.value);
  }

}
