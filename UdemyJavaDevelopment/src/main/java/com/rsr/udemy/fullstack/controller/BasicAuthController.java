package com.rsr.udemy.fullstack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rsr.udemy.fullstack.dto.AuthenticationBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthController {
	
	@GetMapping("/basicAuth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}

}
