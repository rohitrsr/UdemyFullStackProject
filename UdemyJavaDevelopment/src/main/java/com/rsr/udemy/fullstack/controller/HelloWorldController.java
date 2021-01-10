package com.rsr.udemy.fullstack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rsr.udemy.fullstack.dto.MessageHelloBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/hello-world-bean")
	public MessageHelloBean helloWorldMessage() {
		//return new MessageHelloBean("Welcome to Java World");
		throw new RuntimeException("checking exception");
	}
	
	@GetMapping("/hello-world-bean/{name}")
	public MessageHelloBean helloWorldMessageVariable(@PathVariable String name) {
		return new MessageHelloBean(String.format("This is %s 's world ", name));
		//throw new RuntimeException("checking exception");
	}
	
}
