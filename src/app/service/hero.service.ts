import { Injectable } from '@angular/core';
import { Hero }       from '../Hero';
import { HEROES }     from '../service/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]>{
      return Promise.resolve(HEROES);
  }

  getHeroesSlowly():Promise<Hero[]>{
    //Simulate server latency with 2 second delay
    console.log("the heroes data will be loaded after 2 seconds");
    return new Promise(resolve =>{
      setTimeout(() => resolve(this.getHeroes()),2000)
    });
  }
  getHero(id:number): Promise<Hero>{
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
