package app.cartoons.controllers;

import app.cartoons.domain.PostService;
import app.cartoons.domain.Result;
import app.cartoons.models.Post;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cartoons/post")
public class PostController {
    private final PostService service;


    public PostController(PostService service) {
        this.service = service;
    }
    @GetMapping
    public List<Post> findAll() {
        return service.findAll();
    }

    @GetMapping("/{postId}")
    public Post findById(@PathVariable int postId) {
        return service.findById(postId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Post post) {
        Result<Post> result = service.add(post);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{postId}")
    public ResponseEntity<Object> update(@PathVariable int postId, @RequestBody Post post) {
        if (postId != post.getPostId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Post> result = service.update(post);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deleteById(@PathVariable int postId) {
        if (service.deleteById(postId)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
