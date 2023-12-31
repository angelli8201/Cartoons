package app.cartoons.domain;

import app.cartoons.data.PostRepository;
import app.cartoons.models.Post;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PostService {
    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> findAll() {
        return repository.findAll();
    }

    public Post findById(int postId) {
        return repository.findById(postId);
    }
    private Result<Post> validate(Post post) {
        Result<Post> result = new Result<>();
        if (post == null) {
            result.addMessage("post cannot be null");
            return result;
        }

        if (Validations.isNullOrBlank(post.getTitle())) {
            result.addMessage("title is required");
        }

        if (post.getUserId() <= 0) {
            result.addMessage("userId is required");
        }
        return result;
    }

    public Result<Post> add(Post post) {
        Result<Post> result = validate(post);
        if (!result.isSuccess()) {
            return result;
        }

        if (post.getPostId() != 0) {
            result.addMessage("postId cannot be set for `add` operation");
            return result;
        }

        post = repository.add(post);
        result.setPayload(post);
        return result;
    }

    public Result<Post> update(Post post) {
        Result<Post> result = validate(post);
        if (!result.isSuccess()) {
            return result;
        }

        if (post.getPostId() <= 0) {
            result.addMessage("postId must be set for `update` operation");
            return result;
        }

        if (!repository.update(post)) {
            String msg = String.format("postId: %s, not found", post.getPostId());
            result.addMessage(msg);
        }

        return result;
    }
    public boolean deleteById(int postId) {
        return repository.deleteById(postId);
    }
}
