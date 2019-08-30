import { Component, OnInit } from '@angular/core';
import { FoaasService } from './foaas.service';
import { Router } from '@angular/router';


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

  constructor(private foaasService: FoaasService, private router: Router) {}

  ngOnInit() {
    this.getFoaasOperations();
  }

  send(){
    this.getFoaasLink();
  }

  removeOption(){
    const index: number = this.foaasList.indexOf(this.foaas);
    this.foaasList.splice(index, 1);
    this.foaas = null;
    this.field_1 = '';
    this.field_2 = '';
    this.field_3 = '';
  }

  getFoaasOperations(){
    this.foaasService.getOperations().subscribe(data => {
      this.foaasList = data;
    });
  }

  getFoaasLink(){
    let s =  this.foaas.url.split(':');
    let f1 = `${this.field_1}/`;
    let f2 = `${this.field_2}/`;
    let f3 = `${this.field_3}/`;
      
    if(this.foaas.fields.length < 2){
      f2 = '';
      f3 = '';
    }else if(this.foaas.fields.length < 3)
      f3 = '';

    this.directFoaas = `${this.foaasService.apiFoaas}${s[0]}${f1}${f2}${f3}`;
  }
}

