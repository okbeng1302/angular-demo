import {
	Injectable
} from '@angular/core';

import {
	Hero
} from './hero';
import {
	HEROES
} from './mock-heroes';

import {
	Observable,
} from 'rxjs';

import {
	MessageService
} from './message.service';

@Injectable()
export class HeroService {

	constructor(private messageService: MessageService) {}

	/* 	
	 * 模拟数据源,获取数据
	 */
	getHeroes(): Hero[] {
		this.messageService.add('HeroService: fetched heroes');

		return HEROES;
	}

	/*
	 * rxjs 库
	 */
	getHeroesRxjs(): Observable < Hero[] > {
		return Observable.of(HEROES);
	}

	getHero(id: number): Observable < Hero > {
		// Todo: send the message _after_ fetching the hero
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return Observable.of(HEROES.find(hero => hero.id === id));
	}
}