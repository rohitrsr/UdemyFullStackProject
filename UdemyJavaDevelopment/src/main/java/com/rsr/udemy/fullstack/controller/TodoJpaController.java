package com.rsr.udemy.fullstack.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

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
import com.rsr.udemy.fullstack.repositories.TodoRepository;
import com.rsr.udemy.fullstack.service.TodoHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {
	
	@Autowired
	private TodoHardcodedService todoHardcodedService;
	
	@Autowired 
	private TodoRepository todoRepo;
	
	@PostMapping("/jpa/user/{username}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String username,
			@RequestBody Todo todo){
		todo.setUsername(username);
		Todo createdTodo = todoRepo.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		.buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable Long id ,
			@RequestBody Todo todo){
		Todo todoUpdated = todoRepo.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
	}

	@GetMapping("/jpa/user/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoRepo.findAll();
	}
	
	@GetMapping("/jpa/user/{username}/todos/{id}")
	public Optional<Todo> getTodo(@PathVariable String username,@PathVariable Long id) {
		return todoRepo.findById(id);	
	}
	
	@DeleteMapping("/jpa/user/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodoById(@PathVariable String username,@PathVariable Long id){
	
		todoRepo.deleteById(id);
		return ResponseEntity.noContent().build();
		//return ResponseEntity.notFound().build();
	}

}
