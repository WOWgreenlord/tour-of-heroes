import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.log(error);
      
      //TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      //Let the app keep running by returning an empty result
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
