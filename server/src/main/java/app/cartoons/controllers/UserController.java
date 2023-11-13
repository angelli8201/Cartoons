package app.cartoons.controllers;

import app.cartoons.domain.Result;
import app.cartoons.domain.UserService;
import app.cartoons.models.User;
import app.cartoons.security.JwtConverter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@ConditionalOnWebApplication
public class UserController {

    private final UserService userService;
    private final JwtConverter jwtConverter;
    private final AuthenticationManager authenticationManager;

    public UserController(UserService userService,
                          JwtConverter jwtConverter,
                          AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.jwtConverter = jwtConverter;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/cartoons/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                credentials.get("username"), credentials.get("password"));

        // Moved AuthenticationException handling to the GlobalErrHandler
        Authentication authentication = authenticationManager.authenticate(authToken);
        if (authentication.isAuthenticated()) {
            User user = (User) authentication.getPrincipal();
            String jwt = jwtConverter.getTokenFromUser(user);
            Map<String, String> result = new HashMap<>();
            result.put("jwt_token", jwt);
            return ResponseEntity.ok(result);
        }

        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/cartoons/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> credentials) {
        Result<User> result = userService.add(
                credentials.get("username"), credentials.get("password"));
        if (result.isSuccess()) {
            Map<String, Integer> userId = new HashMap<>();
            userId.put("user_id", result.getPayload().getUserId());
            return new ResponseEntity<>(userId, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/cartoons/refresh-token")
    public ResponseEntity<Map<String, String>> refreshToken(@AuthenticationPrincipal User user) {
        String jwt = jwtConverter.getTokenFromUser(user);
        Map<String, String> result = new HashMap<>();
        result.put("jwt_token", jwt);
        return ResponseEntity.ok(result);
    }
}