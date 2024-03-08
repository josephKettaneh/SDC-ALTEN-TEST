# Back-end

Développer un back-end permettant la gestion de produits définis plus bas. Vous pouvez utiliser la technologie de votre choix parmis la list suivante :

- nodejs/express
- Java/Spring Boot
- C#/.net Core
- Python/Flask

Le back-end doit gérer les API REST suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new products | Retrieve all products          | X                                        | X   |     X            |
| **/products/1**    | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

Un produit a les caractéristiques suivantes : 

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

Le back-end créé doit pouvoir gérer les produits dans une base de données SQL/NoSQL ou dans un fichier json. (fournir les scripts de création de base)

Une liste de produits est disponible dans ce fichier : `front/assets/products.json`

Un front-end en Angular est disponible et permet d'utiliser l'API via cette adresse : `http://localhost:3000`

vous pouvez lancer le front-end angular avec la commande 'ng serve'.

Vous devez détailler la procédure pour pouvoir lancer le backend. 

Dans la mesure du possible, l'application doit pouvoir être lancée, base de données comprise.


# Bonus

 - Vous pouvez ajouter des tests Postman ou Swagger pour valider votre API
 - Vous pouvez adapter le front-end pour qu'il puisse se connecter à votre API