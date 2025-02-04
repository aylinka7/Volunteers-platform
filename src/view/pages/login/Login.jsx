import './login.css'
import Banner from '../../../assets/Banner.png'
import {useState} from "react";

export const Login = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        key: '',
    });

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("form data: ", formData);
    }

    return (
        <div className="login">
            <div className="left">
                <h1>спасибо что помогаете!</h1>
                <div className="banner"><img src={Banner} alt=""/></div>
            </div>
            <div className="right">
                <h1>Страница входа</h1>
                <form onSubmit={handleSubmit} action="" className="logform">
                    <div className="field field-log">
                        <label className="label-log">Имя</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="field field-log">
                        <label className="label-log">Фамилия</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required
                                   name='lastName'
                                   value={formData.lastName}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="field field-log">
                        <label className="label-log">E-mail</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required
                                   name='key'
                                   value={formData.key}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="btn-login">
                        <input type="submit" className="submit" value="Войти"/>
                    </div>
                </form>
            </div>
        </div>
    )
}