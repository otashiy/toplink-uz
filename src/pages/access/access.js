import { Link } from "react-router-dom"

const Access = () => {
    return (
        <>
        <h1>Kirish</h1>
        <p>Barcha xarajatlar va daromadingizni bir joyda kuzatib borish uchun hozir ro'yxatdan o'ting</p>
        <form action="#">
            <label htmlFor="email">
            Elektron pochta
            <input type="email" required placeholder="ex abc@gmail.com" />
            </label>
            <label htmlFor="password">
            Elektron pochta
            <input type="password" required placeholder="password" />
            </label>
            <button type="submit">Kirish</button>
            <p>Accountingiz mavjud emasmi?</p>
            <Link to={"/sign-up"}>
            Ro'yxatdan o'tish
            </Link>
        </form>
        </>
    )
}

export default Access;