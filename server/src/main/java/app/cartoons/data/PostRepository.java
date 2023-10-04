package app.cartoons.data;

import app.cartoons.models.Post;

import java.util.List;

public interface PostRepository {
    List<Post> findAll();

    Post findById(int postId);

    Post add(Post post);

    boolean update(Post post);

    boolean deleteById(int postId);
}
