import React from 'react';
import './style.css'
import {Row, Col, Card, Button} from "react-bootstrap";
import collectionSummer from "../Collection2020/img/Rectangle 491 (1).png"
import card_img from '../Main/img/Rectangle 491.png'


const Cart = () => {
    return (
        <div style={{background: "#ECECEC"}}>
            <div className="container cart">
                <Row>
                    <Col sm={8}>
                        <div className="cart__card">
                            <span className="cart__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
</svg>

                            </span>
                            <div style={{display: "flex"}}>
                                <img className="cart__img" src={collectionSummer} />

                                <div style={{marginLeft: "16px"}}>
                                    <p className="cart__title">Вечернее платье</p>
                                    <p className="cart__size">
                                        Размер: 42-50
                                    </p>
                                    <p className="cart__color">Цвет:
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="8" height="8" rx="4" fill="#B5A8A1"/>
<rect x="0.5" y="0.5" width="15" height="15" stroke="#E7E7E7"/>
</svg>
</span></p>
                                    <p className="cart__price">1 365 р <span>2 730 р</span></p>
                                    <Button variant="light">-</Button>
                                    <p style={{display: "inline-block", margin: "0 25px"}}>1</p>
                                    <Button variant="light">+</Button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__card" style={{marginTop: "8px"}}>
                            <span className="cart__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
</svg>

                            </span>
                            <div style={{display: "flex"}}>
                                <img className="cart__img" src={card_img} />

                                <div style={{marginLeft: "16px"}}>
                                    <p className="cart__title">Вечернее платье</p>
                                    <p className="cart__size">
                                        Размер: 42-50
                                    </p>
                                    <p className="cart__color">Цвет:
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="8" height="8" rx="4" fill="#B5A8A1"/>
<rect x="0.5" y="0.5" width="15" height="15" stroke="#E7E7E7"/>
</svg>
</span></p>
                                    <p className="cart__price">1 365 р <span>2 730 р</span></p>
                                    <Button variant="light">-</Button>
                                    <p style={{display: "inline-block", margin: "0 25px"}}>1</p>
                                    <Button variant="light">+</Button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__card" style={{marginTop: "8px"}}>
                            <span className="cart__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
</svg>

                            </span>
                            <div style={{display: "flex"}}>
                                <img className="cart__img" src={card_img} />

                                <div style={{marginLeft: "16px"}}>
                                    <p className="cart__title">Вечернее платье</p>
                                    <p className="cart__size">
                                        Размер: 42-50
                                    </p>
                                    <p className="cart__color">Цвет:
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="8" height="8" rx="4" fill="#B5A8A1"/>
<rect x="0.5" y="0.5" width="15" height="15" stroke="#E7E7E7"/>
</svg>
</span></p>
                                    <p className="cart__price">1 365 р <span>2 730 р</span></p>
                                    <Button variant="light">-</Button>
                                    <p style={{display: "inline-block", margin: "0 25px"}}>1</p>
                                    <Button variant="light">+</Button>
                                </div>
                            </div>
                        </div>
                        <div className="cart__card" style={{marginTop: "8px"}}>
                            <span className="cart__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
</svg>

                            </span>
                            <div style={{display: "flex"}}>
                                <img className="cart__img" src={card_img} />

                                <div style={{marginLeft: "16px"}}>
                                    <p className="cart__title">Вечернее платье</p>
                                    <p className="cart__size">
                                        Размер: 42-50
                                    </p>
                                    <p className="cart__color">Цвет:
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="8" height="8" rx="4" fill="#B5A8A1"/>
<rect x="0.5" y="0.5" width="15" height="15" stroke="#E7E7E7"/>
</svg>
</span></p>
                                    <p className="cart__price">1 365 р <span>2 730 р</span></p>
                                    <Button variant="light">-</Button>
                                    <p style={{display: "inline-block", margin: "0 25px"}}>1</p>
                                    <Button variant="light">+</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="cart__order">
                            <p className="cart__title">Сумма заказа</p>
                            <div className="cart__info">
                                <div className="order__name">
                                    <p className="name" style={{color: "#979797"}}>Количество линеек:</p>
                                    <p className="name" style={{color: "#979797"}}>Количество товаров:</p>
                                    <p className="name" style={{color: "#979797"}}>Стоимость:</p>
                                    <p className="name" style={{color: "#979797"}}>Скидка:</p>
                                </div>


                                <div className="order__price">
                                    <p className="name" style={{color: "#393939"}}>4 шт</p>
                                    <p className="name" style={{color: "#393939"}}>20 шт</p>
                                    <p className="name" style={{color: "#393939"}}>‭6 825 рублей</p>
                                    <p className="name" style={{color: "#393939"}}>‭125 рублей</p>
                                </div>

                            </div>
                            <span className="cart__line">
                                <svg width="336" height="1" viewBox="0 0 336 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="335.5" y2="0.500029" stroke="#BFBFBF" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>
                            </span>
                            <div className="cart__info">
                                <p className="name" style={{color: "#979797"}}>Итого к оплате:</p>
                                <p className="name" style={{color: "#393939"}}>‭6 700‬‬ рублей</p>

                            </div>
                            <button className="cart__btn">Оформить заказ</button>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Cart;