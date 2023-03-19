import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LonginComponent } from './components/longin/longin.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { RegisterComponent } from './components/register/register.component';
import { PlayersComponent } from './components/players/players.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'components', component: HeaderComponent },
  { path: 'login', component: LonginComponent, pathMatch: "full"  },
  { path: 'components', component: FooterComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'register', component: RegisterComponent, pathMatch: "full" },
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
