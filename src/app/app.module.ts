import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './components/word/word.component';
import { BookComponent } from './components/book/book.component';
import { UserComponent } from './components/user/user.component';
import { StructComponent } from './components/struct/struct.component';
import { WordslistComponent } from './components/wordslist/wordslist.component';
import { PersonComponent } from './components/person/person.component';
import { PersonlistComponent } from './components/personlist/personlist.component';
import { CardComponent } from './components/card/card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RoundPipe } from './custom-pipes-component';
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent,
    StructComponent,
    WordslistComponent,
    PersonComponent,
    PersonlistComponent,
    CardComponent,
    PipesComponent,
    RoundPipe,
    WeatherComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
