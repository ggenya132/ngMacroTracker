import { Component, OnInit } from '@angular/core';
import {MealService} from '../../meal.service';
import {Meal} from '../../meal.model';
import { Subscription } from 'rxjs/Subscription';
import {RouterLink, Router, ActivatedRoute} from '@angular/router';
import {EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  setMacros: boolean = false;
   @Output() macrosTriggered: EventEmitter<boolean> = new EventEmitter<boolean>();
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

onSetMacros(){
  this.setMacros = true; 
  this.macrosTriggered.emit(this.setMacros);
  console.log(this.setMacros);
}
}
