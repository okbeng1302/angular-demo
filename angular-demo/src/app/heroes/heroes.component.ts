import {
	Component,
	OnInit
} from '@angular/core';

import {
	Hero
} from "../hero"
//import {HEROES} from "../mock-heroes"
import {
	HeroService
} from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	constructor(private heroService: HeroService) {}

	ngOnInit() {

		this.getHeroes();

	}

	/*
	 * 数据双向绑定
	 */
	hero: Hero = {
		id: 1,
		name: "王晓滨"
	}

	/*
	 * (*ngFor)列表  
	 */
	//	heroes = HEROES;

	/*
	 * 使用service
	 */
		heroes: Hero[];
			getHeroes(): void {
					this.heroes = this.heroService.getHeroes();
				}

//	getHeroes(): void {
//		this.heroService.getHeroesRxjs()
//			.subscribe(heroes => 
//				this.heroes = heroes
//			);
//	}

	/*
	 * (click) 点击事件   *ngIf 来根据条件包含或排除了一段 HTML
	 */
//	selectedHero: Hero;
//
//	onSelect(hero: Hero): void {
//		this.selectedHero = hero;
//	}
}