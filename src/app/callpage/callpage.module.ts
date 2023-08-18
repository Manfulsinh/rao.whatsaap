import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallpagePageRoutingModule } from './callpage-routing.module';

import { CallpagePage } from './callpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallpagePageRoutingModule
  ],
  declarations: [CallpagePage]
})
export class CallpagePageModule {}
