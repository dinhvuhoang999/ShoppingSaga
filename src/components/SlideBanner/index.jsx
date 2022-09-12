/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

import SlideItemBanner from './SlideItemBanner';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import imgSlide1 from '../../assets/img/banner_img_01.jpg';
import imgSlide2 from '../../assets/img/banner_img_02.jpg';
import imgSlide3 from '../../assets/img/banner_img_03.jpg';

const dataSlides = [
  {
    id: 1,
    img: imgSlide1,
    title: 'Proident occaecat',
    subtitle: 'Ullamco laboris nisi ut',
    description:
      'We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.',
  },
  {
    id: 2,
    img: imgSlide2,
    title: 'Proident occaecat',
    titleLight: 'Zay',
    subtitle: 'Ullamco laboris nisi ut',
    description:
      'We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.',
  },
  {
    id: 3,
    img: imgSlide3,
    title: 'Proident occaecat',
    subtitle: 'Aliquip ex ea commodo consequat',
    description:
      'You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.',
  },
  {
    id: 4,
    img: imgSlide1,
    title: 'Repr in voluptate',
    subtitle: 'Ullamco laboris nisi ut',
    description:
      'We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.',
  },
];

const slideBanner = () => (
  <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} navigation>
    {dataSlides.map((item) => (
      <SwiperSlide
        className="template-mo-zay-hero-carousel"
        id="template-mo-zay-hero-carousel"
      >
        <SlideItemBanner
          key={item.id}
          img={item.img}
          title={item.title}
          titleLight={item.titleLight}
          subtitle={item.subtitle}
          description={item.description}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default slideBanner;
