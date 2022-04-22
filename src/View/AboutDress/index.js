import React, {useEffect, useState} from 'react';
import "./style.css"
import first_img from "../Collection2020/img/Rectangle 353.png"
import second_img from "../Collection2020/img/Rectangle 491 (1).png"
import {Button, Card} from "react-bootstrap";
import axios from "axios";

const AboutDress = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        axios(`https://613cea45270b96001798b2e8.mockapi.io/api/product`)
            .then(({data}) => {
                setProducts(data)
            })
    }, [])




    return (
        <div className="evening_dress container">
            <div className="row">
                <div className="col-7">
                    <div className="top_section">
                        
                        <img className="top__img" src={first_img} alt=""/>
                        <img className="top__img" src={second_img} alt=""/>
                        <img className="top__img" src={second_img} alt=""/>
                        <img className="top__img" src={first_img} alt=""/>
                    </div>
                    <div className="low-section">
                        <img className="low__img" src={first_img} alt=""/>
                        <img className="low__img" src={second_img} alt=""/>
                        <img className="low__img" src={second_img} alt=""/>
                        <img className="low__img" src={first_img} alt=""/>
                    </div>
                </div>
                <div className="col-5">
                    <Card className="col__card">
                        <Card.Body>
                            <Card.Title className="col__title">Вечернее платье</Card.Title>
                            <Card.Text className="col__subtitle">
                                Артикул: <span>Платье PL984/dakota</span>
                            </Card.Text>
                            <Card.Text className="col__color">Цвет: <span>
                                    <svg width="162" height="18" viewBox="0 0 162 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.47" y="4" width="10" height="10" rx="5" fill="#73A39D"/>
<rect opacity="0.47" x="22" y="4" width="10" height="10" rx="5" fill="#84CC4C"/>
<rect x="48" y="4" width="10" height="10" rx="5" fill="#032F72"/>
<rect x="44.5" y="0.5" width="17" height="17" stroke="#D6D6D6"/>
<rect x="74" y="4" width="10" height="10" rx="5" fill="#AB844A"/>
<rect opacity="0.47" x="96" y="4" width="10" height="10" rx="5" fill="#6977F0"/>
<rect opacity="0.47" x="117.5" y="3.5" width="11" height="11" rx="5.5" fill="white" stroke="#D1D1D1"/>
<rect opacity="0.47" x="140" y="4" width="10" height="10" rx="5" fill="#FF0000"/>
</svg>
</span> </Card.Text>
                            <Card.Text className="col__price">7229 р <span>7229 р</span></Card.Text>
                            <Card.Text className="col__info">
                                О товаре:
                                <span>
                                        За последние 35 лет бренд Bonucci из обычного производителя одежды превратился в широко узнаваемую марку, а его продукция – в синоним высокого качества и актуального стиля.
                                    </span>
                            </Card.Text>
                            <div className="about_card">
                                <div className="about_top">
                                    <Card.Text className="col__about">Размерный ряд: <span>42-50</span></Card.Text>
                                    <Card.Text className="col__about">Состав ткани: <span>Полиэстер </span></Card.Text>
                                </div>
                                <div className="about_low">
                                    <Card.Text className="col__about">Количество в линейке : <span>5</span></Card.Text>
                                    <Card.Text className="col__about">Материал: <span>Полиэстер </span></Card.Text>
                                </div>
                            </div>




                            <Button variant="dark" className="btn_trash">
                                <span>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
<path
    d="M18.7786 16.6945L17.7903 7.09785C17.7495 6.69992 17.4142 6.39746 17.0142 6.39746H4.01034C3.6114 6.39746 3.2764 6.69891 3.23452 7.09578L2.21968 16.6971C2.13593 17.535 2.41526 18.3772 2.98585 19.0078C3.55648 19.638 4.36585 19.9998 5.20667 19.9998H15.8181C16.655 19.9998 17.4569 19.6453 18.0171 19.0266C18.5851 18.4006 18.8626 17.5517 18.7786 16.6945ZM16.8616 17.9787C16.5921 18.2757 16.2215 18.4393 15.8181 18.4393H5.20694C4.80616 18.4393 4.41839 18.2648 4.14296 17.9605C3.86753 17.6562 3.73257 17.2523 3.7721 16.8568L4.71253 7.9582H16.3102L17.2262 16.8511C17.2678 17.2732 17.138 17.6737 16.8616 17.9787Z"
    fill="white"/>
<path
    d="M10.6433 0C8.17672 0 6.16992 2.00676 6.16992 4.47336V7.17816H7.73039V4.47336C7.73039 2.86711 9.03704 1.56047 10.6433 1.56047C12.2495 1.56047 13.5564 2.86711 13.5564 4.47336V7.17816H15.1166V4.47336C15.1167 2.00676 13.1099 0 10.6433 0Z"
    fill="white"/>
</svg>
</span>Добавить в корзину</Button>
                            <Button variant="dark" >
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.4662 21.276C11.6072 21.42 11.7992 21.5 12.0002 21.5C12.2012 21.5 12.3932 21.42 12.5342 21.276L22.1282 11.555C24.6192 9.032 24.6192 4.925 22.1282 2.401C20.9182 1.175 19.3092 0.5 17.5962 0.5C15.8832 0.5 14.2752 1.175 13.0652 2.4L12.0002 3.48L10.9352 2.401C9.72516 1.175 8.11616 0.5 6.40416 0.5C4.69116 0.5 3.08216 1.175 1.87216 2.401C-0.618844 4.925 -0.618844 9.032 1.87216 11.554L11.4662 21.276ZM2.93916 3.454C3.86516 2.517 5.09616 2 6.40316 2C7.71116 2 8.94116 2.517 9.86616 3.455L11.4652 5.075C11.7462 5.36 12.2512 5.36 12.5322 5.075L14.1312 3.454C15.0592 2.517 16.2892 2 17.5962 2C18.9042 2 20.1342 2.517 21.0602 3.454C22.9772 5.397 22.9772 8.558 21.0602 10.502L12.0002 19.683L2.93916 10.501C1.02216 8.559 1.02216 5.397 2.93916 3.454Z"
                                        fill="white"/>
                                </svg>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AboutDress;