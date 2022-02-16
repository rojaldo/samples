import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { ContainerComponent } from './components/forms/container/container.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { SwComponent } from './components/sw/sw/sw.component';
import { YourGuard } from './guards/your-guard';

const routes: Routes = [
    { path: '', redirectTo: '/trivial', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod', component: ApodComponent },
    { path: 'beers', loadChildren: () => import('./modules/beers/beers.module').then(m => m.BeersModule) },
    { path: 'forms', component: ContainerComponent, canActivate: [YourGuard], },
    { path: 'pagination', component: SwComponent },
    { path: 'pagination/:page', component: SwComponent },
    { path: 'trivial', loadChildren: () => import('./modules/trivial/trivial-routing.module').then(m => m.TrivialRoutingModule) },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }