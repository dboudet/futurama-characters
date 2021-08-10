export default function Results({char}) {
    const { images, name, age, species, gender, occupation, sayings } = char
    
    return(
        <div className="results">
            {char.images !== undefined && 
                <img 
                    src={images.main} 
                    alt={`${name.first} ${name.middle} ${name.last}`}
                />
            }
            <h2>{name.first} {name.middle} {name.last}</h2>
                {char.age && <p><strong>Age:</strong> {age}</p>}
                {char.species && <p><strong>Species:</strong> {species}</p>}
                {char.gender && <p><strong>Gender:</strong> {gender}</p>}
                {char.occupation && <p><strong>Occupation:</strong> {occupation}</p>}
                {char.sayings && <p><strong>Sayings:</strong><br/>{sayings.slice(0,5).map( (saying) => <p className="saying">{saying}</p>)}</p>}
        </div>
        )
}