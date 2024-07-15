package tech.getarrays.favoriteImages.service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.favoriteImages.exception.UserNotFoundException;
import tech.getarrays.favoriteImages.model.Images;
import tech.getarrays.favoriteImages.repo.ImagesRepo;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ImagesService {
    private final ImagesRepo imagesRepo;

    @Autowired
    public ImagesService(ImagesRepo imagesRepo) {
        this.imagesRepo = imagesRepo;
    }

    public Images addImage(Images images) {
        images.setImageCode(UUID.randomUUID().toString());
        return imagesRepo.save(images);
    }

    public List<Images> findAllImages() {
        return imagesRepo.findAll();
    }

    public Images updateImage(Images images) {
        return imagesRepo.save(images);
    }

    public Images findImageById(Long id){
        return imagesRepo.findImageById(id).orElseThrow(()-> new UserNotFoundException("Image by id" + id + "was not found"));
    }

    public void deleteImage(Long id){
        imagesRepo.deleteImageById(id);
    }


}
