package com.joseph.sdctest.service;

import com.joseph.sdctest.dao.ProductDao;
import com.joseph.sdctest.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        Optional<Product> existingProductOptional = productDao.findById(productId);
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();

            // Update only the fields that are present in the request
            if (product.getCode() != null) {
                existingProduct.setCode(product.getCode());
            }
            if (product.getName() != null) {
                existingProduct.setName(product.getName());
            }
            if (product.getDescription() != null) {
                existingProduct.setDescription(product.getDescription());
            }
            if (product.getPrice() != 0) {  // Assuming 0 is not a valid price
                existingProduct.setPrice(product.getPrice());
            }
            if (product.getQuantity() != 0) {  // Assuming 0 is not a valid quantity
                existingProduct.setQuantity(product.getQuantity());
            }
            if (product.getInventoryStatus() != null) {
                existingProduct.setInventoryStatus(product.getInventoryStatus());
            }
            if (product.getCategory() != null) {
                existingProduct.setCategory(product.getCategory());
            }
            if (product.getImage() != null) {
                existingProduct.setImage(product.getImage());
            }
            if (product.getRating() != 0) {  // Assuming 0 is not a valid rating
                existingProduct.setRating(product.getRating());
            }

            // Save the updated product
            return productDao.save(existingProduct);
        } else {
            // Handle product not found
            throw new RuntimeException("Product with id " + productId + " not found");
        }
    }


}
