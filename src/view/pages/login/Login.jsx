import './login.css'
import Banner from '../../../assets/Banner.png'

export const Login = () => {
    return (
        <div className="login">
            <div className="left">
                <h1>спасибо что помогаете!</h1>
                <div className="banner"><img src={Banner} alt=""/></div>
            </div>
            <div className="right">
                <h1>Страница входа</h1>
                <form action="" className="logform">
                    <div className="field field-log">
                        <label className="label-log">Имя</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required/>
                        </div>
                    </div>
                    <div className="field field-log">
                        <label className="label-log">Фамилия</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required/>
                        </div>
                    </div>
                    <div className="field field-log">
                        <label className="label-log">E-mail</label>
                        <div className="field-container">
                            <input type="text" className="input-log" required/>
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