import React from 'react'
import {removeReservation} from '../features/reservationSlice'
import {useDispatch} from 'react-redux'
import {addCustomer, mapID} from '../features/customerSlice'


interface Reserved{
    name: string,
    id: number
}

const ReservationCard = ({name , id}: Reserved) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div className="reservation-card-container" onClick={() => {dispatch(removeReservation(id)); 
            dispatch(addCustomer({name:name, id:id, value:[]}));
            dispatch(mapID())}}>{name}</div>
        </div>
    )
}

export default ReservationCard
