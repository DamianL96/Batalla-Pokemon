import { habilidad } from "./habilidad.model";

export class pokemon {
  nombre: string = "";
  urlImgFront: string = "";
  urlImgBack: string = "";
  id: number = 0;
  vida: number = 0;
  vidaActual: number = 0; // Nueva propiedad
  ataque: number = 0;
  ataque_especial: number = 0;
  defensa: number = 0;
  defensa_especial: number = 0;
  velocidad: number = 0;
  habilidades: habilidad[] = [];
  bajo_efecto: string[] = [];

  constructor(
    nombre: string,
    urlImgFront: string,
    urlImgBack: string,
    id: number,
    vida: number,
    ataque: number,
    defensa: number,
    ataque_especial: number,
    defensa_especial: number,
    velocidad: number,
    vidaActual: number
  ) {
    this.nombre = nombre;
    this.urlImgFront = urlImgFront;
    this.urlImgBack = urlImgBack;
    this.id = id;
    this.vida = vida;
    this.vidaActual = vidaActual;
    this.ataque = ataque;
    this.ataque_especial = ataque_especial;
    this.defensa = defensa;
    this.defensa_especial = defensa_especial;
    this.velocidad = velocidad;
  }
}