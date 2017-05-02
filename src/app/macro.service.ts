import { Injectable } from '@angular/core';
import {Meal} from './meal.model';
import {MealService} from './meal.service';
@Injectable()
export class MacroService {

  traingingMacros: Meal = null;
  restingMacros: Meal = null;

  macrosRemaining: number;
  
  constructor(private mealService: MealService) {

    
   }

}
