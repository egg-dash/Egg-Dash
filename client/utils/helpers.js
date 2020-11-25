export const loadFarmData = () => {
  return [
    {
      name: 'Pepperidge Farms',
      addressStreet: '123 Hello Drive',
      addressZip: '12345',
      email: 'hello@farm.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
      image:
        'https://niagara-usa.s3.amazonaws.com/CMS/9899/assorted-vegetable-lot__medium.jpg',
      features: 'Produce • Milk',
    },
    {
      name: 'Marsh Farms',
      addressStreet: '123 Hello Drive',
      addressZip: '12345',
      email: 'hello@farm.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
      image: 'https://www.scotsman.com/webimg/RUxNODU4NTQ0NjY=.jpg?width=640',
      features: 'Produce • Cheese',
    },
    {
      name: 'Farmy farm',
      addressStreet: '123 Hello Drive',
      addressZip: '12345',
      email: 'hello@farm.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
      image: 'https://media.timeout.com/images/105697913/image.jpg',
      features: 'Milk • Eggs',
    },
    {
      name: 'Hello farm',
      addressStreet: '123 Hello Drive',
      addressZip: '12345',
      email: 'hello@farm.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
      image:
        'https://romesentinel.com/uploads/original/20190731-120628-3dd3fdd3da.jpg',
      features: 'Mushrooms • Dairy',
    },
    {
      name: 'Mirpuri farms',
      addressStreet: '123 Hello Drive',
      addressZip: '12345',
      email: 'hello@farm.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
      image:
        'https://bloximages.newyork1.vip.townnews.com/heraldchronicle.com/content/tncms/assets/v3/editorial/f/22/f22dac9c-6d33-11ea-a413-ab9ff93c79c3/5e78ffae7a01a.image.jpg?resize=1200%2C601',
      features: 'Milk • Eggs',
    },
  ];
};

export const loadFarmProducts = () => {
  return {
    name: 'Farmy farm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper odio purus, vel dictum massa maximus vel. Duis sit amet justo in felis feugiat pellentesque. Praesent ut sapien non urna finibus dictum nec imperdiet lorem. Ut fringilla fermentum eleifend. Duis vel suscipit turpis, vitae lacinia leo. Vivamus euismod vulputate cursus. Quisque non luctus est. Vivamus ligula risus, euismod vitae diam ac, consequat facilisis elit. Maecenas in consequat magna. Integer turpis libero, lacinia vel eleifend in, viverra et tellus. Maecenas faucibus sollicitudin felis, at iaculis lorem tempus ut.',
    image: 'https://media.timeout.com/images/105697913/image.jpg',
    addressStreet: '123 Farm House Drive',
    addressZip: '12345',
    email: 'hello@farmyfarm.com',
    products: [
      {
        name: 'Sharp Cheddar',
        description: 'Aged sharp cheddar cheese.',
        price: '4.99',
        unit: 'lb',
        stock: 28,
        category: 'dairy',
        image:
          'https://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes.jpg',
      },
      {
        name: 'Vanilla Ice Cream',
        description: 'Real vanilla bean ice cream.',
        price: '7.99',
        unit: 'pint',
        stock: 57,
        category: 'dairy',
        image:
          'https://www.liferenu.com/wp-content/uploads/2019/10/Ice-Cream-01.jpg',
      },
      {
        name: 'Eggs',
        description: 'Organic free-range eggs.',
        price: '2.99',
        unit: 'dozen',
        stock: 50,
        category: 'dairy',
        image:
          'https://www.pashudhanpraharee.com/wp-content/uploads/2019/09/2.png',
      },
      {
        name: 'Kale',
        description: 'Organic dinosaur kale.',
        price: '3.49',
        unit: 'head',
        stock: 23,
        category: 'produce',
        image:
          'https://static1.squarespace.com/static/5a8c3a5ecf81e0c5cec85c7b/5e8285b08c1eca7e03ddab04/5e8a8eb2a75db67652376b6a/1587659945682/HH_Kale_Lacinato-Tuscan-Dinosaur.jpg?format=1500w',
      },
      {
        name: 'Strawberries',
        description: 'Fresh organic strawberries.',
        price: '4.99',
        unit: 'lb',
        stock: 78,
        category: 'produce',
        image:
          'https://i.pinimg.com/originals/fb/67/d2/fb67d2e691ffe4541b0e1606d3de11e9.jpg',
      },
      {
        name: 'Milk',
        description: 'Fresh organic milk straight from the udder.',
        price: '4.99',
        unit: 'gallon',
        stock: 200,
        category: 'dairy',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeqFPkH9lU7ShA0fUHAMqQ5JZ2NMFhZHiuw&usqp=CAU',
      },
      {
        name: 'Carrots',
        description: 'Organic carrots.',
        price: '4.99',
        unit: 'lb',
        stock: 28,
        category: 'produce',
        image:
          'https://rusticfarmtofork.com/wp-content/uploads/2017/01/Rustic-Farm-to-Rork-Carrots.jpg',
      },
      {
        name: 'Red Onion',
        description: 'Organic red onion.',
        price: '1.00',
        unit: 'item',
        stock: 93,
        category: 'produce',
        image:
          'https://images.squarespace-cdn.com/content/v1/596f7d5d17bffcd028cef774/1523552571622-KIG03MUTCCG6EPDNZ2BP/ke17ZwdGBToddI8pDm48kB-fxwl7ewkyt5_O091tLKVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzLo7o24-UpQfVbJZFvnCxkoMbuy0InFL7APMSTOMerPlAqfKuIr7HH6nlKKlhaTiY/planting+red+onions.jpg',
      },
      {
        name: 'White Onion',
        description: 'Organic white onion.',
        price: '1.00',
        unit: 'item',
        stock: 100,
        category: 'produce',
        image:
          'https://www.almanac.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/image_nodes/onions.jpg?itok=2o60drKd',
      },
      {
        name: 'Broccoli',
        description: 'Organic broccoli.',
        price: '3.99',
        unit: 'head',
        stock: 39,
        category: 'produce',
        image:
          'https://nutritionreview.org/wp-content/uploads/2019/05/iStock-1027165558Broccoli700.jpeg',
      },
    ],
  };
};
