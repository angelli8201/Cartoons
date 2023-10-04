package app.cartoons.models;

import java.util.Date;
import java.util.Objects;

public class Post {

    private int postId;
    private String title;
    private String caption;
    private String reference;
    private int userId;

    public Post(int postId, String title, String caption, int userId) {
        this.postId = postId;
        this.title = title;
        this.caption = caption;
        this.userId = userId;
    }

    public Post() {

    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return postId == post.postId && userId == post.userId && Objects.equals(title, post.title) && Objects.equals(caption, post.caption) && Objects.equals(reference, post.reference);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, title, caption, reference, userId);
    }
}
