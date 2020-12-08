import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  passwordShowed = false;
  loading = false;

  constructor(private titleService: Title, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Angular Starter | Login');
  }

  async handleSubmit({ email, password }: { email: string; password: string }): Promise<void> {
    if (!this.loginForm.valid) { return; }

    this.loading = true;
    try {
      await this.authService.login(email, password);
    } catch (err) {
      this.loading = false;
    }
  }
}
