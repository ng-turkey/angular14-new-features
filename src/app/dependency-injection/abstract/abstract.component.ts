import { Component, Directive, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from './menu-service';

@Directive()
export abstract class BaseMenu {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
}

@Component({
  selector: 'app-settings-menu',
  template: '',
})
export class SettingsMenuComponent extends BaseMenu implements OnInit {
  menuItems: Array<string> = [];

  constructor(private menuService: MenuService) {
    super();
  }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe((items) => (this.menuItems = items));
  }
}
