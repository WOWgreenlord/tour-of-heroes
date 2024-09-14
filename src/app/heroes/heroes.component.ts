import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../helpers/services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../helpers/services/message.service';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService) {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes))
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
