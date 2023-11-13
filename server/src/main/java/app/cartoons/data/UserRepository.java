package app.cartoons.data;

import app.cartoons.models.User;

import java.util.List;

public interface UserRepository {
    User findById(int userId);

    User findByUsername(String username);

    User add(User appUser);
}