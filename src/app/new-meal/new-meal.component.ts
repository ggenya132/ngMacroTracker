import { Component, OnInit } from '@angular/core';
import {Form, NgForm } from '@angular/forms';
import {MealService } from '../meal.service';
import {Meal} from '../meal.model';
@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {

  constructor(private mealService: MealService) { 


  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

    const name = form.value.name;
    const description = form.value.description
    const protein = form.value.protein;
    const carbs = form.value.carbs;
    const fat  = form.value.fat;

    let newMeal = new Meal(protein, carbs, fat, name, description, "");
    console.log(newMeal);

    this.mealService.meals.push(newMeal);
  }

}
