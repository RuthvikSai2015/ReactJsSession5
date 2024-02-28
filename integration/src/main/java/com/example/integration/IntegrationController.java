package com.example.integration;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IntegrationController {
	@CrossOrigin
	@GetMapping("/hello")
	public String hello(@RequestParam(value="name",defaultValue="Spring Boot") String name) {
		return name;
	}
}
