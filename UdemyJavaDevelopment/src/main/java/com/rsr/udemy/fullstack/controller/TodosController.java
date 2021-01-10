package com.rsr.udemy.fullstack.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.rsr.udemy.fullstack.model.Todo;
import com.rsr.udemy.fullstack.service.TodoHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodosController {

	@Autowired
	private TodoHardcodedService todoHardcodedService;
	
	@PostMapping("/user/{username}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String username,
			@RequestBody Todo todo){
		Todo createdTodo = todoHardcodedService.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable Long id ,
			@RequestBody Todo todo){
		Todo todoUpdated = todoHardcodedService.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
	}

	@GetMapping("/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoHardcodedService.findAll();
	}
	
	@GetMapping("/user/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username,@PathVariable Long id) {
		return todoHardcodedService.findById(id);
	}
	
	@DeleteMapping("/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable String username,@PathVariable Long id){
	
		Todo todo = todoHardcodedService.deleteById(id);
		if(todo !=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
