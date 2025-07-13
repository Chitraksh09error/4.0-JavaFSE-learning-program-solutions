package com.chitraksh.auth.services;

import com.chitraksh.auth.entities.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    private final Map<String, User> users = new HashMap<>();

    public User register(String username, String password, String email) {
        User user = new User(username, password, email);
        users.put(username, user);
        return user;
    }

    public User getByUsername(String username) {
        return users.get(username);
    }
}
