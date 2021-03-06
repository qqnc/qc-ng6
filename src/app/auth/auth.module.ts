import { CommentsResolver } from './../admin/comments/comments.resolver';
import { ConfirmationComponent } from './verification/confirmation';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationSuccessComponent } from './verification/success.component/success.component';
import { VerificationFailedComponent } from './verification/failure.component/failure.component';
import { CreatePasswordComponent } from './create.password/create.password.component';
import { ForgetPasswordComponent } from './forget.password.component/forget.password.comonent';
import { PasswordService } from './_services/password.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  declarations: [
    AuthComponent,
    VerificationComponent,
    VerificationSuccessComponent,
    VerificationFailedComponent,
    CreatePasswordComponent,
    ConfirmationComponent,
    ForgetPasswordComponent
  ],
  providers: [
    AuthGuard,
    PasswordService,
    CommentsResolver
  ],
  entryComponents: [
    VerificationSuccessComponent,
    VerificationFailedComponent
  ]
})
export class AuthModule { }
