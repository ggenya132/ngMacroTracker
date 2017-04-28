import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { MealItemComponent } from './meals/meal-item/meal-item.component';
import { MealDetailComponent } from './meals/meal-detail/meal-detail.component';
import { HeaderComponent } from './header/header.component';
import { MealStartComponent } from './meal-start/meal-start.component';
import {MealService} from './meal.service';
import {DropdownDirective} from './dropdown.directive';
import { NewMealComponent } from './new-meal/new-meal.component';
@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealListComponent,
    MealItemComponent,
    MealDetailComponent,
    HeaderComponent,
    MealStartComponent,
    DropdownDirective,
    NewMealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
