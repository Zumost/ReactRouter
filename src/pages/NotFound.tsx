import { useEffect } from "react"
import { useNavigate } from "react-router"
export default function NotFound() {
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    });
    return <h1>NotFound</h1>
}