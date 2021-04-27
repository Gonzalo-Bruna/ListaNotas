import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Notas, listaNotas } from '../../../app/datos/notas';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  descripcion:AbstractControl;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
      descripcion: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(150)]]
    });

    this.titulo = this.formulario.controls["titulo"];
    this.descripcion = this.formulario.controls["descripcion"];
  }

  ngOnInit(): void {
  }

  crear(){
    let nota:Notas = {titulo: this.titulo.value, descripcion: this.descripcion.value};
    listaNotas.push(nota);
    console.log(listaNotas);
  }

}
