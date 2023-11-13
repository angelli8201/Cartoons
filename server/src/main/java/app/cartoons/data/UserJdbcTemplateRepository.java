package app.cartoons.data;

import app.cartoons.models.User;
import app.cartoons.data.mappers.UserMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;

@Repository
public class UserJdbcTemplateRepository implements UserRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public User findById(int userId) {
        final String sql = "select \n" +
                "user_id,\n" +
                "user_name,\n" +
                "pass_word\n" +
                "from `user`\n" +
                "where user_id = ?;";

        return jdbcTemplate.query(sql, new UserMapper(getAuthoritiesById(userId)), userId).stream().findFirst().orElse(null);
    }

    @Override
    @Transactional
    public User findByUsername(String username) {

        String sql = """
                select 
                     u.user_id,
                     u.user_name,
                     u.pass_word,
                     u.enabled
                from user u
                where u.user_name = ?;
                """;
        return jdbcTemplate.query(sql, new UserMapper(getAuthorities(username)), username).stream()
                .findFirst().orElse(null);
    }

    @Override
    @Transactional
    public User add(User user) {

        SimpleJdbcInsert insert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("user")
                .usingColumns("user_name", "pass_word", "enabled")
                .usingGeneratedKeyColumns("user_id");

        HashMap<String, Object> args = new HashMap<>();
        args.put("user_name", user.getUsername());
        args.put("pass_word", user.getPassword());
        args.put("enabled", user.isEnabled());

        int id = insert.executeAndReturnKey(args).intValue();
        user.setUserId(id);

        updateRoles(user);

        return user;
    }

    private void updateRoles(User user) {
        jdbcTemplate.update("delete from app_user_role where user_id = ?;", user.getUserId());
        for (var authority : user.getAuthorities()) {
            String sql = """
                    insert into app_user_role (user_id, app_role_id)
                    values (?, (select app_role_id from app_role where `name` = ?));
                    """;
            jdbcTemplate.update(sql,user.getUserId(), authority.getAuthority());
        }
    }

    private List<String> getAuthorities(String username) {
        final String sql = """
                select 
                    r.name
                from app_role r
                inner join app_user_role ur on ur.app_role_id = r.app_role_id
                inner join user u on u.user_id = ur.user_id
                where u.user_name = ?;
                """;
        return jdbcTemplate.query(sql, (rs, i) -> rs.getString("name"), username);
    }

    private List<String> getAuthoritiesById(int id) {
        final String sql = """
                select 
                    r.name
                from app_role r
                inner join app_user_role ur on ur.app_role_id = r.app_role_id
                inner join user u on u.user_id = ur.user_id
                where u.user_id = ?;
                """;
        return jdbcTemplate.query(sql, (rs, i) -> rs.getString("name"), id);
    }
}