package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username").trim();
        String password = loginData.get("password").trim();

        return userRepository.findByUsername(username)
                .filter(user -> user.getPassword().equals(password))
                .map(user -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("username", user.getUsername());
                    res.put("role", user.getRole());
                    res.put("firstName", user.getFirstName());
                    res.put("lastName", user.getLastName());
                    return ResponseEntity.ok(res);
                })
                .orElseGet(() -> {
                    Map<String, Object> res = new HashMap<>();
                    res.put("error", "Invalid username or password");
                    return ResponseEntity.status(401).body(res);
                });
    }
}
