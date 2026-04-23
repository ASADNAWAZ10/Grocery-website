import v1 from './v1.jpg'
import v2 from './v2.jpg'
import v3 from './v3.jpg'
import v4 from './v4.jpg'
import v5 from './v5.jpg'
import remove from '../assets/remove.png'
import upload_area from '../assets/upload_area.png'
import boxIcon from '../assets/boxIcon.png'
import ColdDrink from './ColdDrink.jpg'
import fruits from './fruits.jpg'
import organic from './organic.jpg'
import instantfood from './instantfood.jpg'
import dairyProducts from './dairyProducts.jpg'
import breads from './breads.jpg'
import rightArrow from '../assets/rightArrow.png'
import vegetables from './vegetables.jpg'
import star_Icon from '../assets/star_Icon.jpg'
import starIcon from '../assets/starIcon.jpg'
import BottomBanners from './BottomBanners.jpg'
import bottombanner_sm from './bottombanner_sm.jpg'
import icecream from '../assets/icecream.jpg'
import butter from '../assets/butter.jpg'
import leaf_icon from './leaf_icon.jpg'
import loveIcon from './loveIcon.jpg'
import DeliveryIcon from './DeliveryIcon.jpg'
import coinIcon from './coinIcon.jpg'
import logo from './logo.jpg'
import pepsi from '../assets/pepsi.jpg'
import redAnner from '../assets/redAnner.jpg'
import AddAddress from '../assets/AddAddress.png'
import EnergyDrink from '../assets/EnergyDrink.jpg'
import sprite from '../assets/sprite.jpg'
import Apple from '../assets/Apple.jpg'
import orange from '../assets/orange.jpg'
import Mango from '../assets/Mango.jpg'
import cheese from '../assets/cheese.jpg'
import yogurt from '../assets/yogurt.jpg'
import banana from '../assets/banana.jpg'
import cocacola from '../assets/cocacola.jpg'
import bananabread from '../assets/bananabread.jpg'
import biscuit from '../assets/biscuit.jpg'
import cakes from '../assets/cakes.jpg'
import pitabread from '../assets/pitabread.jpg'
import lime from '../assets/lime.jpg'
import Milk from '../assets/Milk.jpg'

import potochips from '../assets/potochips.jpg'

export const categories = [

    {
        text: 'Fresh Fruits',
        path: "Fruits",
        image: fruits,
        bgColor: '#FEFF0E0'
    },

   
    {
        text: 'Cold Drinks',
        path: 'cold-drinks',
        image: ColdDrink,
        bgColor: '#F0F5DE'
    },

   
    {
        text: 'Orangic veggies',
        path: 'organic-vegetables',
        image: organic,
        bgColor: "#FEF6DA",
    },

    
    {
        text: 'Instant Food',
        path: 'instant-food',
        image: instantfood,
        bgColor: '#E1F5EC'
    },

    

    {
        text: 'Dairy Products',
        path: 'dairy',
        image: dairyProducts,
        bgColor: "#FEF6DA",
    },

    {
        text: 'Bakery & Breads',
        path: 'bakery',
        image: breads,
        bgColor: "#F1E3F9",
    },


    {
        text: 'Vegetables',
        path: "Vegetables",
        image: vegetables,
        bgColor: '#FEFF0E0'
    },

]

