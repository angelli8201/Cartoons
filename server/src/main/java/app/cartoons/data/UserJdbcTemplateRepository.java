package app.cartoons.data;

import app.cartoons.models.User;
import app.cartoons.data.mappers.UserMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

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
    public boolean add(User user) {

        final String sql = "insert into `user`(user_name, pass_word) values (?, ?);";

        return jdbcTemplate.update(sql,
                user.getUserName(),
                user.getPassWord()) > 0;
    }

    @Override
    public boolean update(User user) {

        final String sql = "update `user`\n" +
                "set user_name = '?'\n" +
                "set pass_word = '?'\n" +
                "where user_id = ?;";

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

