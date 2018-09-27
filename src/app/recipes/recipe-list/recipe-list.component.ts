import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] =[
  new Recipe('A test','simple test','https://www.maxpixel.net/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg')
];
@Output() wasselected =new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.wasselected.emit(recipe);


  }
}
