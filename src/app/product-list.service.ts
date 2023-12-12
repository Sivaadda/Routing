import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  products=[
    {
      "id": 1,
      "name": "Product A",
  "image": "https://example.com/productA.jpg",
      "cost": 19.99,
      "description": "A high-quality product with various features.",
      "category": "Electronics"
    },
    {
      "id": 2,
      "name": "Product B",
  "image": "https://example.com/productB.jpg",
      "cost": 29.99,
      "description": "An elegant and stylish item for your daily needs.",
      "category": "Fashion"
    },
    {
      "id": 3,
      "name": "Product C",
  "image": "https://example.com/productC.jpg",
      "cost": 39.99,
      "description": "Perfect for outdoor activities with its durable design.",
      "category": "Sports & Outdoors"
    },
    {
      "id": 4,
      "name": "Product D",
  "image": "https://example.com/productD.jpg",
      "cost": 49.99,
      "description": "A versatile product suitable for various occasions.",
      "category": "Home & Kitchen"
    },
    {
      "id": 5,
      "name": "Product E",
  "image": "https://example.com/productE.jpg",
      "cost": 59.99,
      "description": "Experience cutting-edge technology with this innovative product.",
      "category": "Electronics"
    },
    {
      "id": 6,
      "name": "Product F",
  "image": "https://example.com/productF.jpg",
      "cost": 69.99,
      "description": "Stay comfortable and stylish with this fashionable choice.",
      "category": "Fashion"
    },
    {
      "id": 7,
      "name": "Product G",
  "image": "https://example.com/productG.jpg",
      "cost": 79.99,
      "description": "Enhance your fitness routine with this advanced workout gear.",
      "category": "Sports & Outdoors"
    },
    {
      "id": 8,
      "name": "Product H",
  "image": "https://example.com/productH.jpg",
      "cost": 89.99,
      "description": "Add a touch of sophistication to your living space.",
      "category": "Home & Kitchen"
    },
    {
      "id": 9,
      "name": "Product I",
  "image": "https://example.com/productI.jpg",
      "cost": 99.99,
      "description": "Experience superior performance with this top-tier product.",
      "category": "Electronics"
    },
    {
      "id": 10,
      "name": "Product J",
  "image": "https://example.com/productJ.jpg",
      "cost": 109.99,
      "description": "Achieve a modern look with this trendy and practical item.",
      "category": "Fashion"
    }
  ]
}
