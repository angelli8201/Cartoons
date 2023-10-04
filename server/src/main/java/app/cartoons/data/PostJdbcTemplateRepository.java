package app.cartoons.data;

import app.cartoons.data.mappers.PostMapper;
import app.cartoons.models.Post;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PostJdbcTemplateRepository implements PostRepository {

    private final JdbcTemplate jdbcTemplate;

    public PostJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> findAll() {
        final String sql = "select * from post;";

        return jdbcTemplate.query(sql, new PostMapper());
    }

    @Override
    public Post findById(int postId) {
        final String sql = "select \n" +
                "post_id,\n" +
                "title,\n" +
                "caption\n" +
                "`reference`\n" +
                "user_id\n" +
                "from post\n" +
                "where post_id = ?;";

        return jdbcTemplate.query(sql, new PostMapper(), postId).stream().findFirst().orElse(null);
    }

    @Override
    public boolean add(Post post) {

        final String sql = "insert into post(title, caption, `reference`, user_id) values (?, ?, ?, ?);";

        return jdbcTemplate.update(sql,
                post.getTitle(),
                post.getCaption(),
                post.getReference(),
                post.getUserId()) > 0;
    }

    @Override
    public boolean update(Post post) {

        final String sql = "update post set\n" +
                "title = '?'\n" +
                "caption = '?'\n" +
                "`reference`` = '?'\n" +
                "user_id = '?'\n" +
                "where post_id = ?;";

        return jdbcTemplate.update(sql,
                post.getTitle(),
                post.getCaption(),
                post.getReference(),
                post.getUserId(),
                post.getPostId()) > 0;

    }

    @Override
    public boolean deleteById(int postId) {

        final String sql = "delete from post\n" +
                "where post_id = ?;";

        return jdbcTemplate.update(sql, postId) > 0;
    }
}
