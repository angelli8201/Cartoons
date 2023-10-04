package app.cartoons.data;

import app.cartoons.models.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 4;

    @Autowired
    UserJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

// commment to instantiate branch

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
        assertEquals("Angel", angel.getUserName());
    }

    @Test
    void add() {

        User user = makeUser();
        boolean actual = repository.add(user);
        assertTrue(actual);
    }

    @Test
    void update() {
    }

    @Test
    void deleteById() {
    }

    private User makeUser() {
        User user = new User();
        user.setUserName("Test Name");
        user.setPassWord("Test Password");

        return user;
    }
}