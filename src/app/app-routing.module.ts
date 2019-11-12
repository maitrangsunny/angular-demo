import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';

import { ContactsComponent } from './components/contacts/contacts.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'contacts', component: ContactsComponent},
  {path: 'detail/:id', component: DetailsComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [ PageNotFoundComponent, ContactsComponent, DetailsComponent]
})
export class AppRoutingModule { }
