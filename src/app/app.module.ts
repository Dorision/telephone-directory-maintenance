import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TelephoneDirectoryComponent } from './pages/telephone-directory/telephone-directory.component';
import { AlertService} from './services/alert.service';
import { AlertComponent} from './common/directives'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MatPaginatorModule} from '@angular/material/paginator';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './pages/telephone-directory/dialog-box/dialog-box.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TelephoneDirectoryComponent,
    AlertComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    JwPaginationModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AlertService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
