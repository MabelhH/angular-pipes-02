import { Component  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 
 lista=[
  {
  Apellido:'Huanaco',
  Casado:'false',
  Direccion:'Calle 35 # 78 30',
  Nombre:'Clara',
  Telefono:'937375934'
 },
 {
  Apellido:'Lechuga',
  Casado:'false',
  Direccion:'Calle 35 # 78 30',
  Nombre:'Yoel',
  Telefono:'454522578'
 },
 {
  Apellido:'Garcia',
  Casado:'false',
  Direccion:'Calle 35 # 76 14',
  Nombre:'Gabriela',
  Telefono:'914555111'
 }
 ]
 


 
}
