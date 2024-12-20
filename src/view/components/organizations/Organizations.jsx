import { useState } from 'react';
import './organizations.css';
import Item from '../../../assets/carusel-item.png';

export const Organizations = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Индекс первого активного слайда

    const slides = [
        { id: 1, image: Item },
        { id: 2, image: Item },
        { id: 3, image: Item },
        { id: 4, image: Item },
        { id: 5, image: Item },
        { id: 6, image: Item },
    ];

    const slidesToShow = 2; // Количество отображаемых слайдов

    const plusSlides = (n) => {
        setSlideIndex((prev) => {
            const newIndex = prev + n;
            if (newIndex > slides.length - slidesToShow) return 0; // Цикличный переход в начало
            if (newIndex < 0) return slides.length - slidesToShow; // Цикличный переход в конец
            return newIndex;
        });
    };

    return (
        <div className="org">
            <div className="bold">Организации</div>
            <div className="carusel">
                <div className="carusel-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`carusel-item ${
                                index >= slideIndex && index < slideIndex + slidesToShow ? 'active' : ''
                            }`}
                            style={{
                                display:
                                    index >= slideIndex && index < slideIndex + slidesToShow
                                        ? 'block'
                                        : 'none',
                            }}
                        >
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
        </div>
    );
};
