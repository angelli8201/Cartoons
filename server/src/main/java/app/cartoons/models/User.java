package app.cartoons.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class User implements UserDetails {
    private  int userId;
    private String userName;
    private String passWord;
    private boolean enabled;

    private List<SimpleGrantedAuthority> authorities = new ArrayList<>();

    public User() {}

    public User(int userId, String userName, String passWord, boolean enabled, List<String> authorities) {
        this.userId = userId;
        this.userName = userName;
        this.passWord = passWord;
        this.enabled = enabled;
        this.authorities = authorities.stream()
                .map(r -> new SimpleGrantedAuthority(r))
                .toList();
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.passWord;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User appUser = (User) o;
        return userId == appUser.userId && enabled == appUser.enabled && Objects.equals(userName, appUser.userName) && Objects.equals(passWord, appUser.passWord) && Objects.equals(authorities, appUser.authorities);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userName, passWord, enabled, authorities);
    }

    @Override
    public String toString() {
        return "AppUser{" +
                "id=" + userId +
                ", username='" + userName + '\'' +
                ", passwordHash='" + passWord + '\'' +
                ", enabled=" + enabled +
                ", authorities=" + authorities +
                '}';
    }
}