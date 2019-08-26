import { Injectable } from '@angular/core';
import { Parameter } from '../../utils/parameterEntities';
import { ImageDto } from '../dtos/image-dto';


@Injectable()
export class ImageEntities extends Parameter {

    // This object will contains and convert to a usable data from the images.
    public creationDate: number;

    public imageBlob: string;

    public imageName: string;

    public sizeKb: number;

    public date: string;

    public owner: string;

    public image: HTMLImageElement;   // The image

    FromDto(imageDto: ImageDto ) {

        this.image = new Image();

        this.imageBlob = imageDto.imageBlob;
        this.sizeKb = imageDto.sizeKb;
        this.owner = imageDto.owner;
        this.date = imageDto.date;
        this.creationDate = Date.parse(imageDto.date);

        this.image.src = URL.createObjectURL(imageDto.imageBlob);
    }

    ToDto() {
        var imageDto = new ImageDto();
        imageDto.sizeKb = this.sizeKb;
        imageDto.owner = this.owner;
        imageDto.imageBlob = this.imageBlob;
        imageDto.date = this.date;

        return imageDto;
    }
}
