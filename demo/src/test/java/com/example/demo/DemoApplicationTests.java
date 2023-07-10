package com.example.demo;

import com.example.demo.web.CarController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class DemoApplicationTests {
	@Autowired
	private CarController carController;
	@Test
	void contextLoads() {
		assertThat(carController).isNotNull();
	}

}
