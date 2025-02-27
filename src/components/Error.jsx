import { useRouteError } from "react-router-dom"

let Error = () =>{
    const error_page = useRouteError();
    return(
        <div>
            <h1>Ops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{error_page.status}</h3>
            <h3>{error_page.statusText}</h3>
        </div>
    )
}
export default Error;