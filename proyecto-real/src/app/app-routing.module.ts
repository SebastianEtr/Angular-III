import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { HomeComponent } from './components/home/home.component';
import { StorageGuard } from './Storages/storage.guard';

const routes: Routes = [
  {path: "Home", component:HomeComponent},
  {path: "country-list",  component: CountryListComponent, canActivate:[StorageGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
