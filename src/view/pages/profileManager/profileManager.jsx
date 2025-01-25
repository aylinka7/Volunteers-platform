import './profileManager.css'
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";

export const ProfileManager = () => {
    return (
        <div>
            <Header/>
            <div className="container-manager">
                <div className="profile">
                    <h1 className="h1-profile">Профиль менеджера</h1>
                    <div className="profile-name">Бердигожоев Камаль</div>
                    <div className="profile-email">Все запросы</div>
                    <div className="profile-email">Запросы компании</div>
                    <button className="header-btn profile-btn">Выйти из аккаунта</button>
                </div>
                <div className="manager">
                    <div className="profile-email">Посмотреть всех волонтеров</div>
                    <div className="profile-email">Добавить волонтера</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}