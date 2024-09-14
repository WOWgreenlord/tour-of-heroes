import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
