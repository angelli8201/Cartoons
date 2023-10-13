package app.cartoons.security;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@ConditionalOnWebApplication
public class SecurityConfig {

    private final JwtConverter jwtConverter;

    public SecurityConfig(JwtConverter jwtConverter) {
        this.jwtConverter = jwtConverter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig) throws Exception {

        http.csrf().disable();

        http.cors();

        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/cartoons/login").permitAll()
                .antMatchers(HttpMethod.POST, "/cartoons/register").permitAll()
                .antMatchers(HttpMethod.POST, "/cartoons/refresh-token").authenticated()

                .antMatchers(HttpMethod.GET, "/cartoons/post/*").permitAll()
                .antMatchers(HttpMethod.GET, "/cartoons/post").permitAll()
                .antMatchers(HttpMethod.POST, "/cartoons/post").authenticated()
                .antMatchers(HttpMethod.PUT, "/cartoons/post/*").authenticated()
                .antMatchers(HttpMethod.DELETE, "/cartoons/post/*").authenticated()
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(authenticationManager(authConfig), jwtConverter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}