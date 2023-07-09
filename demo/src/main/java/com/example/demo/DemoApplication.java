package com.example.demo;

import com.example.demo.domain.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.Array;
import java.util.Arrays;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	public static final Logger logger =
			LoggerFactory.getLogger(DemoApplication.class);
	@Autowired
	private CarRepository repository;

	@Autowired
	private OwnerRepository orepository;

	@Autowired
	private UserRepository urepository;


	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		logger.info("Application started");
	}

	@Override
	public void run(String... args) throws Exception {
		Owner owner1 = new Owner("John", "Johnson");
		Owner owner2 = new Owner("Mary", "Robinson");
		orepository.saveAll(Arrays.asList(owner1,owner2));

		repository.save(new Car("Ford","Mustang","Red","ADF-1121",2021,59000,owner1));
		repository.save(new Car("Nissan","Leaf","white","SSJ-3002",2019,29000,owner2));
		repository.save(new Car("Toyota","prius","Silver","KKO-0212",2020,39000,owner2));

		for (Car car: repository.findAll()){
			logger.info(car.getBrand()+" "+car.getModel());
		}
		urepository.save(new User("user",
				"$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue","USER"));
		urepository.save(new User("admin",
				"$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
	}
}
