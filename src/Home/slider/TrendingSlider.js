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
        fetch(`https://api.1bstories.com/stories/sync/?t=8r734410458967bdb59y7a70cb34e770780baa9afcfa4hy512`)
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
                    return <SwiperSlide id={index} onClick={() =>{
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
                <div className="close" onClick={() =>{
                    setOpen(false)
                }
                }></div>
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
