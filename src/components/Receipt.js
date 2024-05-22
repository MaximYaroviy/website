import React from 'react'; 
import '../styles/Receipt.css'; 
import logo from '../images/logo.jpg'; 
 
function Receipt({ pet, quantity, onClose }) { 
  const totalPrice = pet.price * quantity; 
 
  const handleConfirmOrder = () => { 
    alert("Замовлення прийняте. Чекайте поки з вами зв'яжеться менеджер"); 
    onClose(); 
  }; 
 
  return ( 
    <div className="receipt-overlay"> 
      <div className="receipt-container"> 
        <img src={logo} alt="Logo" className="receipt-logo" /> 
        <p className="receipt-message">Будь-ласка будьте відповідальними та піклуйтесь про тварин</p> 
        <img src={pet.image} alt={pet.name} className="receipt-image" /> 
        <p className="receipt-item">Назва: {pet.name}</p> 
        <p className="receipt-item">Клас: {pet.class}</p> 
        <p className="receipt-item">Кількість: {quantity}</p> 
        <p className="receipt-item">Ціна за одиницю: {pet.price} UAH</p> 
        <hr className="receipt-line" /> 
        <p className="receipt-total">Загальна ціна: {totalPrice} UAH</p> 
        <button className="receipt-close-button" onClick={handleConfirmOrder}>Оформити замовлення</button> 
        <button className="receipt-close-button" onClick={onClose}>Відмінити замовлення</button> 
      </div> 
    </div> 
  ); 
} 
 
export default Receipt;