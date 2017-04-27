import { Injectable, OnInit } from '@angular/core';
import {Meal} from './meal.model';
import {Subject} from 'rxjs/Subject'

@Injectable()

export class MealService implements OnInit {

  meals: Meal[] = [];
  constructor() {
  const meal1 = new Meal(10,10,10,"Test 1", "A Test Meal", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhU-HLQxLyu_fr1XJZcMyUzI0DhIBEIAp9VTThOAtDaKV_PXEvQmOxFT3w");
  const meal2 = new Meal(20, 20, 20, "Test 2", "A Test Meal Again", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhU-HLQxLyu_fr1XJZcMyUzI0DhIBEIAp9VTThOAtDaKV_PXEvQmOxFT3w");
  this.meals.push(meal1, meal2);
  console.log(this.meals);
   }

  mealAdded = new Subject<Meal[]>();

  getMeals() : Meal[]{
    return this.meals;
  }

  getMeal(index: number): Meal {
    return this.meals[index];
  }

ngOnInit(){


}
}
