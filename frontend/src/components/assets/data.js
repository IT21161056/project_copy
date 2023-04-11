import product_01_image_01 from "./data_images/product_01.jpg";
import product_01_image_02 from "./data_images/carrot.jpg";
import product_01_image_03 from "./data_images/product_01.3.jpg";

import product_02_image_01 from "./data_images/dhal.jpg";
import product_02_image_02 from "./data_images/product_2.2.jpg";
import product_02_image_03 from "./data_images/product_2.3.jpg";

import product_03_image_01 from "./data_images/cocacola.jpg";
import product_03_image_02 from "./data_images/product_3.2.jpg";
import product_03_image_03 from "./data_images/product_3.3.jpg";

import product_04_image_01 from "./data_images/product_4.1.jpg";
import product_04_image_02 from "./data_images/oil.jpg";
import product_04_image_03 from "./data_images/oil.jpg";

import product_05_image_01 from "./data_images/product_04.jpg";
import product_05_image_02 from "./data_images/product_08.jpg";
import product_05_image_03 from "./data_images/product_09.jpg";

import product_06_image_01 from "./data_images/bread(1).png";
import product_06_image_02 from "./data_images/bread(2).png";
import product_06_image_03 from "./data_images/bread(3).png";

const products = [
//   {
//     id: "01",
//     title: "Chicken Burger",
//     price: 24.0,
//     image01: product_01_image_01,
//     image02: product_01_image_02,
//     image03: product_01_image_03,
//     category: "Burger",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
//   },

//   {
//     id: "02",
//     title: "Vegetarian Pizza",
//     price: 115.0,
//     image01: product_02_image_01,
//     image02: product_02_image_02,
//     image03: product_02_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "03",
//     title: "Double Cheese Margherita",
//     price: 110.0,
//     image01: product_03_image_01,
//     image02: product_03_image_02,
//     image03: product_03_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "04",
//     title: "Maxican Green Wave",
//     price: 110.0,
//     image01: product_04_image_01,
//     image02: product_04_image_02,
//     image03: product_04_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "05",
//     title: "Cheese Burger",
//     price: 24.0,
//     image01: product_05_image_01,
//     image02: product_05_image_02,
//     image03: product_05_image_03,
//     category: "Burger",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },
//   {
//     id: "06",
//     title: "Royal Cheese Burger",
//     price: 24.0,
//     image01: product_01_image_01,
//     image02: product_01_image_02,
//     image03: product_01_image_03,
//     category: "Burger",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "07",
//     title: "Seafood Pizza",
//     price: 115.0,
//     image01: product_02_image_02,
//     image02: product_02_image_01,
//     image03: product_02_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "08",
//     title: "Thin Cheese Pizza",
//     price: 110.0,
//     image01: product_03_image_02,
//     image02: product_03_image_01,
//     image03: product_03_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "09",
//     title: "Pizza With Mushroom",
//     price: 110.0,
//     image01: product_04_image_02,
//     image02: product_04_image_01,
//     image03: product_04_image_03,
//     category: "Pizza",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "10",
//     title: "Classic Hamburger",
//     price: 24.0,
//     image01: product_05_image_02,
//     image02: product_05_image_01,
//     image03: product_05_image_03,
//     category: "Burger",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "11",
//     title: "Crunchy Bread ",
//     price: 35.0,
//     image01: product_06_image_01,
//     image02: product_06_image_02,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "12",
//     title: "Delicious Bread ",
//     price: 35.0,
//     image01: product_06_image_02,
//     image02: product_06_image_01,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },

//   {
//     id: "13",
//     title: "Loaf Bread ",
//     price: 35.0,
//     image01: product_06_image_03,
//     image02: product_06_image_02,
//     image03: product_06_image_03,
//     category: "Bread",

//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
//   },
// ];

  {
    id: "01",
    title: "Carrot",
    price: 24.0,
    image01: product_01_image_02,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Dhal",
    price: 115.0,
    image01: product_02_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Coca Cola",
    price: 110.0,
    image01: product_03_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Cooking Oil",
    price: 110.0,
    image01: product_04_image_01,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Onion",
    price: 24.0,
    image01: 'https://produits.bienmanger.com/36700-0w470h470_Organic_Red_Onion_From_Italy.jpg',
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Brinjal",
    price: 24.0,
    image01: product_01_image_01,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Rice",
    price: 115.0,
    image01: 'https://media.istockphoto.com/id/827465154/photo/white-rice-in-burlap-sack-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=be5ELHFTbZ3DlBcAnPgCX4AkLjA867Mc7nBRjWKqNkI=',
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Fresh Milk",
    price: 110.0,
    image01: product_03_image_02,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Cooking Oil",
    price: 110.0,
    image01: product_04_image_02,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Tomatoes",
    price: 24.0,
    image01: product_05_image_02,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Banana ",
    price: 35.0,
    image01: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=360',
    category: "Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Papaya ",
    price: 35.0,
    image01: 'https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg',
    category: "Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Apple",
    price: 35.0,
    image01: 'https://freshtodoor.ae/wp-content/uploads/2022/01/red-apple-washed-and-sanitized.jpg',
    category: "Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "14",
    title: "Potatoes",
    price: 35.0,
    image01: 'https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg',
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "15",
    title: "eggs",
    price: 110.0,
    image01: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg',
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "16",
    title: "Garlic",
    price: 24.0,
    image01: 'https://www.fisherofnewbury.co.uk/img/dynamic/950/a/100/32187224.jpg',
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
