import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../models/configuracion';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  //variables
  public configuracion!: Configuracion;  
  public nombre: string = "";
  public apellidos: string = "";
  public rango!: number;
  public intentos!: number;
  public textoRango: number = 0;
  public enviado: boolean = false;
  public aleatorio?: number;

  //variables booleanas para detectar el focus en el campo
  public focusNombre:boolean = false;
  public focusApellido:boolean = false;
  public focusIntentos:boolean = false;
  
  //metodo para verificar que el formulario es valido
  formularioValido(): any {
    if(this.nombre && this.apellidos && this.rango >=4 && this.intentos){
      return true;
    }else{
      return false;
    }
  }
  //metodo para recoger los datos del formulario
  recogerDatos(): void {
    this.aleatorio = this.generarNumero(this.rango);
    //INSTANCIAMOS OBJETO DE LA CLASE CONFIGURACION
    this.configuracion = new Configuracion(this.nombre, this.apellidos, this.rango, this.intentos, this.aleatorio);
    this.enviado = true;
  }
  //metodo para generar el numero aleatorio
  generarNumero(rango: number): number {
    var rangoPlus: number = Number(rango) + 1;
    return Math.floor(Math.random() * rangoPlus);
  }
}
