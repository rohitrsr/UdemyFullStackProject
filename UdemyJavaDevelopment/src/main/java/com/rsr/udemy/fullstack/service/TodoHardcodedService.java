package com.rsr.udemy.fullstack.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.rsr.udemy.fullstack.model.Todo;

@Service
public class TodoHardcodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static Long idCounter=0L;
	static {
		todos.add(new Todo(++idCounter,"rohit","Learn to Dance",new Date(),false));
		todos.add(new Todo(++idCounter,"mohit","Learn to Code",new Date(),false));
		todos.add(new Todo(++idCounter,"arvind","Learn to Play",new Date(),false));
		todos.add(new Todo(++idCounter,"prince","Learn to Run",new Date(),false));
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()== -1 || todo.getId()== 0 ) {
		todo.setId(++idCounter);
		todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
			return todo;
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById(Long id) {
		Todo todo = findById(id);
		if(todo==null) { return null;}
		if(todos.remove(todo)) { return todo;}
				return null;
	}
	
	public Todo findById(Long id) {
		for(Todo todo:todos) {
			if(todo.getId()==id)  return todo;
		}
		return null;
	}
}
