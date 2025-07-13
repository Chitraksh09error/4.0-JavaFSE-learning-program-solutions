package com.chitraksh.auth.controller;

import com.chitraksh.auth.dto.JwtResponse;
import com.chitraksh.auth.dto.RegisterRequest;
import com.chitraksh.auth.util.JwtUtil;
import com.chitraksh.auth.entities.User;
import com.chitraksh.auth.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {


    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public JwtResponse registerUser(@RequestBody RegisterRequest request) {
        System.out.println("Received request: " + request.username);
        User user = userService.register(request.username, request.password, request.email);
        String token = jwtUtil.generateToken(user.username);
        return new JwtResponse(token, user.username, user.email);
    }

}