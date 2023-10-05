package app.cartoons.domain;

import app.cartoons.data.UserRepository;
import app.cartoons.models.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public List<User> findAll(){
        return repository.findAll();
    }

    public User findById(int userId){
        return repository.findById(userId);
    }
    public Result<User> add(User user){
        Result<User> result = validate(user);
        if (!result.isSuccess()) {
            return result;
        }
        if (user.getUserId() != 0) {
            result.addMessage("userId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        user = repository.add(user);
        result.setPayload(user);
        return result;
    }

    public Result<User> update(User user) {
        Result<User> result = validate(user);
        if (!result.isSuccess()) {
            return result;
        }

        if (user.getUserId() <= 0) {
            result.addMessage("userId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(user)) {
            String msg = String.format("userId: %s, not found", user.getUserId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int userId) {
        return repository.deleteById(userId);
    }


    private Result<User> validate(User user) {
        Result<User> result = new Result<>();
        if (user == null) {
            result.addMessage("user cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(user.getUserName())) {
            result.addMessage("username is required", ResultType.INVALID);
        }

        if (Validations.isNullOrBlank(user.getPassWord())) {
            result.addMessage("password is required", ResultType.INVALID);
        }

        return result;
    }
}
