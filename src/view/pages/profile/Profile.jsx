import './profile.css'
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";

export const Profile = () => {
    return (
        <div>
            <Header/>
            <div className="profile">
                <h1 className="h1-profile">Профиль волонтера</h1>
                <div className="profile-name">Бердигожоев Камаль</div>
                <div className="profile-email">Все запросы</div>
                <div className="profile-email">Запросы компании</div>
                <button className="header-btn profile-btn">Выйти из аккаунта</button>
            </div>
            <Footer/>
        </div>
    )
}