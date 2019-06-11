import { Component, ViewChild } from '@angular/core';
import {GeolocComponent} from './geoloc/geoloc.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToAki';

  estanaFatec: string;
  @ViewChild(GeolocComponent)

  set geoApp(dir: GeolocComponent){
    // this.estanaFatec = dir.estanafatec
     console.log(this.estanaFatec);
  }

}
