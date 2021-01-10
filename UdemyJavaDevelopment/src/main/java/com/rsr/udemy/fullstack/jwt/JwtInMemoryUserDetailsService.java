package com.rsr.udemy.fullstack.jwt;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();
  
	/*
	 * { "token":
	 * "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYxMDI3MzkyNywiaWF0IjoxNjA5NjY5MTI3fQ.pLm1NOOoPcE-6qreo7RMNPT3QWMAmf60K4dAOGtfAoDkuOFk4ie7o0scndt-0JEtLK2Cv3GO1VXMQLWzP-iA0A"
	 * }
	 */

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "rohit",
        "$2a$10$LjgHE0H.MLJT80d/AcJafe46OlBoiJQgZ2gMa8zR4PmVeS9SnzsI2", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


