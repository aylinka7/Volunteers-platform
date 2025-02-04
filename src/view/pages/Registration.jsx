import Banner2 from '../../assets/Banner.png'
import {useState} from "react";

export const Registration = () => {
    const [formData, setFormData] = useState({
        key: '',
        firstName: '',
        lastName: '',
        password: '',
    });

    const [error, setError] = useState("");

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            setError("Пароль должен содержать минимум 8 символов, 1 заглавную букву и 1 цифру.");
            alert(error);
            return;
        }
        setError("");

        console.log("form data: ", formData);
        alert("Регистрация успешна!");
    }



    return (
        <div className="login">
            <div className="left">
                <h1>спасибо что помогаете!</h1>
                <div className="banner"><img src={Banner2} alt=""/></div>
            </div>
            <div className="right">
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit} action="" className="logform">
                    <div className="field field-log">
                        <label className="label-log">Код</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required
                                   name='key'
                                   value={formData.key}
                                   onChange={handleChange}/>
                        </div>
                    </div>
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
                        <label className="label-log">Пароль</label>
                        <div className="field-container">
                            <input type="password" className="input-log" required
                                   name='password'
                                   value={formData.password}
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