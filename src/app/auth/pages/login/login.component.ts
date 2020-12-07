import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;

  constructor(private titleService: Title, private authService: AuthService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Starter | Login');
  }

  async handleSubmit(): Promise<void> {
    this.loading = true;
    try {
      await this.authService.login();
    } catch (err) {
      this.loading = false;
    }
  }
}
