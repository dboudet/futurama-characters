import {useState} from 'react'
import {APIKEY} from '../config'

function InputForm() {
    const [characters, setCharacters] = useState('')

    const matchCharacter = () => {
        console.log("Searching")
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(res => res.json())
            .then(json => {
                setCharacters(json.characters)
                return
            })
            .catch(err => console.log(err))
    }
    return(
        <div id="character-select">
            <label for="characters">Select a Futurama character:</label>
            <select id="characters" name="characters">
                <option value="fry">Fry</option>
                <option value="leela">Leela</option>
                <option value="bender">Bender</option>
                <option value="zoidberg">Dr. Zoidberg</option>
                <option value="farnsworth">Professor Farnsworth</option>
                <option value="hermes">Hermes</option>
                <option value="amy">Amy</option>
                <option value="zapp">Zapp Brannigan</option>
                <option value="kif">Kif</option>
                <option value="scruffy">Scruffy</option>
            </select>
        </div>
    )
}

export default InputForm