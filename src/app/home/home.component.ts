import { Component, OnInit } from '@angular/core';
import { FoaasService } from './foaas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foaas: any;
  foaasList: any = [];
  field_1: string = '';
  field_2: string = '';
  field_3: string = '';
  directFoaas: any = '';
  constructor(private foaasService: FoaasService) {}

  ngOnInit() {
    this.getFoaasOperations();
  }

  send(){
    this.getFoaasDirect();
  }

  getFoaasOperations(){
    this.foaasService.getOperations().subscribe(data => {
      this.foaasList = data;
    });
  }

  getFoaasDirect(){
    this.foaasService.getFoaasLink(this.foaas, this.field_1, this.field_2, this.field_3).subscribe( res => {
      this.directFoaas = res['value'];
      
      console.log(res);
      console.log(this.directFoaas);
    });
  }
}

