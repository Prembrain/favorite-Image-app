package tech.getarrays.favoriteImages.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.favoriteImages.model.Images;

import java.util.Optional;

public interface ImagesRepo extends JpaRepository<Images, Long> {
    void deleteImageById(Long id);

    Optional<Images> findImageById(Long id);

}
