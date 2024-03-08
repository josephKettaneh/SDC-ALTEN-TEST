# Back-end

Develop a backend to manage products defined below. You can use the technology of your choice from the following list:

- nodejs/express
- Java/Spring Boot
- C#/.net Core
- Python/Flask

The backend must handle the following REST APIs:

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new products | Retrieve all products          | X                                        | X   |     X            |
| **/products/1**    | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

A product has the following characteristics:

``` typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}
```

The created backend must be able to manage products in a SQL/NoSQL database or in a JSON file.

A list of products is available in this file: front/assets/products.json

An Angular frontend is available and allows you to use the API at this address: http://localhost:3000

you can run the angular frontend with the command 'ng serve'

# Bonus

- You can add Postman or Swagger tests to validate your API
- You can adapt the frontend so that it can connect to your API.