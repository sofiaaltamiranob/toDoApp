export class Todo {
  public id : number = new Date().getTime();
  public texto: string;
  public completado: boolean = false;
  static completado: any;

  constructor( texto: string){
    this.id = Math.random();
    this.texto = texto;
    this.completado = false;
  }

}
