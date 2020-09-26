import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  carros: any[] = [
    {
      "name": "BMW",
      "age": 12,
      "color": 'blue'
    },
    {
      "name": "Ford",
      "age": 15,
      "color": 'yellow'
    },
    {
      "name": "Suzuki",
      "age": 18,
      "color": 'silver'
    },
    {
      "name": "MG Hector",
      "age": 14,
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "age": 8,
      "color": 'green'
    }
  ];
  pessoas:any[]=[
    {
      id:1,
      nome:'Tiago',
      sal:5000
    },
    {
      id:2,
      nome:'José',
      sal:3000
    },
    {
      id:3,
      nome:'Maria',
      sal:10000
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
