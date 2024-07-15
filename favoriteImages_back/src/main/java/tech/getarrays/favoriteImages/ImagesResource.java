package tech.getarrays.favoriteImages;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.favoriteImages.model.Images;
import tech.getarrays.favoriteImages.service.ImagesService;

import java.util.List;

@RestController
@RequestMapping("/images")
public class ImagesResource {
    private final ImagesService imagesService;

    public ImagesResource(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Images>> getAllImages() {
        List<Images> images = imagesService.findAllImages();
        return new ResponseEntity<>(images, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Images> getImageById(@PathVariable("id") Long id) {
        Images image = imagesService.findImageById(id);
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Images> addImage(@RequestBody Images image) {
        Images newImage = imagesService.addImage(image);
        return new ResponseEntity<>(newImage, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Images> updateImage(@RequestBody Images image) {
        Images updatedImage = imagesService.updateImage(image);
        return new ResponseEntity<>(updatedImage, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable("id") Long id) {
        imagesService.deleteImage(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
