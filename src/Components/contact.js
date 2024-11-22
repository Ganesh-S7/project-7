import React, { useState } from 'react';
import './styles/contact.css';

const Contact = () => {

    const [user, setUser] = useState({ Name:'', email:'', subject:'', Message:''})

    let values, names
    const data =(e)=>{
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]:values})
    }

    const send = async (e) =>{
        const {Name, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            Headers: {
                'Contact-Type':'aplication/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        }
        const send = await fetch('https://react-ecommerce-contact-630be-default-rtdb.firebaseio.com/Message.json', option)

        if(send){
            alert("Message Sent")
        }else{
            alert("Error occured! Message not sent")
        }
    }

  return (
    <>
    {/* <div>helllo</div> */}
    <section className='contact-section'> 
        <div className='contact-container'>
            <div className='contact-form'>
                <h3>Contact us</h3>
                <form method='POST'>
                    <div className='contact-box'>
                        <div className='label'>
                            <h4>Name</h4>                        
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Name'  value={user.Name}  name='Name' onChange={data} />
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='label'>
                            <h4>E-mail</h4>                        
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail'  value={user.email}  name='email' onChange={data} />
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='label'>
                            <h4>Subject</h4>                        
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Subject'  value={user.subject}  name='subject' onChange={data} />
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='label'>
                            <h4>Message</h4>                        
                        </div>
                        <div className='input'>
                            <textarea  placeholder='Message !'  value={user.Message}  name='Message' onChange={data} />
                        </div>
                    </div>
                    <button type='submit' className='submit-btn' onClick={send}>Submit</button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact