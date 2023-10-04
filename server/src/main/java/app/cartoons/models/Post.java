package app.cartoons.models;

import java.util.Date;
import java.util.Objects;

public class Post {

    private int postId;
    private String name;
    private Date dateCreated;

    private String reference;

    public Post(int postId, String name, Date dateCreated) {
        this.postId = postId;
        this.name = name;
        this.dateCreated = dateCreated;
    }

    public Post() {
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return postId == post.postId && Objects.equals(name, post.name) && Objects.equals(dateCreated, post.dateCreated) && Objects.equals(reference, post.reference);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postId, name, dateCreated, reference);
    }
}
