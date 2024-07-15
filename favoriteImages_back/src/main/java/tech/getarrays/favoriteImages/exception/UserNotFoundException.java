package tech.getarrays.favoriteImages.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String message) {
            super(message);
    }
}
