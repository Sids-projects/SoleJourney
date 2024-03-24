import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Home Component
  products: any = [
    {
      image: '../../../assets/img/Shoe-1.png',
      brand: 'Swiftstride',
      prize: 180,
      type: 'Running Shoe',
      discount: 10,
      badges: ['Running Shoe', 'Unisex'],
      colors: ['black', 'grey', 'green'],
      filter: 'Unisex',
    },
    {
      image: '../../../assets/img/Shoe-2.png',
      brand: 'Trailblazers',
      type: 'Hiking Boot',
      prize: 320,
      discount: 40,
      badges: ['Hiking Boot', 'Mens'],
      colors: ['brown', 'tan', 'olive green'],
      filter: 'Mens',
    },
    {
      image: '../../../assets/img/Shoe-3.png',
      brand: 'Sojourn',
      type: 'Travel Sneaker',
      prize: 140,
      discount: 0,
      badges: ['Travel Sneaker', 'Womens'],
      colors: ['navy blue', 'beige', 'rose gold'],
      filter: 'Womens',
    },
    {
      image: '../../../assets/img/Shoe-1.png',
      brand: 'Nike',
      type: 'Cross-Training Shoe',
      prize: 200,
      discount: 30,
      badges: ['Cross-Training', 'Unisex'],
      colors: ['white', 'black', 'red accents'],
      filter: 'Unisex',
    },
    {
      image: '../../../assets/img/Shoe-2.png',
      brand: 'Curve',
      type: 'Platform Sneaker',
      prize: 120,
      discount: 15,
      badges: ['Platform Sneaker', 'Womens'],
      colors: ['cream', 'pastel pink', 'baby blue'],
      filter: 'Womens',
    },
    {
      image: '../../../assets/img/Shoe-3.png',
      brand: 'Strides',
      type: 'Walking Shoe',
      prize: 160,
      discount: 5,
      badges: ['Walking Shoe', 'Unisex'],
      colors: ['black', 'grey', 'teal'],
      filter: 'Unisex',
    },
    {
      image: '../../../assets/img/Shoe-2.png',
      brand: 'SureStep',
      type: 'Work Boot',
      prize: 240,
      discount: 10,
      badges: ['Work Boot', 'Mens'],
      colors: ['brown', 'black', 'steel toe'],
      filter: 'Mens',
    },
    {
      image: '../../../assets/img/Shoe-1.png',
      brand: 'Zenith',
      type: 'Basketball Shoe',
      prize: 220,
      discount: 25,
      badges: ['Basketball', 'Unisex'],
      colors: ['white', 'blue', 'red accents'],
      filter: 'Unisex',
    },
    {
      image: '../../../assets/img/Shoe-2.png',
      brand: 'Wanderlust',
      type: 'Chelsea Boot',
      prize: 190,
      discount: 0,
      badges: ['Chelsea Boot', 'Mens'],
      colors: ['brown leather', 'black leather'],
      filter: 'Mens',
    },
    {
      image: '../../../assets/img/Shoe-3.png',
      brand: 'Sole Mates',
      type: 'Casual Sneaker',
      prize: 110,
      discount: 20,
      badges: ['Casual Sneaker', 'Unisex'],
      colors: ['white', 'navy blue', 'yellow accents'],
      filter: 'Unisex',
    },
    {
      image: '../../../assets/img/Shoe-1.png',
      brand: 'Sky High',
      type: 'Ankle Boot',
      prize: 150,
      discount: 10,
      badges: ['Ankle Boot', 'Womens'],
      colors: ['black', 'camel', 'snake print'],
      filter: 'Womens',
    },
  ];

  // Navigation Component
  navTitles: any = [
    { title: 'Home', path: 'home-route', navActive: false },
    { title: 'Shop', path: 'shop-route', navActive: false },
    { title: 'Blog', path: 'blog-route', navActive: false },
    { title: 'AboutUs', path: 'aboutUs-route', navActive: false },
  ];

  navLeftContent: any = [
    {
      title: "Men's Shoes",
      list: [
        { title: 'Casual Shoes', icon: 'casual-shoe.svg' },
        { title: 'Formal Shoes', icon: 'casual-shoe.svg' },
        { title: 'Sports Shoes', icon: 'casual-shoe.svg' },
        { title: 'Boots', icon: 'casual-shoe.svg' },
        { title: 'Sandals & Flip Flops', icon: 'casual-shoe.svg' },
      ],
    },
    {
      title: "Women's Shoes",
      list: [
        { title: 'Flats & Ballerinas', icon: 'casual-shoe.svg' },
        { title: 'Heels', icon: 'casual-shoe.svg' },
        { title: 'Sports Shoes', icon: 'casual-shoe.svg' },
        { title: 'Boots', icon: 'casual-shoe.svg' },
        { title: 'Sandals & Flip Flops', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: "Kids' Shoes",
      list: [
        { title: 'Boys', icon: 'casual-shoe.svg' },
        { title: 'Girls', icon: 'casual-shoe.svg' },
        { title: 'Toddlers', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: 'Specialty Shoes',
      list: [
        { title: 'Eco-Friendly', icon: 'casual-shoe.svg' },
        { title: 'Vegan', icon: 'casual-shoe.svg' },
        { title: 'Orthopedic', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
    {
      title: 'Accessories',
      list: [
        { title: 'Socks', icon: 'casual-shoe.svg' },
        { title: 'Shoe Care', icon: 'casual-shoe.svg' },
        { title: 'Insoles', icon: 'casual-shoe.svg' },
      ],
      cssMargin: 'mt-4',
    },
  ];

  // Blog
  blogContent: any = {
    blogPost: {
      img: 'blog_1.jpg',
      title: '5 Tips to Keep Your Sneakers Looking Brand New',
      content:
        "Dive into the secrets of sneaker maintenance. From cleaning techniques to storage hacks, we'll show you how to keep your kicks looking fresh for longer.",
    },
    news: [
      {
        img: 'blogNews-1.jpg',
        title: 'Finding the Perfect Fit: A Guide to Shoe Size',
        content:
          "Confused about shoe sizes? Don't worry, you're not alone! Our comprehensive guide breaks down everything you need to know about finding the perfect fit, from understanding sizing charts to measuring your feet accurately.",
      },
      {
        img: 'blogNews-2.jpg',
        title:
          'The Rise of Eco-Friendly Footwear: Walking Towards a Greener Future',
        content:
          'Explore the eco-friendly footwear revolution! Discover sustainable materials, innovative manufacturing processes, and brands leading the charge towards a greener future for fashion.',
      },
      {
        img: 'blogNews-3.jpg',
        title: 'Trend Alert: Must-Have Shoes for Every Season',
        content:
          "Stay ahead of the curve with our rundown of the hottest shoe trends for each season. Whether it's cozy winter boots or chic summer sandals, we've got you covered.",
      },
    ],
    newsPostList: [
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title:
          'Shoe Care 101: Essential Tips for Extending the Lifespan of Your Footwear',
        content:
          "Learn the ins and outs of shoe care to ensure your favorite pairs stand the test of time. From waterproofing to sole maintenance, we'll share expert tips to keep your shoes looking and feeling like new.",
      },
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title: 'How to Style Sneakers for Every Occasion',
        content:
          "Sneakers aren't just for the gym anymore! Discover versatile styling tips to take your sneakers from casual to chic, whether you're hitting the streets or attending a fancy event.",
      },
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title: 'A History of Iconic Shoe Designs: From Converse to Louboutin',
        content:
          'Take a trip down memory lane as we explore the fascinating history behind some of the most iconic shoe designs of all time. From Chuck Taylors to red-soled Louboutins, learn about the stories behind these legendary kicks.',
      },
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title:
          'The Ultimate Guide to Buying Running Shoes: What You Need to Know',
        content:
          'Ready to hit the pavement? Our comprehensive guide covers everything from choosing the right cushioning to finding the perfect arch support, so you can find your perfect pair of running shoes.',
      },
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title: 'DIY Shoe Hacks: Creative Ways to Customize Your Footwear',
        content:
          'Get crafty with our collection of DIY shoe hacks! From painting sneakers to adding embellishments, unleash your creativity and give your footwear a personalized touch.',
      },
      {
        tags: 'Insperation',
        date: '23 May, 2024',
        title: 'The Psychology of Shoe Shopping: Why We Love Buying Shoes',
        content:
          "Ever wonder why shoe shopping feels so satisfying? Delve into the psychology behind our love affair with footwear and uncover the fascinating reasons why we can't resist adding another pair to our collection.",
      },
    ],
  };
  constructor() {}
}
