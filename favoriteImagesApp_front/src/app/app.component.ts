import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ImagesService } from './images.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Images } from './images';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule, FormsModule],
  providers: [ImagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public images: Images[] =[];
  public  editImage: Images | null = null;
  public title = 'favoriteImagesApp';
  public deleteImage: Images | null = null;

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.getImages();
  }

  public getImages(): void {
    this.imagesService.getImages().subscribe(
      (response: Images[]) => {
        this.images = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddImage(addFrom: NgForm): void{
    document.getElementById('add-image-form')?.click();
    this.imagesService.addImage(addFrom.value).subscribe(
      (response: Images) => {
        console.log(response);
        this.getImages();
        addFrom.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFrom.reset();
      }
    );
  }

  public onUpdateImage(image: Images): void{
    this.imagesService.updateImage(image).subscribe(
      (response: Images) => {
        console.log(response);
        this.getImages();
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

  public onDeleteImage(imageId: number): void{
    this.imagesService.deleteImage(imageId).subscribe(
      (response: void) => {
        console.log(response);
        this.getImages();
      },
      (error: HttpErrorResponse) => {
          alert(error.message);
      }
    );
  }

  public searchImages(key: string): void {
    console.log(key);
    const results: Images[] = [];
    for (const image of this.images) {
      if (image.imageName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || image.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(image);
      }
    }
    this.images = results;
    if (results.length === 0 || !key) {
      this.getImages();
    }
  }





  public onOpenModal(images: Images | null, mode: string):void{
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addImageModal');
    }
    if(mode === 'edit'){
      this.editImage = images;
      button.setAttribute('data-target', '#updateImageModal')
    }
    if(mode === 'delete'){
      this.deleteImage = images;
      button.setAttribute('data-target', '#deleteImageModal')
    }
    container?.appendChild(button);
    button.click();
  }

}
