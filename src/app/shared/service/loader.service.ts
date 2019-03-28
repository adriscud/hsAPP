import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class LoaderService{
	private loader: HTMLIonLoadingElement;


	constructor(private loadingCtrl: LoadingController){}

	public async presentLoading(): Promise<HTMLIonLoadingElement>{
    this.loader = await this.loadingCtrl.create({
      message: 'Loading',
      translucent: true
    });
    this.loader.present();

    return this.loader;
  }

  public dimissLoading(){
  	if(this.loader) {
  		this.loader.dismiss();
  	}
  }
}



