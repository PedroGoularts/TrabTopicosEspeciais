import { SidenavComponent } from './../sidenav/sidenav.component';
import { Component, OnInit } from '@angular/core';
import {GeoLocService} from '../services/geo-loc.service'

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.component.html',
  styleUrls: ['./geoloc.component.scss']
})
export class GeolocComponent implements OnInit {

  FATEC_LATITUDE = -20.5144785;
  FATEC_LONGITUDE = -47.4003616;
  
  public estanafatec;

  constructor(private geoLocSrv: GeoLocService) { }
  public pos: any;
  public dist: number;
  public msgErro: string;
 
async ngOnInit() {
    try {
      this.pos = await this.geoLocSrv.obterPos();
      this.dist = this.geoLocSrv.distancia(this.pos.coords.latitude, this.pos.coords.longitude, this.FATEC_LATITUDE, this.FATEC_LONGITUDE);
      this.estanafatec = (this.dist < 0.075) ? true: false;
      console.log("estanafatec");
      console.log(this.estanafatec);
    } catch (e) {
      console.error(e);
      this.msgErro = 'Você precisa permitir a obtenção da sua localização';
    }
}

}
