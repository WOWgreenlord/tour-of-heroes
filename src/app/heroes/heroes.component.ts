import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../helpers/services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../helpers/services/message.service';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes))
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
