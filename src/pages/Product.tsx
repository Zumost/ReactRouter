import { useParams } from "react-router"
export default function Product() {
    let { id } = useParams();
    return <h1>Product ID : {id}</h1>
}