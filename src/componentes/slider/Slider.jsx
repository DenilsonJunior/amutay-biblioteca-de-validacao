import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { Card } from '../card/Card';
import itens from './itens.json'; // Importar o JSON

export const Slider = () => {
    const [slideView, setSlideView] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 480) {
                setSlideView(2);
            } else if (window.innerWidth < 1080) {
                setSlideView(3);
            } else {
                setSlideView(4);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {itens.map((jornada, index) => (
                <div key={index}>
                    <h1>{jornada.jornada}</h1>
                    <Swiper
                        slidesPerView={slideView}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {jornada.cards.map((card, idx) => (
                            <SwiperSlide key={`${index}-${idx}`}>
                                <Card link={card.link} img={card.img} title={card.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>
    );
};
