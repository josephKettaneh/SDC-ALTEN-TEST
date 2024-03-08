package com.joseph.sdctest.controller;

import com.joseph.sdctest.entity.Product;
import com.joseph.sdctest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

        @Autowired
        private ProductService productService;

        @PostMapping("/product")
        public Product saveProduct(@RequestBody Product product){
                return productService.saveProduct(product);
        }

        @GetMapping("/product")
        public List<Product> getProducts(){
                return productService.getProducts();
        }

        @GetMapping("/product/{productId}")
        public Product getProduct(@PathVariable Integer productId){
                return productService.getProduct(productId);
        }

        @DeleteMapping("/product/{productId}")
        public void deleteProduct(@PathVariable Integer productId){
                productService.deleteProduct(productId);
        }

        @PatchMapping("/product/{productId}")
        public Product updateProduct(@PathVariable Integer productId, @RequestBody Product product){
                return productService.updateProduct(productId, product);

        }



    }
