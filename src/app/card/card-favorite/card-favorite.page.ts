import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';
import { Card } from '../shared/card.model';
import { LoaderService } from '../../shared/service/loader.service';
import { AlertService } from '../../shared/service/alert.service';
import { FavoriteCardStore } from '../shared/card-favorite.store';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-card-favorite',
	templateUrl: './card-favorite.page.html',
})
	
export class CardFavoritePage  {
	favoriteCardList: Card[] = []
  	favoriteCardSub: Subscription;
	constructor(private favoriteCardStore: FavoriteCardStore){
		this.favoriteCardSub = this.favoriteCardStore.favoriteCards.subscribe(
      (favoriteCards:any) => {
        this.favoriteCardList = this.getFavoriteCardList(favoriteCards);
        console.log(this.favoriteCardList);
      })
	}
	ionViewDidLeave(){
      if(this.favoriteCardSub && !this.favoriteCardSub.closed){
        this.favoriteCardSub.unsubscribe();
      }
      return 
    }

    private getFavoriteCardList(favoriteCards: any): Card[] {
      if (favoriteCards) {
        return Object.keys(favoriteCards)
          .filter(key => favoriteCards[key])
          .map(key => favoriteCards[key])
      }

      return [];
    }

}