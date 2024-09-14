import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../helpers/services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';



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

  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
