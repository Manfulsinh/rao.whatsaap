import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallpagePage } from './callpage.page';

const routes: Routes = [
  {
    path: '',
    component: CallpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallpagePageRoutingModule {}
