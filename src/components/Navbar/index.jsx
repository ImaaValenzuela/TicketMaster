import { useState } from "react"

const Navbar = ({onSearch}) => {

    const [search, setSearch] = useState('')

    const handleInputChange = (evn) => {
        setSearch(evn.target.value)
    }

    const handleInputKeyDown = (evn) => {
        if(evn.key === "Enter"){
            onSearch(search)
        }
    }



    return(
        <div>
            <p>Eventos Disponibles</p>
            <input 
                placeholder="Busca tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    )
}

export default Navbar