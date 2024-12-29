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
                            <input type="text" className="input-thin" placeholder="Имя" required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Фамилия *</label>
                        <div className="field-container">
                            <input type="text" className="input-thin" placeholder="Фамилия" required/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Номер телефона *</label>
                        <div className="field-container">
                            <input type="text" className="input-thin" placeholder="996... ... ..." required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label className="label">О себе</label>
                        <div className="field-container">
                            <textarea className="input-thin input-thick" placeholder="О себе"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Адресс *</label>
                            <div className="field-container">
                                <input type="text" className="input-thin" placeholder="Адресс" required/>
                            </div>
                        </div>
                        <div className="field field2">
                            <label className="label">Вид помощи *</label>
                            <div className="field-container">
                                {/*<input type="text" name="select" className="input-thin" placeholder="Вид помощи" list="datalist" required/>*/}
                                <select name="help" className="input-thin select" required>
                                    <option selected disabled hidden>Выберите помощь</option>
                                    <option value="1">Гуманитарная помощь</option>
                                    <option value="2">Помощь в поиске работы</option>
                                    <option value="3">Помощь по дому</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Опишите подробнее в чем вы нуждаетесь *</label>
                    <div className="field-container">
                        <textarea className="input-thin input-bold" placeholder="Описание помощи" required/>
                    </div>
                </div>
                <div className="btn-container">
                    <input type="submit" className="submit" value="Отправить форму"/>
                </div>
            </form>
        </div>
    )
}