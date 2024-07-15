package tech.getarrays.favoriteImages.model;

import jakarta.persistence.*;
import java.io.Serializable;

@Entity
public class Images implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String imageName;
    private String description;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String imageCode;

    public Images() {}

    public Images(String imageName, String description, String imageUrl, String imageCode) {
        this.imageName = imageName;
        this.description = description;
        this.imageUrl = imageUrl;
        this.imageCode = imageCode;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getImageName() {
        return imageName;
    }

    public  void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageCode() {
        return imageCode;
    }

    public void setImageCode(String imageCode) {
        this.imageCode = imageCode;
    }

    @Override
    public String toString() {
        return "Images {" +
                "id=" + id +
                ", imageName='" + imageName + '\'' +
                ", description=" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", imageCode='" + imageCode + '\'' +
                '}';
    }

}

