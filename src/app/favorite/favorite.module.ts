import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FavoritePage } from './favorite.page';



const routes: Routes = [
  {
    path: '',
    component: FavoritePage
  }
];

@NgModule({
	imports:[
	IonicModule,
	CommonModule,
	RouterModule.forChild(routes)
	],
	declarations: [
		FavoritePage
	],
	exports: [RouterModule]
})
export class FavoritePageModule{}
