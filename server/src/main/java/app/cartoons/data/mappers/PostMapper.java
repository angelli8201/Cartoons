package app.cartoons.data.mappers;

import app.cartoons.models.Post;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostMapper implements RowMapper<Post>{
    @Override
    public Post mapRow(ResultSet resultSet, int i) throws SQLException {
        Post post = new Post();

        post.setPostId(resultSet.getInt("user_id"));

        post.setPostId(resultSet.getInt("post_id"));

        post.setTitle(resultSet.getString("title"));
        post.setCaption(resultSet.getString("caption"));
        post.setReference(resultSet.getString("reference"));
        post.setUserId(resultSet.getInt("user_id"));

        return post;
    }
}
