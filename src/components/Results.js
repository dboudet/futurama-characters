export default function Results({char}) {
    const { images, name, age, species, gender, occupation, sayings } = char
    const newImageUrl = !images ? '' : images.main.replace(new RegExp(/\.png.*/),'.png')

    return(
        <div className="results">
                <img 
                    src={newImageUrl} 
                    alt={`${name.first} ${name.middle} ${name.last}`}
                />
            <h2>{name.first} {name.middle} {name.last}</h2>
                {char.age && <p><strong>Age:</strong> {age}</p>}
                {char.species && <p><strong>Species:</strong> {species}</p>}
                {char.gender && <p><strong>Gender:</strong> {gender}</p>}
                {char.occupation && <p><strong>Occupation:</strong> {occupation}</p>}
                {char.sayings && <p><strong>Sayings:</strong><br/>{sayings.slice(0,5).map( (saying) => <span className="saying">{saying}<br/></span>)}</p>}
        </div>
        )
}