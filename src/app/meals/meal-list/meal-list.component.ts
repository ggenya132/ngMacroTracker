import { Component, OnInit } from '@angular/core';
import {MealService} from '../../meal.service';
import {Meal} from '../../meal.model';
import { Subscription } from 'rxjs/Subscription';
import {RouterLink, Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  meals: Meal[];
  subscription: Subscription

  constructor(private mealService: MealService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

     this.subscription = this.mealService.mealAdded.subscribe((meals: Meal[])=>{
      this.meals = meals;
    });
    this.meals = this.mealService.getMeals();
  }

  onNewMeal(){
    this.router.navigate(['newmeal'], {relativeTo: this.activatedRoute})
  }

}
