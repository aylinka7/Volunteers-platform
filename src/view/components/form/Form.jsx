import './form.css'

export const Form = () => {
    return (
        <div className="form-wrap">
            <div className="bold">Форма для получения Помощи</div>
            <form action="" className="form">
                <div className="row">
                    <div className="field">
                        <label className="label">Имя *</label>
                        <div className="field-container">
                            <input type="text" className="input-thin"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Фамилия *</label>
                        <div className="field-container">
                            <input type="text" className="input-thin"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Номер телефона *</label>
                        <div className="field-container">
                            <input type="text" className="input-thin"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label className="label">О себе</label>
                        <div className="field-container">
                            <input type="text" className="input-thin input-thick"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Адресс *</label>
                            <div className="field-container">
                                <input type="text" className="input-thin"/>
                            </div>
                        </div>
                        <div className="field field2">
                            <label className="label">Вид помощи *</label>
                            <div className="field-container">
                                <input type="text" className="input-thin"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Опишите подробнее в чем вы нуждаетесь *</label>
                    <div className="field-container">
                        <input type="text" className="input-thin input-bold"/>
                    </div>
                </div>
                <div className="btn-container">
                    <input type="submit" className="submit" value="Отправить форму"/>
                </div>
            </form>
        </div>
    )
}