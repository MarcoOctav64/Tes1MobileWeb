import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
//Variabel Penampung
  DataNama : string
  DataNrp : string
  DataEmail : string
  DataTelp : string

  //Variabel kiriman
  Nama : string
  Nrp : string
  Telp : string
  Em : string

  BSubmit()
  {
    this.DataNama = this.Nama
    this.DataNrp = this.Nrp
    this.DataEmail= this.Em
    this.DataTelp = this.Telp
  }


}
