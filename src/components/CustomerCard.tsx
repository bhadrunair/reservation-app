import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {addFood} from '../features/customerSlice'

interface CusCard{
  name:string,
  id: number,
  value: string[]
}

const CustomerCard = ({name, id, value}: CusCard) => {
  const dispatch = useDispatch();
  const [plate, addPlate] = useState('');

    return (
        <div>
            <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
            {
            value.map((item, index) => {return <div className="customer-food" key={index}>{item}</div>})
            }
              <div className="customer-food-input-container">
                <input value={plate} onChange={(e) => {addPlate(e.target.value)}}/>
                <button onClick={() => dispatch(addFood({id:id, food:plate}))}>Add</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default CustomerCard
