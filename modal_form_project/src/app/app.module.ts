import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import { DetailComponent } from './components/detail/detail.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    DetailComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
