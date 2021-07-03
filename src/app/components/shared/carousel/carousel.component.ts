import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

// import SwiperCore from 'swiper/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  @Input() data: any;
  @Input() type!: string;
  @Input() controls!: string;

  constructor() { }

  /**
   * -------------------------------------------------------
   * @summary carouselCatalogConfig
   * @description Configuracion del carousel clients
   * -------------------------------------------------------
   */
  carouselClientsConfig = {
    horizontal: true,
    vertical: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    dots: false,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    mobileFirst: true,
    centerMode: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    draggable: true,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };

  /**
   * -------------------------------------------------------
   * @summary carouselCatalogConfig
   * @description Configuracion del carousel news
   * -------------------------------------------------------
   */
  carouselNewsConfig = {
    horizontal: true,
    vertical: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    dots: false,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    mobileFirst: true,
    centerMode: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: false,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };


  ngOnInit(): void {
  }

  btnCLik() {
    console.log('SE DIO CLIK EN ITEM:>> ');
  }

  /**
  * -------------------------------------------------------
  * @summary next
  * @description Boton Next Slide Carousel
  * -------------------------------------------------------
  */
  next() {
    this.slickModal.slickNext();
  }

  /**
   * -------------------------------------------------------
   * @summary prev
   * @description Boton Prev Slide Carousel
   * -------------------------------------------------------
   */
  prev() {
    this.slickModal.slickPrev();
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
}
