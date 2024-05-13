import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditregisterPage } from './editregister.page';

const routes: Routes = [
  {
    path: '',
    component: EditregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditregisterPageRoutingModule {}
