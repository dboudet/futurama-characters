export default function Results({char}) {
    const { images, name, age, species, gender, occupation, sayings } = char
    
    return(
        <div className="results">
            {images && <img src={images.main} alt={`${name.first} ${name.middle} ${name.last}`} />}
            <h2>{name.first} {name.middle} {name.last}</h2>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Species:</strong> {species}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Occupation:</strong> {occupation}</p>
                <p><strong>Sayings:</strong><br/>{sayings.slice(0,5).map( (saying) => <p>{saying}</p>)}</p>
            {/* <label>Age: {age}</label>
            <label>Gender: {gender}</label>
            <label>Species: {species}</label> */}
        </div>
        )
}