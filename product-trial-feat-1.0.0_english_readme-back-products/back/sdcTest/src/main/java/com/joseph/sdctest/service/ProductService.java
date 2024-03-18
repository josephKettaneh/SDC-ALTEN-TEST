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
        Optional<Product> existingProductOptional = productDao.findById(productId);
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();

            Field[] fields = Product.class.getDeclaredFields();

            for (Field field : fields) {
                try {
                    field.setAccessible(true);
                    Object newValue = field.get(product);
                    if (newValue != null && !newValue.equals(field.get(existingProduct))) {
                        field.set(existingProduct, newValue);
                    }
                } catch (IllegalAccessException e) {

                    e.printStackTrace();
                }
            }

            return productDao.save(existingProduct);
        } else {
            throw new RuntimeException("Product with id " + productId + " not found");
        }
    }


}
