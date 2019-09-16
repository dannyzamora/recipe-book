import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import{IRecipes} from '../recipes'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  recipes :IRecipes = {
    "image": "http://forkgasm.com/images/cheesecake.png",
    "name": "No-Bake Strawberry Cheesecake",
    "description": "A delicious low carb treat!",
    "tag": [
      "Dessert"
    ],
    "ingredient": [],
    "step": [
      {
        "description": "**Base:** \n1. In a medium frying pan, melt the ghee under low heat. \n2. Add the almond and coconut flour and stir continuously. \n3. It will look very runny at first, that's normal. When it starts darkening and becoming more viscous, add the cinnamon and sweetener. \n4. When it's light brown and most of the the ghee has been absorbed, it's about done. At that point, add the vanilla extract. It will foam, that's ok. Stir until it goes down again.\n5. Press into a 9\" springform cake tray. Let it cool down in the fridge."
      },
      {
        "description": "**Cream**: With a mixer beat the mascarpone on its own for a bit, then add icing sugar substitute to taste, then the rest of the ingredients. Blend until even. If you want the cheesecake to be extra fluffy, just beat it longer. Make sure the ghee in the bottom layer has solidified, then spread over the base in the cake tray. Put it back in the fridge."
      },
      {
        "description": "**Topping**: Blend half of the fruits and cut the other half into slices. Using a small pot, heat up the blended strawberries, Sukrin Gold, lemon juice and stir frequently until all heated up and mixed well. Add the gelatin slowly by sprinkling and stirring so that it doesn't clump. Then add the sliced fruits and stir. Simmer for a bit, then take it off the heat and let it cool down a bit. Once it starts getting viscous, spread it over the cream and put it back in the fridge."
      },
      {
        "description": "Chill in the fridge for at least 3 hours, then enjoy!"
      }
    ],
    "notes": "- We use Sukrin Gold and Sukrin Icing for sweetening. We've tried many and think those are as close as it gets to the sugar equivalents and have no aftertaste.\n- You can use less mascarpone, the middle layer will just be less thick. Adjust the rest of the quantities accordingly in that case.",
    "id": "cheesecake",
    "ingredientGroup": [
      {
        "name": "Base",
        "ingredient": [
          {
            "amount": "1.5",
            "unit": "cup",
            "name": "almond flour"
          },
          {
            "amount": "200",
            "unit": "g",
            "name": "butter or ghee"
          },
          {
            "name": "brown sugar substitute",
            "amount": "3",
            "unit": "tbsp"
          },
          {
            "name": "vanilla extract",
            "amount": "4",
            "unit": "tbsp"
          },
          {
            "name": "cinammon",
            "amount": "1",
            "unit": "tsp"
          },
          {
            "amount": "A pinch",
            "name": "salt"
          }
        ]
      },
      {
        "name": "Cream",
        "ingredient": [
          {
            "amount": "40",
            "unit": "oz",
            "name": "Mascarpone"
          },
          {
            "name": "icing sugar substitute",
            "amount": "4",
            "unit": "tbsp"
          },
          {
            "amount": "1",
            "name": "lemon",
            "preparation": "juiced"
          },
          {
            "amount": "2",
            "unit": "tbsp",
            "name": "vanilla extract"
          }
        ]
      },
      {
        "name": "Topping",
        "ingredient": [
          {
            "amount": "1",
            "unit": "lbs",
            "name": "strawberries or other berries"
          },
          {
            "name": "gelatin",
            "amount": "0.5",
            "unit": "scoop"
          },
          {
            "amount": "1",
            "name": "lemon",
            "preparation": "juiced"
          },
          {
            "name": "Sukrin Gold or similar",
            "amount": "2",
            "unit": "tbsp"
          }
        ]
      }
    ]
  }

  constructor() { }




  
  ngOnInit() {
    
  }

}
