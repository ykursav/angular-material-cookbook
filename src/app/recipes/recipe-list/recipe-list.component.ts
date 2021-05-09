import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    ),
    new Recipe(
      'Musakka', 
      'It is made with eggplant.', 
      'http://turkeysforlife.com/wp-content/uploads/2010/10/turkish-musakka-recipe-easy.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
