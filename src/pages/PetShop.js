import React, { useState, useEffect } from 'react'; 
import '../styles/PetShop.css'; 
import Filter from '../components/Filter'; 
import Search from '../components/Search'; 
import Receipt from '../components/Receipt'; 
 
function PetShop() { 
  const [pets, setPets] = useState([]); 
  const [quantities, setQuantities] = useState({}); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filterClass, setFilterClass] = useState(''); 
  const [selectedPet, setSelectedPet] = useState(null); 
  const [showReceipt, setShowReceipt] = useState(false); 
  const [error, setError] = useState(null); 
 
  useEffect(() => { 
    fetch('http://localhost:8000/pet-shop') 
      .then((response) => { 
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
      }) 
      .then((data) => { 
        setPets(data); 
        const initialQuantities = data.reduce((acc, pet) => { 
          acc[pet.id] = 1; 
          return acc; 
        }, {}); 
        setQuantities(initialQuantities); 
      }) 
      .catch((error) => { 
        setError(error); 
      }); 
  }, []); 
 
  const handleIncreaseQuantity = (id) => { 
    setQuantities((prevQuantities) => ({ 
      ...prevQuantities, 
      [id]: Math.min(prevQuantities[id] + 1, 5), 
    })); 
  }; 
 
  const handleDecreaseQuantity = (id) => { 
    setQuantities((prevQuantities) => ({ 
      ...prevQuantities, 
      [id]: Math.max(prevQuantities[id] - 1, 1), 
    })); 
  }; 
 
  const handleOrder = (pet) => { 
    setSelectedPet(pet); 
    setShowReceipt(true); 
  }; 
 
  const handleCloseReceipt = () => { 
    setShowReceipt(false); 
    setSelectedPet(null); 
  }; 
 
  const filteredPets = pets.filter((pet) => { 
    return ( 
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      (filterClass === '' || pet.class === filterClass) 
    ); 
  }); 
 
  return ( 
    <div> 
      <h2>Exotic Pets</h2> 
      <div className="pet-shop-page"> 
        <div className="filters-container"> 
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
          <Filter filterClass={filterClass} setFilterClass={setFilterClass} /> 
        </div> 
        <div className="pet-shop-container"> 
          {filteredPets.map((pet) => ( 
            <div key={pet.id} className="pet-shop-item"> 
              <img src={pet.image} alt={pet.name} className="pet-image" /> 
              <h3>{pet.name}</h3> 
              <p>Клас: {pet.class}</p> 
              <p>Ціна: {pet.price} UAH</p> 
              <div className="quantity-container"> 
                <button onClick={() => handleDecreaseQuantity(pet.id)}>-</button> 
                <span>{quantities[pet.id]}</span> 
                <button onClick={() => handleIncreaseQuantity(pet.id)}>+</button> 
              </div> 
              <button className="order-button" onClick={() => handleOrder(pet)}>Замовити</button> 
            </div> 
          ))} 
        </div> 
        {showReceipt && selectedPet && ( 
          <Receipt 
            pet={selectedPet} 
            quantity={quantities[selectedPet.id]} 
            onClose={handleCloseReceipt} 
          /> 
        )} 
      </div> 
      {error && <p className="error-message">Error: {error.message}</p>} 
    </div> 
  ); 
} 
 
export default PetShop;