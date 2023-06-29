import {useEffect, useState} from 'react'
import Results from './Results'

export default function InputForm() {
    const [character, setCharacter] = useState([])
    const [lookupId, setLookupId] = useState('')

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(response => response.json())
            .then( data => {
                if (lookupId) {
                    const filteredChar = data.filter(v => v.id.toString() === lookupId.toString())
                    setCharacter(filteredChar)
                } else {
                    setCharacter([])
                }
            })
            .catch(err => console.error(err))
    },[lookupId])
    
    console.log(character)
    
    return(
        <main>
            <div id="character-select">
                <label>Select a Futurama character to learn more about them:<br/></label>
                <select 
                    value={lookupId}
                    onChange={event => {
                        setLookupId(event.target.value)
                    }}
                    name="characters"
                >
                    <option value="0">Select a character...</option>
                    <option value="1">Fry</option>
                    <option value="2">Leela</option>
                    <option value="3">Bender</option>
                    <option value="8">Dr. Zoidberg</option>
                    <option value="4">Professor Farnsworth</option>
                    <option value="6">Hermes</option>
                    <option value="5">Amy</option>
                    <option value="9">Zapp Brannigan</option>
                    <option value="13">Kif</option>
                    <option value="11">Scruffy</option>
                </select>
            </div>
            <div id="results-container">
                {character?.map((character) => <Results key={character.id} char={character} /> )}
            </div>
        </main>
    )
}