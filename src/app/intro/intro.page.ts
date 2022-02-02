import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "Bienvenidos",
      subtitle: "A ionic musica",
      description: "ionic musica lo unico que te entiende",
      icon: "musical-notes-outline",
      image: "assets/images/slide1.png",
      alt: "imagen de logo"
    },
    {
      id: 1,
      title: "Que Contiene ionic musica?",
      subtitle: "Te Sorprenderas",
      description: " contiene un mundo de sueños",
      icon: "play-outline",
      image: "assets/images/slide2.png",
      alt: "imagen de musica"
    },
    {
      id: 2,
      title: "Adelante",
      subtitle: "esta a un paso",
      description: "sigue no te detengas ",
      icon: "pause-outline",
      image: "assets/images/slide3.png",
      alt: "imagen de musica 2"
    
    },

    {
      id: 3,
      title: "bienvenido",
      description: "donde tus sentidos son lo mas importante",
      icon: "pause-outline",
      image: "assets/images/banner-login.png",
      alt: "imagen de musica 3"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
