package app.cartoons.domain;

import app.cartoons.data.UserRepository;
import app.cartoons.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        if (user == null || !user.isEnabled()) {
            throw new UsernameNotFoundException(String.format("%s not found.", username));
        }

        return user;
    }
    public User findById(int userId){
        return userRepository.findById(userId);
    }

    public Result<User> add(String username, String password) {
        Result<User> result = validate(username, password);
        if (!result.isSuccess()) {
            return result;
        }

        password = passwordEncoder.encode(password);

        User user = new User(0, username, password, true, List.of("USER"));

        result.setPayload(userRepository.add(user));

        return result;
    }

    private Result<User> validate(String username, String password) {
        Result<User> result = new Result<>();

        if (username == null || username.isBlank()) {
            result.addMessage("username is required");
        }

        if (password == null || password.isBlank()) {
            result.addMessage("password is required");
        }

        if (!result.isSuccess()) {
            return result;
        }

        if (username.length() > 50) {
            result.addMessage("username must be 50 characters max");
        }

        if (!validatePassword(password)) {
            result.addMessage("password must be at least 8 character and contain a digit, a letter, and a non-digit/non-letter");
        }

        if (!result.isSuccess()) {
            return result;
        }

        try {
            if (loadUserByUsername(username) != null) {
                result.addMessage("the provided username already exists");
            }
        } catch (UsernameNotFoundException e) {
            // good!
        }

        return result;
    }

    private boolean validatePassword(String password) {
        if (password.length() < 8) {
            return false;
        }

        int digits = 0;
        int letters = 0;
        int others = 0;
        for (char c : password.toCharArray()) {
            if (Character.isDigit(c)) {
                digits++;
            } else if (Character.isLetter(c)) {
                letters++;
            } else {
                others++;
            }
        }

        return digits > 0 && letters > 0 && others > 0;
    }
}