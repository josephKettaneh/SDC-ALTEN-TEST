# Test Tasks

| Operation| Description                              | Java/Spring  Dev      | Postman Test                   | Connect API to Front                     | 
| ---------| ---------------------------------------- | --------------------- | ------------------------------ | ---------------------------------------- | 
| POST     | Create a new products                    |          ✅           |             ✅                   |                   ✅                  |
| GET      | Retrieve all products                    |          ✅           |             ✅                   |                   ✅                  |
| GET      | Retrieve details for product 1           |          ✅           |             ✅                   |                   ✅                  |
| PATCH    | Update details of product 1 if it exists |          ✅           |             ✅                   |                   ✅                  |
| DELETE   | Remove product 1                         |          ✅           |             ✅                   |                   ✅                  |
| SQL      | Connection with SQL DB                   |          ✅           |             ✅                   |                   ✅                  |
-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Test Done 
  All tests on the above tasks are done and presented in the folder  **tests**.

## Example:
  
  ### Postman UPDATE product 1027
  <img width="1061" alt="UPDATE-prod-1027" src="https://github.com/josephKettaneh/SDC-ALTEN-TEST/assets/86591689/27bda4f2-2819-42f5-9e8f-5ef59947c7d7">
  
 ### front GET ALL products
<img width="1440" alt="1-Alten-front-GET-ALL-prod" src="https://github.com/josephKettaneh/SDC-ALTEN-TEST/assets/86591689/9940d76b-7f5f-446a-a32d-b841219b15a5">

### front UPDATE product 1005
<img width="1439" alt="2-Alten-front-UPDATE-prod-1005" src="https://github.com/josephKettaneh/SDC-ALTEN-TEST/assets/86591689/5ae13bae-f5bd-4c02-9683-974b004bd36b">


# TEST DESCRIPTION
## Back-end

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
