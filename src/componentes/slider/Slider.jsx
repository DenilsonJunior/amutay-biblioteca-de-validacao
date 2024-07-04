import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Card } from '../card/Card';
import itens from './itens.json'; // Importar o JSON

export const Slider = () => {
    return (
        <>
            {itens.map((jornada, index) => (
                <div key={index}>
                    <h1>{jornada.jornada}</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {jornada.cards.map((card, idx) => (
                            <SwiperSlide key={`${index}-${idx}`}>
                                <Card pn={card.pn} img={card.img} title={card.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>
    );
};
