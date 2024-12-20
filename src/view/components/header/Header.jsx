import './header.css';
import Lang from '../../../assets/lang.svg'

export const Header = () => {
    return (
        <header className="header">
            <div className="lang">
                <img src={Lang} alt=""/>
            </div>
            <nav className="nav">
                <p>Волонтёрство</p>
                <p>Организации</p>
                <p>Контактные данные</p>
            </nav>
            <button className="header-btn">Войти</button>
        </header>
    )
}