package com.chitraksh.auth.dto;

public class JwtResponse {
    public String token;
    public String username;
    public String email;
    public String type = "Bearer";

    public JwtResponse(String token, String username, String email) {
        this.token = token;
        this.username = username;
        this.email = email;
    }
}
