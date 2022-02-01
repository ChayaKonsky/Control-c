import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyComponent } from './components/copy/copy.component';
import { PasswordComponent } from './components/password/password.component';
import { PasteComponent } from './components/paste/paste.component';
const routers: Routes = [
  {path:'', redirectTo:'controlc',pathMatch:'full'},
  {path:'controlc', component: CopyComponent},
  {path:'controlc/:id', component: PasswordComponent},
  {path:'controlc/:id/paste', component: PasteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
