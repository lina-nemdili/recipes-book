import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn:'root'})
export class DataStorageService{

constructor(private http:HttpClient ,private recipeService:RecipeService){


}

storeRecipes(){
const recipes=this.recipeService.getRecipes();
return this.http.put('https://ng-project-8fd20-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',

recipes).
subscribe(response=>{
    console.log(recipes);
});

}''

fetchRecipes(){

    this.http.get<Recipe[]>('https://ng-project-8fd20-default-rtdb.europe-west1.firebasedatabase.app/recipes.json').
    subscribe(
        recipes=>{
            this.recipeService.setRecipes(recipes);
        }

    )
}
}