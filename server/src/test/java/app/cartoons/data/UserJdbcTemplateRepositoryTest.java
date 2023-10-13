package app.cartoons.data;

import app.cartoons.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserJdbcTemplateRepositoryTest {

  static final int MISSING_ID = 99;

    @Autowired
    UserJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }



    @Test
    void shouldFindAllUsers() {
        List<User> users = repository.findAll();
        assertNotNull(users);

        assertTrue(users.size() >= 2 && users.size() <= 6);
    }

    @Test
    void shouldFindAngel() {
        User angel = repository.findById(2);
        assertEquals(2, angel.getUserId());
        assertEquals("Angel", angel.getUsername());
    }

    @Test
    void shouldNotFindUser() {
        User actual = repository.findById(MISSING_ID);
        assertNull(actual);
    }

    @Test
    void shouldAdd() {
        User user = new User();
        user.setUserName("imAUser");
        user.setPassWord("thisAPassword");

        User actual = repository.add(user);
        user.setUserId(5);
        assertEquals(user, actual);
    }

    @Test
    void shouldUpdate() {
        User user = new User();
        user.setUserName("testName");
        user.setPassWord("unaPassword");
        user.setUserId(6);

        User existingUser = repository.findById(6);

        if (existingUser != null) {
            existingUser.setUserName("TESTNAME!");
            existingUser.setPassWord("newPassword");

            boolean updated = repository.update(existingUser);
            assertTrue(updated);
        }
    }

    @Test
    void shouldNotUpdate() {
        User shouldNotUpdateUser = new User();

        shouldNotUpdateUser.setUserName("nope!");
        shouldNotUpdateUser.setPassWord("naaaaah");
        shouldNotUpdateUser.setUserId(MISSING_ID);

       boolean updated = repository.update(shouldNotUpdateUser);

       assertFalse(updated);

    } // ME CONFUSED!

    @Test
    void shouldDeleteById() {
        assertTrue(repository.deleteById(3));
    }

    @Test
    void shouldNotDeleteById() {
        assertFalse(repository.deleteById(MISSING_ID));
    }

    private User makeUser() {
        User user = new User();
        user.setUserName("Test Name");
        user.setPassWord("Test Password");

        return user;
    }
}