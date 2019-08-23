import { Injectable } from '@angular/core';
import { Parameter } from '../../utils/parameterEntities';
import { ImageDto } from '../dtos/image-dto';


@Injectable()
export class ImageObject extends Parameter {

    // This object will contains and convert to a usable data from the images.
    public creationDate: number;

    public imageBlob: string;

    public imageName: string;

    public sizeKb: number;

    public date: string;

    public owner: string;

    public imageUrl: string;

    FromDto(imageDto: ImageDto ) {

        this.imageBlob = imageDto.imageBlob;
        this.sizeKb = imageDto.sizeKb;
        this.owner = imageDto.owner;
        this.date = imageDto.date;
        this.creationDate = Date.parse(imageDto.date);

        this.imageUrl = URL.createObjectURL(imageDto.imageBlob);
    }

}
