import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { BeersComponent } from '../../components/beers/beers/beers.component';
import { AbvPipe } from '../../pipes/abv.pipe';
import { FromDatePipe } from '../../pipes/from-date.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    BeersComponent,
    AbvPipe,
    FromDatePipe,
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    NgxSliderModule,

  ]
})
export class BeersModule { }
