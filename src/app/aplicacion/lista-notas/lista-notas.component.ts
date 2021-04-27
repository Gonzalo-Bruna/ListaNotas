import { Component, OnInit } from '@angular/core';
import { Notas, listaNotas } from '../../../app/datos/notas';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss']
})
export class ListaNotasComponent implements OnInit {

  notas:Array<Notas> = listaNotas;
  formulario:FormGroup;
  tituloNota:AbstractControl;

  constructor(public fb:FormBuilder) {
    this.formulario = this.fb.group({
      tituloNota:['', [Validators.required, Validators.minLength(10)]]
    });

    this.tituloNota = this.formulario.controls["tituloNota"];
  }

  ngOnInit(): void {
  }

  eliminarNota(){
    this.notas.forEach( (item, index) => {
      if(this.tituloNota.value.toLowerCase() == item.titulo.toLowerCase()){
        this.notas.splice(index, 1);
        this.tituloNota.setValue("");
        return;
      }
    });
  }
}
