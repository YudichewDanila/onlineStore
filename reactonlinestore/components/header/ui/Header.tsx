import style from "./Header.module.scss"

const Header = () => {
    return (
        <header>
            <div className={style.header}>
                <div className={style.header_logo}>TehnoMarket</div>
                <div className={style.header_serchBlock}>
                    <input className={style.header_serchInputBlock} placeholder="Поиск..." />
                </div>
                <div className={style.header_settings}>
                    <div className={style.header_settingsItem}>Ru</div>
                    <div className={style.header_settingsItem}>Город</div>
                    <div className={style.header_settingsItem}>Корзина</div>
                    <div className={style.header_settingsItem}>Войти</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
