import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Servicios que ofrece la empresa
  arrayServicios = [
    {id: 0, servicio: "Una página web (500 €)", precio: 500, select: false },
    {id: 1, servicio: "Una consultoria SEO (300 €)", precio: 300, select: false },
    {id: 2, servicio: "Una campaña de Google Ads (200 €)", precio: 200, select: false },
  ]

  arrayActivos: any[] = [];
  total:number = 0;


  cambiaOpcion(event:Event){
    let id = parseInt((<HTMLInputElement>event.target).value);
    let checked = (<HTMLInputElement>event.target).checked;

    // cambiamos el select del array principal según la activación del checkbox
    this.arrayServicios[id].select = checked;

    // pasamos los servicios seleccionados a un nuevo array
    this.total = 0;
    this.arrayActivos = this.arrayServicios.filter(c => c.select == true).map(p => this.total += p.precio);

    console.log(this.arrayActivos);
    console.log(this.total);
  }

}
