import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroService } from './services/hero.service';
import { CalculatorService } from './services/calculator.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { ApodShowComponent } from './components/apod/apod-show/apod-show.component';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { ApodService } from './services/apod.service';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { ContainerComponent } from './components/forms/container/container.component';
import { TemplateValidationComponent } from './components/forms/template-validation/template-validation.component';
import { ReactiveValidationComponent } from './components/forms/reactive-validation/reactive-validation.component';
import { SwComponent } from './components/sw/sw/sw.component';
import { AppRoutingModule } from './app-routing.module';
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { CardComponent } from './components/trivial/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
    ApodComponent,
    ApodShowComponent,
    ApodPickerComponent,
    CountriesComponent,
    ContainerComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent,
    SwComponent,
    TrivialComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, CalculatorService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
