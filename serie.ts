export class Serie {
    id: number;
    name: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    episodios: number;
    constructor(id: number, name: string,canal: string, temporadas: number, descripcion: string, episodios:number ) {
      this.id = id;
      this.name = name;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.episodios = episodios;
    }
  }