export class Configuracion {
    public aleatorio?:number;
    public nombre: string;
    public apellidos: string;
    public rango?: number;
    public intentos?: number;
    constructor(nombre: string, apellidos: string, rango?: number, intentos?: number, aleatorio?:number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.rango = rango;
        this.intentos = intentos;
        this.aleatorio = aleatorio;
    }
}