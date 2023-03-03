import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-full-design',
  templateUrl: './full-design.component.html',
  styleUrls: ['./full-design.component.scss']
})
export class FullDesignComponent implements OnInit {

  menu: Menu[] = [];
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.menu = [
      {
        name: 'Data Binding Demo',
        path: 'data-binding-demo',
        icon: 'fa-home'
      },
      {
        name: 'Directives  Demo',
        path: 'directives-demo',
        icon: 'fa-tasks'
      },
      {
        name: 'Service  Demo',
        path: 'service-demo',
        icon: 'fa-bar-chart'
      },
      {
        name: 'Pipe  Demo',
        path: 'pipe-demo',
        icon: 'fa-user'
      },
      {
        name: 'login  Demo',
        path: 'login',
        icon: 'fa-user'
      },
      {
        name: 'Register',
        path: 'register',
        icon: 'fa-user'
      },
      {
        name: 'Flex',
        path: 'flex-demo',
        icon: 'fa-user'
      },
      {
        name: 'Parent',
        path: 'parent-demo',
        icon: 'fa-user'
      },
      {
        name: 'Observables',
        path: 'observable-demo',
        icon: 'fa-user'
      },
      {
        name: 'Promise',
        path: 'promise-demo',
        icon: 'fa-user'
      },

    ]
  }

  navigatetoTypescript() {
    this.router.navigate(['/typescript-demo']);
  }
}

