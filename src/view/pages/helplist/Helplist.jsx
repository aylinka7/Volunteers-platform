import './helplist.css'
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";

export const Helplist = () => {
    return (
        <div>
            <Header/>
            <div className="helplist-container">
                <h1 className="h1-helplist">Все запросы</h1>
                <section className="helplist">
                    <div className="block-helplist">
                        <div className="title-helplist">Гуманитарная помощь</div>
                        <div className="descr-helplist">У нас закончилась мука и соль, и было бы хорошо гречку</div>
                        <div className="descr-helplist">Я мать одиночка у меня 3 маленьких детей, я без работы</div>
                    </div>
                    <div className="block-helplist">
                        <div className="title-helplist">Гуманитарная помощь</div>
                        <div className="descr-helplist">У нас закончилась мука и соль, и было бы хорошо гречку</div>
                        <div className="descr-helplist">Я мать одиночка у меня 3 маленьких детей, я без работы</div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}