import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ServiceStorageService } from 'src/app/service-storage.service';


export interface User {
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
}

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})


export class SignComponent implements OnInit{
  signUp: any[] = [];

  sign: User = {
    firstName: '',
    mail: '',
    lastName: '',
    password: '',
  };
  
  onSignUp() {
    this.signUp.push(this.sign);
    localStorage.setItem('signUp',JSON.stringify(this.signUp));

    this.serviceStorage.setLoggedInUser(this.sign);

    this.sign = {
      firstName: '',
      lastName: '',
      password: '',
      mail: '',
    };
  }

  constructor(private serviceService: ServiceService, private router: Router, private route: ActivatedRoute, private serviceStorage: ServiceStorageService) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUp');
    if (localData !== null) {
      this.signUp = JSON.parse(localData);
    }
  }

}
