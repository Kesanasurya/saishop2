package com.example.shop.config;

import com.example.shop.model.Product;
import com.example.shop.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {
    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        if (productRepository.count() == 0) {
            productRepository.saveAll(List.of(
                    new Product("Murukulu (1 Kg)", 500),
                    new Product("Pabbillalu (1 Kg)", 500),
                    new Product("Sunnundalu (1 Kg)", 600),
                    new Product("Nuvvulundalu (1 Kg)", 500),
                    new Product("Shakharpara (1 Kg)", 500),
                    new Product("Chickies (1 Kg)", 450),
                    new Product("Ravva Laddu (1 Kg)", 500),
                    new Product("Kajikayalu (1 Kg)", 500),
                    new Product("Sajja Vadalu (1 Kg)", 500),
                    new Product("Dry Fruit Laddu (1 Kg)", 1200),
                    new Product("Protein Laddu (1 Kg)", 1100)
            ));
        }
    }
}
