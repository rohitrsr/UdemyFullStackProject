package com.rsr.udemy.fullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rsr.udemy.fullstack.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

}
