const productList = [
  {
    id: 1,
    name: 'Odense 8-Seater Top Dining Table',
    price: 2152200,
    quantity: 0,
    imgURL:
      'https://th.bing.com/th/id/OIP.c3YwUQjC5Cffacqibf6DygHaJQ?w=137&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 1,
    matrial: 'Engineered Wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 5,
    name: 'Trixia 4-Seater Glass Dining Table',
    price: 33330000,
    quantity: 8,
    imgURL:
      'https://th.bing.com/th/id/OIP.XDX2IfLP05q8TXSl6jlhzwHaHa?w=204&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 1,
    matrial: 'Metal',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 25,
    name: 'Gasha Marble Top Side Table',
    price: 1334000,
    quantity: 10,
    imgURL:
      'https://th.bing.com/th/id/OIP.8xQo2k64U0jvsb052WLrzQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 1,
    matrial: 'Metal',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 7,
    name: 'Ventura Fabric Dining Chair',
    price: 153300,
    quantity: 2,
    imgURL:
      'https://th.bing.com/th/id/OIP._0fcISabdjK0QZ-Tuxaf_wHaFL?w=289&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 17,
    name: 'Ventura Fabric Dining Chair',
    price: 153300,
    quantity: 2,
    imgURL:
      'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 9,
    name: 'Boston Study Chair',
    price: 331000,
    quantity: 10,
    imgURL:
      'https://th.bing.com/th/id/OIP._0fcISabdjK0QZ-Tuxaf_wHaFL?w=289&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 2,
    matrial: 'Upholstered Seating',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 10,
    name: 'Coby Extendable TV Unit',
    price: 1333000,
    quantity: 0,
    imgURL:
      'https://th.bing.com/th/id/OIP._0fcISabdjK0QZ-Tuxaf_wHaFL?w=289&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 3,
    matrial: 'Wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 15,
    name: 'Accent TV Unit',
    price: 3633999,
    quantity: 4,
    imgURL:
      'https://th.bing.com/th/id/OIP._0fcISabdjK0QZ-Tuxaf_wHaFL?w=289&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 3,
    matrial: 'MDF',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
  {
    id: 55,
    name: 'Plymouth TV Unit',
    price: 3699339,
    quantity: 1,
    imgURL:
      'https://th.bing.com/th/id/OIP._0fcISabdjK0QZ-Tuxaf_wHaFL?w=289&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    categoryID: 3,
    matrial: 'wood',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.',
  },
];

export default productList;
