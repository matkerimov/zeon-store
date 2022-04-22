import React, {useEffect, useState} from 'react';
import "./style.css"
import axios from "axios";

const CallModal = ({modal}) => {



    const [callModal, setCallModal] = useState(true)
    const [order, setOrder] = useState(false)
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        let newUser = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(newUser)
    }

    useEffect(() => {
        if (user.name && user.phone) {
            setOrder(true)
        }
    }, [handleChange])

    const newFeedback = () => {
        if (!user.name || !user.phone) {
            alert('Заполните все поля!')
            return
        }
        // addFeedback(user)
        setUser({})
        setCallModal(false)
    }



    return (

        <div className="callModal">
            {
                callModal ? (

                        <div className="callModal__container">
                            <div onClick={() => modal(false)} className="callModal__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.23814 7.00015L13.7435 1.49459C14.0855 1.15283 14.0855 0.598303 13.7435 0.256541C13.4014 -0.0855136 12.8475 -0.0855136 12.5055 0.256541L7.00015 5.7621L1.49453 0.256541C1.15249 -0.0855136 0.59857 -0.0855136 0.25653 0.256541C-0.08551 0.598303 -0.08551 1.15283 0.25653 1.49459L5.76215 7.00015L0.25653 12.5057C-0.08551 12.8475 -0.08551 13.402 0.25653 13.7438C0.42755 13.9145 0.651685 14 0.875529 14C1.09937 14 1.32351 13.9145 1.49453 13.7435L7.00015 8.2379L12.5055 13.7435C12.6765 13.9145 12.9006 14 13.1245 14C13.3483 14 13.5724 13.9145 13.7435 13.7435C14.0855 13.4017 14.0855 12.8472 13.7435 12.5054L8.23814 7.00015Z" fill="#333333"/>
                                </svg>

                            </div>
                            <div className="calModal__info">
                                <p className="callModal__title">Если у Вас остались вопросы</p>
                                <p className="callModal__subtitle">Оставьте заявку и мы обязательно Вам перезвоним</p>
                                <div className="callModal__form">
                                    <div className="callModal__first">
                                        <input onChange={handleChange} className="callModal__input" placeholder="Как к Вам обращаться?" />
                                        <div className="callModal__svg">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <ellipse cx="8.99916" cy="5.57143" rx="4.57143" ry="4.57143" stroke="#DCDCDC" strokeWidth="1.7"/>
                                                <path d="M16.9198 17.0172C16.6486 15.1091 15.6979 13.3631 14.2422 12.1001C12.7865 10.837 10.9239 10.1419 8.99667 10.1426C7.06946 10.1432 5.20725 10.8395 3.75243 12.1035C2.29761 13.3675 1.34798 15.1142 1.07812 17.0224" stroke="#DCDCDC" strokeWidth="1.7"/>
                                            </svg>

                                        </div>
                                    </div>
                                    <div className="callModal__first">
                                        <input onChange={handleChange} className="callModal__input" placeholder="Номер телефона" />
                                        <div className="callModal__svg">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.0947 17.3245L21.0951 17.3217C21.1409 17.0004 21.1216 16.6731 21.0383 16.3594C20.9551 16.0457 20.8097 15.7519 20.6107 15.4955L20.6034 15.4861L20.5948 15.478L20.5221 15.4098L20.5224 15.4094L20.5125 15.4016L17.7542 13.2204L17.7542 13.2203L17.7511 13.218C17.3067 12.8853 16.7616 12.7153 16.207 12.7364C15.6523 12.7576 15.1217 12.9686 14.704 13.3342L14.704 13.3341L14.6997 13.3382L13.568 14.4094C12.3779 14.1147 10.9278 13.2037 9.74151 12.0675C9.13721 11.4888 8.60643 10.8563 8.21673 10.2252C7.84125 9.61721 7.60173 9.01857 7.54656 8.47537L8.67698 7.28384L8.67712 7.28398L8.68208 7.27819C9.04169 6.85841 9.24691 6.32826 9.26365 5.77576C9.28039 5.22326 9.10765 4.68165 8.77412 4.24087L8.77414 4.24085L8.7722 4.23839L6.60111 1.49047C6.56962 1.44885 6.53158 1.41264 6.48848 1.38323C6.2336 1.18645 5.94203 1.04246 5.63082 0.95969C5.31797 0.876487 4.99162 0.85684 4.67106 0.901911L4.67105 0.901872L4.66766 0.902429C3.48376 1.09666 2.53663 1.5222 1.88374 2.1549C1.22812 2.79026 0.879297 3.62511 0.879297 4.61312C0.879297 8.99163 2.61865 13.1908 5.71473 16.2869C8.8108 19.383 13.01 21.1223 17.3885 21.1223C18.3765 21.1223 19.2114 20.7735 19.8463 20.1166C20.4785 19.4625 20.9028 18.5129 21.0947 17.3245ZM5.02239 2.10439L5.02236 2.10471L5.03219 2.10475C5.2744 2.10567 5.51062 2.17905 5.71055 2.31522L7.81771 4.97736C7.98115 5.19537 8.06645 5.46206 8.05986 5.73448C8.0533 6.00592 7.95587 6.26727 7.78324 6.47674L6.49613 7.83637L6.49556 7.83697C6.3912 7.94844 6.33289 8.09528 6.33236 8.24798V8.2485C6.33236 9.77397 7.4247 11.5037 8.86059 12.9013C10.3 14.3024 12.126 15.4103 13.6556 15.6672L13.656 15.6672C13.7479 15.6824 13.8421 15.6762 13.9313 15.6489C14.0202 15.6217 14.1017 15.5743 14.1694 15.5104C14.1695 15.5103 14.1696 15.5102 14.1697 15.5101L15.5299 14.2361C15.738 14.0596 15.9996 13.9584 16.2724 13.9489C16.5455 13.9394 16.8139 14.0224 17.034 14.1844L19.719 16.2963C19.891 16.5432 19.962 16.847 19.9169 17.145C19.8072 17.7936 19.5979 18.4899 19.2044 19.021C18.8159 19.5454 18.2455 19.9135 17.3885 19.9135C13.3306 19.9135 9.43888 18.3015 6.56951 15.4321C3.70014 12.5627 2.08814 8.67103 2.08814 4.61312C2.08814 3.75604 2.45627 3.18585 2.98078 2.79979C3.51068 2.40976 4.20539 2.2049 4.85389 2.10398C4.91 2.10037 4.96629 2.1005 5.02239 2.10439Z" fill="#DCDCDC" stroke="#DCDCDC" strokeWidth="0.3"/>
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                                <button className={order ? "active" : "disabled"} onClick={() => newFeedback()}>Заказать звонок</button>
                            </div>
                        </div>

                ) : (
                    <div className="doneModal">
                        <div className="doneModal__svg">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.2332 37.3375L56.1314 10.0091C56.8753 9.19257 58.1403 9.13372 58.9568 9.87764L59.4648 10.3404C60.2812 11.0843 60.3401 12.3493 59.5962 13.1658L32.8496 42.5232C32.0945 43.352 30.8057 43.3983 29.9932 42.6258L16.8581 30.1393C16.0575 29.3782 16.0255 28.1122 16.7866 27.3117L17.2604 26.8133C18.0215 26.0128 19.2874 25.9808 20.0879 26.7419L31.2332 37.3375ZM60.0901 23.7183C59.7296 22.2611 57.9161 21.8977 56.9068 23.009L56.1956 23.7921C55.7416 24.292 55.5761 24.9861 55.718 25.6463C56.0869 27.363 56.2812 29.1436 56.2812 30.9688C56.2812 44.9258 44.9258 56.2812 30.9688 56.2812C17.0117 56.2812 5.65625 44.9258 5.65625 30.9688C5.65625 17.0117 17.0117 5.65625 30.9688 5.65625C36.7231 5.65625 42.0343 7.58744 46.2907 10.8344C47.164 11.5006 48.4155 11.4422 49.1539 10.6291L49.6274 10.1078C50.3731 9.28674 50.312 8.00973 49.4393 7.32514C44.1862 3.20446 37.7495 0.96875 30.9688 0.96875C22.9557 0.96875 15.4216 4.08923 9.75562 9.75562C4.08923 15.4216 0.96875 22.9557 0.96875 30.9688C0.96875 38.9818 4.08923 46.5159 9.75562 52.1819C15.4216 57.8483 22.9557 60.9688 30.9688 60.9688C38.9818 60.9688 46.5159 57.8483 52.1819 52.1819C57.8483 46.5159 60.9688 38.9818 60.9688 30.9688C60.9688 28.4922 60.6698 26.0619 60.0901 23.7183Z" fill="#26AD5C"/>
                            </svg>

                        </div>
                        <div className="doneModal__title">Спасибо!</div>
                        <div className="doneModal__subtitle">Ваша заявка была принята ожидайте, скоро Вам перезвонят</div>
                        <button onClick={() => modal(false)} className="doneModal__btn">Продолжить покупки</button>
                    </div>
                )
            }
        </div>



    );
};

export default CallModal;