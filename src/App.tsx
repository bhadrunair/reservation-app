import React, { useState } from "react";
import "./App.css";
import { addReservation } from "./features/reservationSlice";
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from './app/store'
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [addboi, setaddboi] = useState('');
  const dispatch = useDispatch();
  const reservedBois = useSelector((state:RootState) => state.reservation.value);
  const foodies = useSelector((state:RootState) => state.customer.value);

  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservedBois.map((bois,index:number) => <ReservationCard name={bois} id={index} key={index}/> )}
              
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={addboi} onChange={(e) => {setaddboi(e.target.value)}}/>
            <button onClick={() => {dispatch(addReservation(addboi))}}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {     foodies.map((foodboi, index) => {
              return <CustomerCard name={foodboi.name} id={index} value={foodboi.value} key={index}/>
            })
          }
            
              
        </div>
      </div>
    </div>
  );
}

export default App;