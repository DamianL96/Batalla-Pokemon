import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { jugador } from '../../../../Clases/jugador.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit{
  
  j1:jugador = new jugador();
  j2:jugador = new jugador();
  pasos:number;
  mostrarAnimacion: boolean = false;

  constructor(private datUsuario:UsuariosService,private router:Router){
    this.j1 = this.datUsuario.jugador1;
    this.j2 = this.datUsuario.jugador2;
    this.datUsuario.pasos$.subscribe(data => this.pasos = data);
  }
  ngOnInit(): void {
    this.j1.pokemons = [];
    this.j2.pokemons = [];
    this.datUsuario.reiniciarPasos();
  }
  
  iniciarPelea(){
    if(this.pasos==7){
      this.router.navigate(['pelea']);
    }
    else{
      this.mostrarAnimacion = true;
      // Después de 2 segundos, cambiar el valor de mostrarAnimacion a falso
      setTimeout(() => {
        this.mostrarAnimacion = false;
      }, 1000);
    }
  }

}