export const dummyProduct = [

    // Organic Vegetables
    {
      _id: "1",
      name: "Organic Spinach",
      category: "organic-vegetables",
      price: 4,
      offerPrice: 3.5,
      images: ["/images/spinach1.jpg","/images/spinach2.jpg","/images/spinach3.jpg","/images/spinach4.jpg"],
      description: "Fresh organic spinach grown without chemicals.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "2",
      name: "Organic Carrot",
      category: "organic-vegetables",
      price: 3,
      offerPrice: 2.5,
      images: ["/images/orgcarrot1.jpg","/images/orgcarrot2.jpg","/images/orgcarrot3.jpg","/images/orgcarrot4.jpg"],
      description: "Healthy organic carrots.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "3",
      name: "Organic Tomato",
      category: "organic-vegetables",
      price: 3.5,
      offerPrice: 3,
      images: ["/images/orgtomato1.jpg","/images/orgtomato2.jpg","/images/orgtomato3.jpg","/images/orgtomato4.jpg"],
      description: "Farm fresh organic tomatoes.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "4",
      name: "Organic Cucumber",
      category: "organic-vegetables",
      price: 2.8,
      offerPrice: 2.4,
      images: ["/images/orgcucumber1.jpg","/images/orgcucumber2.jpg","/images/orgcucumber3.jpg","/images/orgcucumber4.jpg"],
      description: "Fresh organic cucumbers.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "5",
      name: "Organic Broccoli",
      category: "organic-vegetables",
      price: 4.2,
      offerPrice: 3.8,
      images: ["/images/orgbroccoli1.jpg","/images/orgbroccoli2.jpg","/images/orgbroccoli3.jpg","/images/orgbroccoli4.jpg"],
      description: "Nutritious organic broccoli.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
  
    // Instant Food
    {
      _id: "6",
      name: "Instant Noodles",
      category: "instant-food",
      price: 1,
      offerPrice: 0.9,
      images: ["/images/noodles1.jpg","/images/noodles2.jpg","/images/noodles3.jpg","/images/noodles4.jpg"],
      description: "Quick cooking noodles.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "7",
      name: "Cup Noodles",
      category: "instant-food",
      price: 1.5,
      offerPrice: 1.3,
      images: ["/images/cupnoodles1.jpg","/images/cupnoodles2.jpg","/images/cupnoodles3.jpg","/images/cupnoodles4.jpg"],
      description: "Ready to eat noodles.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "8",
      name: "Instant Pasta",
      category: "instant-food",
      price: 2,
      offerPrice: 1.8,
      images: ["/images/pasta1.jpg","/images/pasta2.jpg","/images/pasta3.jpg","/images/pasta4.jpg"],
      description: "Quick pasta meal.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "9",
      name: "Instant Soup",
      category: "instant-food",
      price: 1.2,
      offerPrice: 1,
      images: ["/images/soup1.jpg","/images/soup2.jpg","/images/soup3.jpg","/images/soup4.jpg"],
      description: "Hot instant soup.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "10",
      name: "Frozen Pizza",
      category: "instant-food",
      price: 4,
      offerPrice: 3.5,
      images: ["/images/pizza1.jpg","/images/pizza2.jpg","/images/pizza3.jpg","/images/pizza4.jpg"],
      description: "Ready to bake pizza.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
  
    // Cold Drinks
    {
      _id: "11",
      name: "Coca Cola",
      category: "cold-drinks",
      price: 1.5,
      offerPrice: 1.3,
      images: ["/images/coke1.jpg","/images/coke2.jpg","/images/coke3.jpg","/images/coke4.jpg"],
      description: "Refreshing cola drink.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "12",
      name: "Pepsi",
      category: "cold-drinks",
      price: 1.5,
      offerPrice: 1.3,
      images: ["/images/pepsi1.jpg","/images/pepsi2.jpg","/images/pepsi3.jpg","/images/pepsi4.jpg"],
      description: "Chilled Pepsi drink.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "13",
      name: "Sprite",
      category: "cold-drinks",
      price: 1.4,
      offerPrice: 1.2,
      images: ["/images/sprite1.jpg","/images/sprite2.jpg","/images/sprite3.jpg","/images/sprite4.jpg"],
      description: "Lemon flavored drink.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "14",
      name: "Fanta",
      category: "cold-drinks",
      price: 1.4,
      offerPrice: 1.2,
      images: ["/images/fanta1.jpg","/images/fanta2.jpg","/images/fanta3.jpg","/images/fanta4.jpg"],
      description: "Orange flavored soda.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "15",
      name: "7UP",
      category: "cold-drinks",
      price: 1.4,
      offerPrice: 1.2,
      images: ["/images/7up1.jpg","/images/7up2.jpg","/images/7up3.jpg","/images/7up4.jpg"],
      description: "Refreshing lemon soda.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
  
    // Bakery
    {
      _id: "16",
      name: "White Bread",
      category: "bakery",
      price: 2,
      offerPrice: 1.8,
      images: ["/images/bread1.jpg","/images/bread2.jpg","/images/bread3.jpg","/images/bread4.jpg"],
      description: "Soft bakery bread.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "17",
      name: "Croissant",
      category: "bakery",
      price: 2.5,
      offerPrice: 2.2,
      images: ["/images/croissant1.jpg","/images/croissant2.jpg","/images/croissant3.jpg","/images/croissant4.jpg"],
      description: "Buttery croissant.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "18",
      name: "Chocolate Cake",
      category: "bakery",
      price: 8,
      offerPrice: 7,
      images: ["/images/cake1.jpg","/images/cake2.jpg","/images/cake3.jpg","/images/cake4.jpg"],
      description: "Delicious chocolate cake.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "19",
      name: "Donut",
      category: "bakery",
      price: 1.8,
      offerPrice: 1.5,
      images: ["/images/donut1.jpg","/images/donut2.jpg","/images/donut3.jpg","/images/donut4.jpg"],
      description: "Sweet glazed donut.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "20",
      name: "Muffin",
      category: "bakery",
      price: 2,
      offerPrice: 1.7,
      images: ["/images/muffin1.jpg","/images/muffin2.jpg","/images/muffin3.jpg","/images/muffin4.jpg"],
      description: "Soft bakery muffin.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
  
    // Dairy Products
    {
      _id: "21",
      name: "Milk",
      category: "dairy",
      price: 2,
      offerPrice: 1.8,
      images: ["/images/milk1.jpg","/images/milk2.jpg","/images/milk3.jpg","/images/milk4.jpg"],
      description: "Fresh dairy milk.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "22",
      name: "Cheese",
      category: "dairy",
      price: 3.5,
      offerPrice: 3,
      images: ["/images/cheese1.jpg","/images/cheese2.jpg","/images/cheese3.jpg","/images/cheese4.jpg"],
      description: "Creamy cheese slices.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "23",
      name: "Butter",
      category: "dairy",
      price: 2.8,
      offerPrice: 2.4,
      images: ["/images/butter1.jpg","/images/butter2.jpg","/images/butter3.jpg","/images/butter4.jpg"],
      description: "Rich dairy butter.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "24",
      name: "Yogurt",
      category: "dairy",
      price: 1.8,
      offerPrice: 1.5,
      images: ["/images/yogurt1.jpg","/images/yogurt2.jpg","/images/yogurt3.jpg","/images/yogurt4.jpg"],
      description: "Healthy yogurt.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },
    {
      _id: "25",
      name: "Cream",
      category: "dairy",
      price: 2.2,
      offerPrice: 1.9,
      images: ["/images/cream1.jpg","/images/cream2.jpg","/images/cream3.jpg","/images/cream4.jpg"],
      description: "Fresh dairy cream.",
      createdAt: new Date(),
      updatedAt: new Date(),
      inStock: true
    },

  // Fruits
      {
        _id: "26",
        name: "Apple",
        price: 4.5,
        offerPrice: 3.9,
        category: "Fruits",
        images: [
          "/images/apple1.jpg",
          "/images/apple2.jpg",
          "/images/apple3.jpg",
          "/images/apple4.jpg"
        ],
        description: "Fresh and juicy red apples rich in fiber and vitamins.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "27",
        name: "Banana",
        price: 2.5,
        offerPrice: 2.0,
        category: "Fruits",
        images: [
          "/images/banana1.jpg",
          "/images/banana2.jpg",
          "/images/banana3.jpg",
          "/images/banana4.jpg"
        ],
        description: "Sweet bananas full of potassium and energy.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "28",
        name: "Mango",
        price: 6.0,
        offerPrice: 5.2,
        category: "Fruits",
        images: [
          "/images/mango1.jpg",
          "/images/mango2.jpg",
          "/images/mango3.jpg",
          "/images/mango4.jpg"
        ],
        description: "Delicious tropical mango with rich flavor and aroma.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "29",
        name: "Orange",
        price: 3.5,
        offerPrice: 3.0,
        category: "Fruits",
        images: [
          "/images/orange1.jpg",
          "/images/orange2.jpg",
          "/images/orange3.jpg",
          "/images/orange4.jpg"
        ],
        description: "Citrus oranges packed with vitamin C and freshness.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "30",
        name: "Strawberry",
        price: 7.0,
        offerPrice: 6.2,
        category: "Fruits",
        images: [
          "/images/strawberry1.jpg",
          "/images/strawberry2.jpg",
          "/images/strawberry3.jpg",
          "/images/strawberry4.jpg"
        ],
        description: "Fresh strawberries with sweet taste and rich antioxidants.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      // Vegetables
      {
        _id: "31",
        name: "Tomato",
        price: 2.2,
        offerPrice: 1.8,
        category: "Vegetables",
        images: [
          "/images/tomato1.jpg",
          "/images/tomato2.jpg",
          "/images/tomato3.jpg",
          "/images/tomato4.jpg"
        ],
        description: "Fresh red tomatoes perfect for salads and cooking.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "32",
        name: "Potato",
        price: 1.8,
        offerPrice: 1.5,
        category: "Vegetables",
        images: [
          "/images/potato1.jpg",
          "/images/potato2.jpg",
          "/images/potato3.jpg",
          "/images/potato4.jpg"
        ],
        description: "High-quality potatoes ideal for fries and curries.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "33",
        name: "Spinach",
        price: 2.0,
        offerPrice: 1.6,
        category: "Vegetables",
        images: [
          "/images/spinach1.jpg",
          "/images/spinach2.jpg",
          "/images/spinach3.jpg",
          "/images/spinach4.jpg"
        ],
        description: "Fresh green spinach rich in iron and nutrients.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "34",
        name: "Carrot",
        price: 2.3,
        offerPrice: 1.9,
        category: "Vegetables",
        images: [
          "/images/carrot1.jpg",
          "/images/carrot2.jpg",
          "/images/carrot3.jpg",
          "/images/carrot4.jpg"
        ],
        description: "Crunchy carrots full of vitamin A and antioxidants.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      },
    
      {
        _id: "35",
        name: "Cabbage",
        price: 3.0,
        offerPrice: 2.5,
        category: "Vegetables",
        images: [
          "/images/cabbage1.jpg",
          "/images/cabbage2.jpg",
          "/images/cabbage3.jpg",
          "/images/cabbage4.jpg"
        ],
        description: "Fresh cabbage perfect for salads and healthy meals.",
        createdAt: "2026-03-14",
        updatedAt: "2026-03-14"
      }
  ];

export const dummyProducts = [
    //vegetables
    {
        _id: "fd46g23h",
        name: "Pototo 500g",
        category: "vegetables",
        price: 29,
        offerPrice: 30,
       
        image: [v1, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g24h",
        name: "tomato 500g",
        category: "vegetables",
        price: 26,
        offerPrice: 30,
       
        image: [v1, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },


    {
        _id: "fd46g25h",
        name: "carrot 500g",
        category: "vegetables",
        price: 26,
        offerPrice: 30,
       
        image: [v1, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },



    {
        _id: "fd46g26h",
        name: "Pototo 500g",
        category: "vegetables",
        price: 26,
        offerPrice: 30,
       
        image: [v1, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g27h",
        name: "Pototo 500g",
        category: "vegetables",
        price: 26,
        offerPrice: 30,
       
        image: [v1, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    //Fruits
    {
        _id: "fd46g28h",
        name: "Apple",
        category: "fruits",
        price: 26,
        offerPrice: 30,
       
        image: [Apple, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g29h",
        name: "Mango",
        category: "fruits",
        price: 26,
        offerPrice: 30,
       
        image: [Mango, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g30h",
        name: "banana",
        category: "fruits",
        price: 26,
        offerPrice: 30,
       
        image: [banana, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g31h",
        name: "Orange",
        category: "fruits",
        price: 26,
        offerPrice: 30,
       
        image: [orange, v2, v3, v4, v5],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g32h",
        name: "Lime",
        category: "fruits",
        price: 26,
        offerPrice: 30,
       
        image: [lime, banana, orange, Mango],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    //ColdDrinks
    {
        _id: "fd46g23h",
        name: "Pepsi",
        category: "cold drinks",
        price: 50,
        offerPrice: 40,
        // Rating: starIcon,
        image: [pepsi],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g25h",
        name: "tomato 1kg",
        category: "cold drinks",
        price: 50,
        offerPrice: 40,
        // Rating: starIcon,
        image: [sprite],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd46g25h",
        name: "Energy Drinks",
        category: "cold drinks",
        price: 50,
        offerPrice: 40,
       
        image: [EnergyDrink],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "CoCa-Cola",
        category: "cold drinks",
        price: 50,
        offerPrice: 240,
       
        image: [cocacola],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Red Anner",
        category: "cold drinks",
        price: 50,
        offerPrice: 140,
       
        image: [redAnner],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    //Bakery and Breads
    {
        _id: "fd47g25h",
        name: "bananaBread",
        category: "grains",
        price: 50,
        offerPrice: 40,
       
        image: [bananabread],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Biscuits",
        category: "grains",
        price: 50,
        offerPrice: 40,
       
        image: [biscuit],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Cakes",
        category: "grains",
        price: 50,
        offerPrice: 40,
       
        image: [cakes],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Breads",
        category: "grains",
        price: 40,
        offerPrice: 30,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "PitaBread",
        category: "grains",
        price: 50,
        offerPrice: 40,
       
        image: [pitabread],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },


     //Dairy Products
     {
        _id: "fd47g25h",
        name: "Ice Cream",
        category: "dairy",
        price: 50,
        offerPrice: 40,
       
        image: [icecream],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },
 
    {
        _id: "fd47g25h",
        name: "Cheese",
        category: "dairy",
        price: 50,
        offerPrice: 40,
       
        image: [cheese],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Yogurt",
        category: "dairy",
        price: 50,
        offerPrice: 40,
       
        image: [yogurt],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Milk",
        category: "dairy",
        price: 50,
        offerPrice: 40,
       
        image: [Milk],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "Butter",
        category: "dairy",
        price: 50,
        offerPrice: 40,
       
        image: [butter],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    //Instant food
    
    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "instantfood",
        price: 50,
        offerPrice: 40,
       
        image: [potochips],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "instantfood",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "instantfood",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "instantfood",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    
    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "instantfood",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },




      //Orangic
      {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "organic",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "organic",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "organic",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "organic",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    {
        _id: "fd47g25h",
        name: "tomato 1kg",
        category: "organic",
        price: 50,
        offerPrice: 40,
       
        image: [breads],
        description: [
            "fresh and organic",
            'rich in carbohydrates',
            'ideal for curries and fies'
        ],
        createdAt: '2026-03-20T07:17:46.018z',
        updatedAt: '2026-03-20T07:17:13.103z',
        inStock: true,
    },

    
]

export const features = [
    {
        icon: DeliveryIcon,
        title: 'Fastest Delivery',
        description: "Groceries delivery",
    },

    {
        icon: leaf_icon,
        title: 'Freshness Guaranted',
        description: 'Fresh produce straight from the source'
    },

    {

        icon: coinIcon,
        title: 'Afordable Prices',
        description: 'Quality groceries of unbeatable prices'

    },

    {
        icon: loveIcon,
        title: 'Trusted by Thousands',
        description: "Leaved by 10,000+happy customers"
    }


]

export const footerLinks = [
    {
        title: "Quick Links", 
        links: [
            {text: 'Home', url:"#"},
            {text: 'Best Seller', url:"#"},
            {text: 'Offer & Deals', url:"#"},
            {text: 'Contact Us', url:"#"},
            {text: 'FAQs', url:"#"},
        ]
    },

    {
        title: "Need help?", 
        links: [
            {text: 'Home', url:"#"},
            {text: 'Best Seller', url:"#"},
            {text: 'Offer & Deals', url:"#"},
            {text: 'Contact Us', url:"#"},
            {text: 'FAQs', url:"#"},
        ]
    },

    {
        title: "Need help?", 
        links: [
            {text: 'Home', url:"#"},
            {text: 'Best Seller', url:"#"},
            {text: 'Offer & Deals', url:"#"},
            {text: 'Contact Us', url:"#"},
            {text: 'FAQs', url:"#"},
        ]
    },

    {
        title: "Need help?", 
        links: [
            {text: 'Home', url:"#"},
            {text: 'Best Seller', url:"#"},
            {text: 'Offer & Deals', url:"#"},
            {text: 'Contact Us', url:"#"},
            {text: 'FAQs', url:"#"},
        ]
    }
]

export const dummyAddress = [
    {
      "id": 1,
      "street": "123 Green Valley Road",
      "city": "Springfield",
      "state": "Illinois",
      "country": "United States"
    },
    {
      "id": 2,
      "street": "456 Maple Street",
      "city": "Austin",
      "state": "Texas",
      "country": "United States"
    },
    {
      "id": 3,
      "street": "789 Ocean Drive",
      "city": "Miami",
      "state": "Florida",
      "country": "United States"
    },
    {
      "id": 4,
      "street": "22 Lakeview Avenue",
      "city": "Chicago",
      "state": "Illinois",
      "country": "United States"
    },
    {
      "id": 5,
      "street": "15 Sunset Boulevard",
      "city": "Los Angeles",
      "state": "California",
      "country": "United States"
    },
    {
      "id": 6,
      "street": "88 River Street",
      "city": "New York",
      "state": "New York",
      "country": "United States"
    },
    {
      "id": 7,
      "street": "301 Hilltop Road",
      "city": "Denver",
      "state": "Colorado",
      "country": "United States"
    },
    {
      "id": 8,
      "street": "77 Pine Street",
      "city": "Seattle",
      "state": "Washington",
      "country": "United States"
    },
    {
      "id": 9,
      "street": "9 Market Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States"
    },
    {
      "id": 10,
      "street": "250 Garden Street",
      "city": "Boston",
      "state": "Massachusetts",
      "country": "United States"
    }
  ]

  


export const dummyOrders = [
  {
    _id: "order_001",
    userId: "user_001",
    items: [
      {
        product: dummyProduct[0],
        quantity: 2,
        _id: "item_001"
      }
    ],
    amount: 199.98,
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
      phone: "+1 123-456-7890"
    },
    status: "Processing",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-01T10:00:00.000Z",
    updatedAt: "2025-03-01T10:00:00.000Z"
  },
  {
    _id: "order_002",
    userId: "user_002",
    items: [
      {
        product: dummyProduct[0],
        quantity: 2,
        _id: "item_002"
      }
    ],
    amount: 199.98,
    address: {
      firstName: "Jane",
      lastName: "Smith",
      street: "456 Market Street",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90001",
      country: "USA",
      phone: "+1 987-654-3210"
    },
    status: "Delivered",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-02-28T08:30:00.000Z",
    updatedAt: "2025-03-02T12:00:00.000Z"
  }
];

export default { starIcon,upload_area,boxIcon, AddAddress, star_Icon, BottomBanners, bottombanner_sm, logo,remove,rightArrow }
