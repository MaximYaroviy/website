import React, { useState, useEffect } from 'react'; 
import '../styles/ExoticPets.css'; 
 
function ExoticPets() { 
  const [pets, setPets] = useState([]); 
  const [showDescription, setShowDescription] = useState(false); 
  const [selectedPet, setSelectedPet] = useState(null); 
  const [error, setError] = useState(null); 
 
  useEffect(() => { 
    fetch('http://localhost:8000/exotic-pets') 
      .then((response) => { 
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
      }) 
      .then((data) => { 
        setPets(data); 
      }) 
      .catch((error) => { 
        setError(error); 
      }); 
  }, []); 
 
  const handleToggleDescription = (pet) => { 
    setSelectedPet(pet); 
    setShowDescription(!showDescription); 
  }; 
 
  return ( 
    <div> 
      <h2>Exotic Pets</h2> 
      {error && <p className="error-message">Error: {error.message}</p>} 
      <div className="exotic-pets-container"> 
        {pets.map((pet) => ( 
          <div key={pet.id} className="pet-container" onClick={() => handleToggleDescription(pet)}> 
            <img src={pet.image} alt={pet.name} className="rounded-image"/> 
            <p>{pet.name}</p> 
            {showDescription && selectedPet && selectedPet.id === pet.id && ( 
              <div className="description-overlay"> 
                <div className="description-popup"> 
                  <h2>{pet.name}</h2> 
                  <p>{pet.description}</p> 
                  <button className="close-button" onClick={() => setShowDescription(false)}>Закрити</button> 
                </div> 
              </div> 
            )} 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default ExoticPets;