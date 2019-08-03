import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})
export class ImagesGalleryComponent implements OnInit {

  public LightBoxElement;
  public Images;      // Array of images that will be used to show.
  constructor() { 
    this.LightBoxElement = undefined;
  }

  ngOnInit() {
  }


  onclick(element){
    this.LightBoxElement = element;
  }

  existLightBox(){

    if(this.LightBoxElement !== undefined){
      let modal = document.getElementById(this.LightBoxElement)
    }
    this.LightBoxElement = undefined;
  }


  
}
/*
// -------------------------- LIGHT BOX ------------------------------------------
// pour les lightbox( aka "shadowbox")
function lightbox(who){
    document.getElementById(who).style.display = "block";
    document.getElementById('lightBoxBg').style.display = "block";

}
// tour de passe passe pour que l'image soit au dessus. (si on le fait direct javascript vérifier les class name avant
// que le reste du code php soit executer for some reason)
function stop(){
    stop2();
}
function stop2(){
    var elements = document.getElementsByClassName('lightBox');
    for(var i=0; i<elements.length; i++) {
        elements[i].style.display='none';
    }
    document.getElementById('lightBoxBg').style.display = "none";
}
*/