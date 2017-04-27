import { Component, OnInit } from '@angular/core';
import {MealService} from '../../meal.service';
import {Meal} from '../../meal.model';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  meals: Meal[];
  subscription: Subscription

  constructor(private mealService: MealService) { }

  ngOnInit() {

     this.subscription = this.mealService.mealAdded.subscribe((meals: Meal[])=>{
      this.meals = meals;
    });
    this.meals = this.mealService.getMeals();
  }

}
