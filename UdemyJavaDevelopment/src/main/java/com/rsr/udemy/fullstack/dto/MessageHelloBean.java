package com.rsr.udemy.fullstack.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MessageHelloBean {
	
	private String message;

	@Override
	public String toString() {
		return "MessageHello [message=" + message + "]";
	}
	

}
