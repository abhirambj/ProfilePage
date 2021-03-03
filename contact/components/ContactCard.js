import React,{useState} from 'react'
import {SubmitData} from '../pages/api/requests';

function ContactCard() {
    const [data,setData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const onSubmit = e => {
        e.preventDefault();
        SubmitData(data)
        .then(data => {
            setData({
                ...data,
                name:'',
                email:'',
                message:''
            })
        })
    }
    return (
        <div>
            <h3>Contact Us</h3>
        <form action="">
            <div className="formGroup">
                <input type="text" value={data.name} onChange={e => setData({...data,name:e.target.value})} placeholder="Enter name" name="name" id="name"/>
            </div>
            <div className="formGroup">
                <input type="email" value={data.email} onChange={e => setData({...data,email:e.target.value})} placeholder="Enter Email" name="email" id="email"/>
            </div>
            <div className="formGroup">
                <textarea value={data.message} placeholder="Type a message...." name="" onChange={e => setData({...data,message:e.target.value})} id="" cols="30" rows="10"></textarea>
            </div>
            <button onClick={onSubmit} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default ContactCard
