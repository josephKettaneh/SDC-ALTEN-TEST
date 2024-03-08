package com.joseph.sdctest.dao;

import com.joseph.sdctest.entity.Product;
import com.joseph.sdctest.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer> {



}
