import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="line">
                <nav className="menu">
                    <p>Волонтёрство</p>
                    <p>Организации</p>
                    <p>Контактные данные</p>
                </nav>
                <button className="button-footer">Получить помощь</button>
            </div>
            <p className="copyrights">2024, Ailin & Aigerim</p>
        </footer>
    )
}