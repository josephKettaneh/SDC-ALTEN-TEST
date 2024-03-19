package com.joseph.sdctest.service;

import com.joseph.sdctest.dao.ProductDao;
import com.joseph.sdctest.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductDao productDao;

    public Product saveProduct(Product product) {
        try {
            return productDao.save(product);
        } catch (Exception e) {
            // Handle exception
            e.printStackTrace();
            return null;
        }
    }

    public List<Product> getProducts() {
        List<Product> productList = new ArrayList<>();
        productDao.findAll().forEach(productList::add);
        return productList;
    }

    public Product getProduct(Integer productId) {
        Optional<Product> productOptional = productDao.findById(productId);
        if (productOptional.isPresent()) {
            return productOptional.get();
        } else {

            throw new RuntimeException("Product with id " + productId + " not found");
        }
    }

    public void deleteProduct(Integer productId) {
        try {
            productDao.deleteById(productId);
        } catch (Exception e) {

            e.printStackTrace();
        }
    }


    public Product updateProduct(Integer productId, Product product) {
        return productDao.findById(productId)
                .map(p -> {
                    p.setCode(product.getCode());
                    p.setName(product.getName());
                    p.setDescription(product.getDescription());
                    p.setPrice(product.getPrice());
                    p.setQuantity(product.getQuantity());
                    p.setInventoryStatus(product.getInventoryStatus());
                    p.setCategory(product.getCategory());
                    p.setImage(product.getImage());
                    p.setRating(product.getRating());
                    return productDao.save(p);
                }).orElseThrow(() -> new RuntimeException("Product with id " + productId + " not found"));

    }


}
