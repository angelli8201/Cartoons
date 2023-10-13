package app.cartoons.data.mappers;

import app.cartoons.models.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class UserMapper implements RowMapper<User>{

    private final List<String> authorities;

    public UserMapper(List<String> authorities) {
        this.authorities = authorities;
    }

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new User(
                rs.getInt("user_id"),
                rs.getString("user_name"),
                rs.getString("pass_word"),
                rs.getBoolean("enabled"),
                authorities
        );
    }
}