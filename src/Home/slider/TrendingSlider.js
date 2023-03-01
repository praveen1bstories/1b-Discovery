import React, {useEffect,useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination, EffectCards } from "swiper";
import {Spin, Button, Modal} from 'antd'

export default function TrendingSlider() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    const getData = () => {
        fetch(`https://api.1bstories.com/stories/carousels/api/?id=63db9b58ac460cb6d4af2c0e&t=ead9b450a2ea11edaaff062ae197ed1cc42dd7fbd9f34adabe`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(false)
                setData(data.data)
            });
    }
    useEffect(() =>{
        getData()
    },[])

    if(loading){
        return <Spin size="large" />

    }

    const trending = data.slice(0, 10);

    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {trending.map((item,index) =>{
                    return <SwiperSlide onClick={() =>{
                        setOpen(true)
                        setActiveIndex(index)
                    }
                    } >
                        <img src={item.squarePoster} />
                    </SwiperSlide>

                })}
            </Swiper>

            {open ?  <div className="popup">
                <div className="mask" style={{backgroundImage:`url(${data[activeIndex].squarePoster})`}}></div>
                <Swiper
                    initialSlide={activeIndex}
                    direction="vertical"
                    className="mySwiperPopup"
                    onSlideChange={(swiper) =>{
                        setActiveIndex(swiper.activeIndex)
                    }
                    }
                >
                    {trending.map((item) =>{
                        return <SwiperSlide>
                            <iframe src={item.url}/>
                        </SwiperSlide>

                    })}
                </Swiper>
            </div> : null}
        </>
    );
}
