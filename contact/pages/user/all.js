import {useState,useEffect} from 'react';
import { getUsers } from '../api/requests';

const all = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
        getUsers()
        .then(data => setData(data));
    },[])
    return (
        data ?
        <div className="responses">
            <h1>Users</h1>
        <div className="users">
            {data.map(el => <div className="message">
              <span className="user">{el.name}</span>
              <span>{el.email}</span> 
              <p>{el.message}</p>  
            </div>)}
               </div>
        </div> : 'loading'
    )
}

export default all
