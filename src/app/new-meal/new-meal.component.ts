import { Component, OnInit } from '@angular/core';
import {Form, NgForm } from '@angular/forms';
import {MealService } from '../meal.service';
import {Meal} from '../meal.model';
import{ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {

  editMode: boolean;
  id: number;
  constructor(private mealService: MealService, private activatedRoute: ActivatedRoute) { 

  
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: Params)=>{

      this.editMode = param['id'] != null;
      this.id = +param['id'];
    });

    console.log(this.editMode);
  }

  onSubmit(form: NgForm){

    

    const name = form.value.name;
    const description = form.value.description
    const protein = form.value.protein;
    const carbs = form.value.carbs;
    const fat  = form.value.fat;

    let newMeal = new Meal(protein, carbs, fat, name, description, "");
    console.log(newMeal);
if(this.editMode == false ){
    this.mealService.meals.push(newMeal);
  }
else this.mealService.meals[this.id] = newMeal;
}
}
