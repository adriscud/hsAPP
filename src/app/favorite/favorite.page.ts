import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card/shared/card.service';
import { Card } from '../card/shared/card.model';
import { LoaderService } from '../shared/service/loader.service';
import { AlertService } from '../shared/service/alert.service';
import { FavoriteCardStore } from '../card/shared/card-favorite.store';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-favorite',
	templateUrl: './favorite.page.html',
})
	
export class FavoritePage  {
	favoriteCardList: Card[] = []
  	favoriteCardSub: Subscription;
	constructor(private favoriteCardStore: FavoriteCardStore){}

  ionViewWillEnter(){
    console.log('LOG FROM CONSTRUCTOR');
    this.favoriteCardSub = this.favoriteCardStore.favoriteCards.subscribe(
    (favoriteCards:any) => {
      console.log('INSIDE OF SUBSCRIVE IN FAVORITE PAGE');
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