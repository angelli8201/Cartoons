package app.cartoons.data;

import app.cartoons.models.User;
import app.cartoons.models.Post;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class PostJdbcTemplateRepositoryTest {

    static final int MISSING_ID = 99;

    @Autowired
    PostJdbcTemplateRepository repository;
    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void findAll() {
        List<Post> posts = repository.findAll();
        assertNotNull(posts);
    } //expecting user_name in post table

    @Test
    void findById() {
        Post testPost = repository.findById(1);
        assertEquals(1, testPost.getPostId());
        assertEquals("Hello World!", testPost.getTitle());
    } // angry about reference


    @Test
            void add() {
        Post post = new Post();
        post.setTitle("Potato");
        post.setCaption("Aberdeen in da fields");
        post.setReference("Amazing World of Gumball");
        post.setUserId(1);
        post.setPostId(3);

        Post actual = repository.add(post);

        assertEquals(post, actual);
    }


    @Test
    void update() {
        Post post = new Post();
        post.setTitle("Potato");
        post.setCaption("Aberdeen in da fields");
        post.setReference("Amazing World of Gumball");
        post.setUserId(1);
        post.setPostId(3);

        Post existingPost = repository.findById(3);

        if (existingPost != null) {
            existingPost.setTitle("Idaho");
            post.setCaption("In da fields, POTATO!");
            post.setReference("Amazing World of Gumball");

            boolean updated = repository.update(existingPost);
            assertEquals("Idaho", existingPost.getTitle());
        }
    } // all of these tests are failing because of reference

    @Test
    void deleteById() {
        assertTrue(repository.deleteById(1));
    }
}

