import { ImageDto } from '../../images/dtos/image-dto';

export class VideoDto {
    public VideoId: number;
    public videoName: string;
    public sizeKb: number;
    public date: string;
    public owner: string;
    public image: ImageDto;
}