package app.cartoons.data;

import app.cartoons.models.User;

import java.util.List;

public interface UserRepository {
    List<User> findAll();

    User findById(int userId);

    boolean add(User user);

    boolean update(User user);

    boolean deleteById(int userId);
}
