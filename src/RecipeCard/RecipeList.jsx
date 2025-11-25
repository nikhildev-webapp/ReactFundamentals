import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = () => {
    const recipes=[ {
    id: 1,
    name: "Spaghetti Aglio e Olio",
    category: "Italian",
    time: "20 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Spaghetti",
      "Garlic",
      "Olive Oil",
      "Red Chili Flakes",
      "Parsley",
      "Salt"
    ],
    instructions: "Boil pasta, sauté garlic in oil, add chili flakes, mix with spaghetti and garnish."
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    category: "Chinese",
    time: "25 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Rice",
      "Chicken",
      "Eggs",
      "Soy Sauce",
      "Carrots",
      "Peas",
      "Spring Onions"
    ],
    instructions: "Stir-fry chicken, add veggies, eggs, cooked rice, soy sauce and mix well."
  },
  {
    id: 3,
    name: "Veggie Sandwich",
    category: "Snack",
    time: "10 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Bread",
      "Tomato",
      "Cucumber",
      "Lettuce",
      "Cheese",
      "Butter"
    ],
    instructions: "Spread butter, add sliced veggies, cheese and toast lightly."
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    category: "Indian",
    time: "30 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Paneer",
      "Tomatoes",
      "Cream",
      "Butter",
      "Spices",
      "Ginger Garlic Paste"
    ],
    instructions: "Cook tomato gravy, add spices, butter, cream and paneer cubes."
  },
  {
    id: 5,
    name: "Avocado Salad",
    category: "Healthy",
    time: "15 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Avocado",
      "Tomato",
      "Cucumber",
      "Olive Oil",
      "Lemon Juice",
      "Salt"
    ],
    instructions: "Chop veggies, mix with lemon, olive oil and seasonings."
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    category: "Dessert",
    time: "35 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Flour",
      "Sugar",
      "Cocoa Powder",
      "Butter",
      "Eggs",
      "Chocolate"
    ],
    instructions: "Mix wet and dry ingredients, bake until set."
  },
  {
    id: 7,
    name: "Pancakes",
    category: "Breakfast",
    time: "20 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
      "Sugar",
      "Butter",
      "Baking Powder"
    ],
    instructions: "Make batter, cook pancakes on a pan, serve with honey."
  },
  {
    id: 8,
    name: "Tacos",
    category: "Mexican",
    time: "25 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Tortillas",
      "Beef/Chicken",
      "Lettuce",
      "Cheese",
      "Tomatoes",
      "Sauce"
    ],
    instructions: "Cook filling, assemble tacos with toppings."
  },
  {
    id: 9,
    name: "Smoothie Bowl",
    category: "Healthy",
    time: "8 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Banana",
      "Berries",
      "Milk/Yogurt",
      "Oats",
      "Honey",
      "Nuts"
    ],
    instructions: "Blend fruits, pour into bowl, top with nuts and oats."
  },
  {
    id: 10,
    name: "Margherita Pizza",
    category: "Italian",
    time: "30 min",
    image: "https://via.placeholder.com/300",
    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Basil",
      "Olive Oil"
    ],
    instructions: "Spread sauce, add cheese, bake and add basil toppings."
        }]
    
  return (
      <>
          <div>
              {recipes.map((items) => (
                  <RecipeCard
                      key={items.id}
                      Name={items.name}
                      category={items.category}
                      time={items.time}
                      image={items.image}
                      ingredients={items.ingredients}
                      instructions={items.instructions}
                  />                
            ))}    
          </div>
      </>
  )
}

export default RecipeList