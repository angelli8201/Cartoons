package app.cartoons.domain;

import app.cartoons.data.PostRepository;
import app.cartoons.models.Post;

import java.time.LocalDate;
import java.util.List;

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
            result.addMessage("post cannot be null", ResultType.INVALID);
            return result;
        }

        if (Validations.isNullOrBlank(post.getTitle())) {
            result.addMessage("title is required", ResultType.INVALID);
        }

        if (post.getUserId() <= 0) {
            result.addMessage("userId is required", ResultType.INVALID);
        }
        return result;
    }

    public Result<Post> add(Post post) {
        Result<Post> result = validate(post);
        if (!result.isSuccess()) {
            return result;
        }

        if (post.getPostId() != 0) {
            result.addMessage("postId cannot be set for `add` operation", ResultType.INVALID);
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
            result.addMessage("postId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.update(post)) {
            String msg = String.format("postId: %s, not found", post.getPostId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }
    public boolean deleteById(int postId) {
        return repository.deleteById(postId);
    }
}
