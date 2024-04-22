package limited_edition.Golden_Glitz.Services;

import limited_edition.Golden_Glitz.Models.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Long id);
    User updateUser(Long id, User user);
    void deleteUser(Long id);

    Optional<User> getUserByEmail(String email);
}