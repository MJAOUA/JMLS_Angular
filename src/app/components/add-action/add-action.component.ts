import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css']
})
export class AddActionComponent implements OnInit {
  action = {
    nom: '',
    description: '',
    prix: '',
    nombre: '',
    date: ''
  };
  submitted = false;

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
  }

  saveAction(): void {
    const data = {
      nom: this.action.nom,
      description: this.action.description,
      prix: this.action.prix,
      nombre: this.action.nombre,
      date: this.action.date
    };

    this.actionService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAction(): void {
    this.submitted = false;
    this.action = {
      nom: '',
      description: '',
      prix: '',
      nombre: '',
      date: ''
    };
  }

}