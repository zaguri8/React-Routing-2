import { useNavigate } from "react-router"


export default function FormPage() {


    const nav = useNavigate()

    const formSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const date = e.target[1].value

        nav('/summary-page', { state: { name, date } })
    }

    return <form onSubmit={formSubmit}>
        <input type="text" placeholder="הכנס את שמך"></input>
        <input type="date" placeholder="הכנס תאריך לידה"></input>
        <button type="submit">שלח</button>
    </form>
}