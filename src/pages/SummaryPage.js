import { Navigate, useLocation } from "react-router"

export default function SummaryPage() {


    const location = useLocation()

    if (!location.state) {
        alert('You have reached here iilegally')
        return <Navigate to="/form-page" />
    }


    return <div>

        Name: {location.state.name}
        <br />
        Birth Date: {location.state.date}

    </div>
}