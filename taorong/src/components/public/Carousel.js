import React from 'react'
import { Carousel } from 'antd-mobile';

const CarouselComponent = ({ dots = false, autoplay = true, imgHeight = 'auto', Carousellist, type, vertical = false }) => (
    <Carousel
        autoplay={false}
        dots={dots}
        autoplay={autoplay}
        vertical={vertical}
        infinite
    >
        {Carousellist.map((item, index) => (
            <a
                key={index}
                href={item.target}
                style={{ display: 'inline-block', width: '100%', height: 'auto', touchAction: 'none' }}
            >
                {type === 'img' ? <img
                    src={require(`../asset/img/banner/banner${index}.png`)}
                    style={{ width: '100%', verticalAlign: 'top', height: imgHeight}}
                    onLoad={() => { window.dispatchEvent(new Event('resize'));}}
                /> : item.name}

            </a>
        ))}
    </Carousel>
)

export default CarouselComponent