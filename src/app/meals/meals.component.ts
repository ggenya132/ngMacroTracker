import { Component, OnInit } from '@angular/core';
import {MealService} from '../meal.service';
import {Meal} from '../meal.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  setMacros = false; 

  constructor(private mealService: MealService) { }

  ngOnInit() {
 
  }

onMacroSet(event: boolean){

  this.setMacros = event;
}

onCloseMacros(event: boolean){
  this.setMacros = event; 
}

}
