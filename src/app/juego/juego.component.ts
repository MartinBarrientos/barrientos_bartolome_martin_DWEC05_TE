import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Configuracion } from '../models/configuracion';
@Component({
  selector: 'app-juego',
  standalone: false,
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})

export class JuegoComponent {
  //cargamos configuracion para poder usar la informacion del formulario
  @Input() configuracion: Configuracion = new Configuracion("", "", 0, 0);
  //variables
  intentos!:number;
  haJugado: boolean = false;
  public numero!: number;
  public ganador:boolean = false;
  @Output() reiniciarJuego = new EventEmitter<void>(); //Evento para decirle al padre que reinicie el juego

  //metodo para validar el numero y gestionar la logica del juego
  validarNumero(numero: number): void {
    this.haJugado = true;
    this.configuracion.intentos! --;
    this.numero = numero;
    if(this.numero == this.configuracion.aleatorio){
      this.ganador = true;
    }
  }
  volverJugar():void{
    window.location.reload();
  }
}
