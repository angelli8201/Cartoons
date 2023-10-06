package app.cartoons.data;

import app.cartoons.data.mappers.PostMapper;
import app.cartoons.models.Post;
import app.cartoons.models.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class PostJdbcTemplateRepository implements PostRepository {

    private final JdbcTemplate jdbcTemplate;

    public PostJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Post> findAll() {
        final String sql = "select * from post";

        return jdbcTemplate.query(sql, new PostMapper());
    }

    @Override
    public Post findById(int postId) {
        final String sql = "select \n" +
                "post_id,\n" +
                "title,\n" +
                "caption,\n" +
                "`reference`,\n" +
                "user_id\n" +
                "from post\n" +
                "where post_id = ?;";

        return jdbcTemplate.query(sql, new PostMapper(), postId).stream().findFirst().orElse(null);
    }

    @Override
    public Post add(Post post) {
        SimpleJdbcInsert insert = new SimpleJdbcInsert(jdbcTemplate)
                .withTableName("post")
                .usingColumns("title","caption","`reference`","user_id")
                .usingGeneratedKeyColumns("post_id");
        HashMap<String,Object> args = new HashMap<>();
        args.put("title", post.getTitle());
        args.put("caption", post.getCaption());
        args.put("`reference`", post.getReference());
        args.put("user_id", post.getUserId());

        int postId = insert.executeAndReturnKey(args).intValue();
        post.setPostId(postId);
        return post;

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
