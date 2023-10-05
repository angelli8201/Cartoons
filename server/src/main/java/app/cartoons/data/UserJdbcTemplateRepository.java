package app.cartoons.data;

import app.cartoons.models.User;
import app.cartoons.data.mappers.UserMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class UserJdbcTemplateRepository implements UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> findAll() {
        final String sql = "select * from `user`;";

        return jdbcTemplate.query(sql, new UserMapper());
    }

    @Override
    public User findById(int userId) {
        final String sql = "select \n" +
                "user_id,\n" +
                "user_name,\n" +
                "pass_word\n" +
                "from `user`\n" +
                "where user_id = ?;";

        return jdbcTemplate.query(sql, new UserMapper(), userId).stream().findFirst().orElse(null);
    }

    @Override
    public User add(User user) {
        SimpleJdbcInsert insert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("user")
                .usingColumns("user_name","pass_word")
                .usingGeneratedKeyColumns("user_id");
        HashMap<String,Object> args = new HashMap<>();
        args.put("user_name", user.getUserName());
        args.put("pass_word", user.getPassWord());

        int userId = insert.executeAndReturnKey(args).intValue();
        user.setUserId(userId);
        return user;

    }

    @Override
    public boolean update(User user) {

        final String sql = "update `user` " +
                "set user_name = ?, pass_word = ? " +
                "where user_id = ?";

        return jdbcTemplate.update(sql,
                user.getUserName(),
                user.getPassWord(),
                user.getUserId()) > 0;

    }

    @Override
    public boolean deleteById(int userId) {

        final String sql = "delete from `user`\n" +
                "where user_id = ?;";

        return jdbcTemplate.update(sql, userId) > 0;
    }
}