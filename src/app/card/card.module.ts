import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { CardDeckPage } from './card-deck/card-deck.page';
import { CardService } from './shared/card.service';
import { LoaderService } from '../shared/service/loader.service';
import { CardListComponent } from './components/card-list.component';
import { CardListingPage } from './card-listing/card-listing.page';
import { CardDetailPage } from './card-detail/card-detail.page';

import { ToastService } from '../shared/service/toast.service';
import { AlertService } from '../shared/service/alert.service';
import { SearchComponent } from '../shared/component/search/search.component';


const routes: Routes = [
  {
    path: '',
    component: CardDeckPage
  },
  {
    path: ':cardDeckGroup/:cardDeck',
    component: CardListingPage
  },
  {
    path: ':cardId',
    component: CardDetailPage
  }
];

@NgModule({
	imports:[
	IonicModule,
	CommonModule,
	HttpClientModule,
	RouterModule.forChild(routes)
	],
	providers: [
		CardService,
		LoaderService,
		ToastService,
		AlertService
	],
	declarations: [
		CardDeckPage,
		CardListingPage,
		CardListComponent,
		CardDetailPage,
		SearchComponent,
	],
	exports: [RouterModule]
})
export class CardPageModule{}
