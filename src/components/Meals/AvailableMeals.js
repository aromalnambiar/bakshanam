import React from 'react'
import styles from './MealsSummary.module.css'
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Burger",
    description: "Delicious beef burger with all the toppings",
    price: 9.99,
    imageLink: "https://images.pexels.com/photos/416281/pexels-photo-416281.jpeg",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Classic margherita pizza with fresh mozzarella",
    price: 12.99,
    imageLink: "https://images.pexels.com/photos/1633210/pexels-photo-1633210.jpeg",
  },
  {
    id: 3,
    name: "Salad",
    description: "Fresh garden salad with mixed greens and vinaigrette",
    price: 6.99,
    imageLink: "https://images.pexels.com/photos/1440346/pexels-photo-1440346.jpeg",
  },
  {
    id: 4,
    name: "Pasta",
    description: "Spaghetti with homemade tomato sauce and meatballs",
    price: 11.49,
    imageLink: "https://images.pexels.com/photos/542213/pexels-photo-542213.jpeg",
  },
  {
    id: 5,
    name: "Sushi",
    description: "Assorted sushi rolls with wasabi and soy sauce",
    price: 15.99,
    imageLink: "https://images.pexels.com/photos/762508/pexels-photo-762508.jpeg",
  },
  {
    id: 6,
    name: "Steak",
    description: "Juicy grilled steak with a side of mashed potatoes",
    price: 19.99,
    imageLink: "https://images.pexels.com/photos/1640755/pexels-photo-1640755.jpeg",
  },
  {
    id: 7,
    name: "Chicken Wrap",
    description: "Grilled chicken in a wrap with lettuce and ranch dressing",
    price: 8.99,
    imageLink: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  },
  {
    id: 8,
    name: "Fried Rice",
    description: "Vegetable fried rice with your choice of protein",
    price: 10.99,
    imageLink: "https://images.pexels.com/photos/1633210/pexels-photo-1633210.jpeg",
  },
  {
    id: 9,
    name: "Taco",
    description: "Taco with seasoned ground beef, lettuce, and cheese",
    price: 7.49,
    imageLink: "https://images.pexels.com/photos/1440346/pexels-photo-1440346.jpeg",
  },
  {
    id: 10,
    name: "Ice Cream",
    description: "Vanilla ice cream with chocolate syrup and sprinkles",
    price: 4.99,
    imageLink: "https://images.pexels.com/photos/1440346/pexels-photo-1440346.jpeg",
  },
];

  

function AvailableMeals() {


  return (
    <Card>
      <div className={`grid grid-cols-2 gap-4 justify-center items-center `} >
            {DUMMY_MEALS?.map((item) => (
              <div className="flex items-center justify-center" key={item.id}>
                <MealItem  data={item} />
              </div>
            ))}
        </div>
    </Card>
    
  )
}

export default AvailableMeals