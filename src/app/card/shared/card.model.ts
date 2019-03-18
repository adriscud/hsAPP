

export interface CardDeck {
	name: string;
	types: string[];
}

export interface Card {
	//attack: number;
	cardId: string;
	cardSet: string;
	cost: number;
	dbfId: string;
	//faction: string;
	//health: number;
	img: string;
	imgGold: string;
	locale: string;
	name: string;
	playerClass: string;
	text: string;
	//rarity: string;
	type: string;
	favorite:boolean;
}