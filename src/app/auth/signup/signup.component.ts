import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatInputModule, MatButtonModule,ReactiveFormsModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm: FormGroup;
  errorMsg = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
  this.signupForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword: ['', Validators.required]
  });
  }

  onSignup() {
  if (this.signupForm.invalid) {
    this.errorMsg = 'Please fill all fields correctly';
    return;
  }

  const { password, confirmPassword } = this.signupForm.value;

  if (password !== confirmPassword) {
    this.errorMsg = 'Passwords do not match';
    return;
  }

  this.loading = true;
  this.errorMsg = '';

  this.auth.signup(this.signupForm.value).subscribe({
    next: () => {
      this.loading = false;
      alert('Signup successful ');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      this.loading = false;
      this.errorMsg = err.error?.message || 'Signup failed';
    }
  });
}

}
