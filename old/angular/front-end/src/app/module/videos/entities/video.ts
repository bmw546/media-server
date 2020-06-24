import { Injectable } from '@angular/core';
import { Parameter } from '../../utils/parameterEntities';
import { VideoDto } from '../dtos/video-dto';
import { ImageDto } from '../../images/dtos/image-dto';
import { ImageEntities } from '../../images/entities/imageEntities';


@Injectable()
export class VideoEntities extends Parameter {

    // This object will contains the video snippet (aka the front cover of what the video will be).
    public creationDate: number;

    public videoUrl: string;

    public videoName: string;

    public sizeKb: number;

    public date: string;

    public owner: string;

    public description: string;

    public image: ImageEntities;   // The image

    FromDto(videoDto: VideoDto ) {
        // Take a dto and fill itself with the new value
        this.image.FromDto(videoDto.image);
        this.videoName = videoDto.videoName;
        this.sizeKb = videoDto.sizeKb;
        this.owner = videoDto.owner;
        this.date = videoDto.date;
        this.description = videoDto.description;
        this.creationDate = Date.parse(videoDto.date);
    }
    // Cannot have to DTO since it will be an upload (file TOO big)

}
