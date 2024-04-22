package limited_edition.Golden_Glitz;

import limited_edition.Golden_Glitz.DTO.Request.RegisterRequest;
import limited_edition.Golden_Glitz.DTO.Response.AuthenticationResponse;
import limited_edition.Golden_Glitz.Models.User;
import limited_edition.Golden_Glitz.Services.AuthenticationService;
import limited_edition.Golden_Glitz.Services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class GoldenGlitzApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoldenGlitzApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(AuthenticationService authenticationService, UserService userService) {
		return args -> {
			var admin = RegisterRequest.builder()
					.name("Admin")
					.email("admin@gmail.com").password("admin@123")
					.phone("6381885164")
					.role("ADMIN")
					.build();

			Optional<User> userList = userService.getUserByEmail("admin@gmail.com");

			AuthenticationResponse authenticationResponse;

			if(userList.isEmpty())
				authenticationResponse = authenticationService.register(admin);
		};
	}
}
