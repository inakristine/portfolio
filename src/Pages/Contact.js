import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HomeTitle from '../components/homeTitles';

export default function ContactSpecific() {
    let [success, setSuccess] = useState(false);
    let [name, setname] = useState('');
    let [companyName, setCompanyName] = useState('');
    let [email, setEmail] = useState('');
    let [messageTitle, setMessageTitle] = useState('');
    let [message, setmessage] = useState('');
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;



    const HandleChange = input => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'name':
                setname(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'messageTitle':
                setMessageTitle(value);
                break;
            case 'messageber':
                setmessage(value);
                break;
            default:
                break;
        }
    };


    const HandleSubmit= (e) =>{
        e.preventDefault();
    
        setSuccess(!success);
        console.log(name);
        console.log(companyName);
        console.log(email);
        console.log(messageTitle);
        console.log(message);
        

        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }


    return (
        <div className='contact'>
        <HomeTitle theme='Contact me:' />
            <form className='contact__form' onSubmit={HandleSubmit} >
                
            <div className="contact__form--name">
                <h3>Please enter your name:</h3>
                <input className='contact__input' type='text'
                    name='name'
                    value={name}
                    onChange={HandleChange}
                />
                <p className={(name === '') ? 'error' : 'error__hide'}>Tha name field can not be empty</p>
                </div>

                <div className="contact__form--companyName">
                <h3>Please enter your company name:</h3>
                <input className='contact__input' type='text'
                    name='companyName'
                    value={companyName}
                    onChange={HandleChange}
                />
                <p className={(companyName === '') ? 'error' : 'error__hide'}>The company name field can not be empty</p>
                </div>

                <div className="contact__form--email">
                <h3>Please enter your email adress:</h3>
                <input className='contact__input' type='text'
                    name='email'
                    value={email}
                    onChange={HandleChange}
                />
                <p className={(emailPattern.test(email)) ? 'error__hide' : 'error'}>Please input valid an email adress</p>
                </div>

                <div className="contact__form--mTitile">
                <h3>Please enter a message title:</h3>
                <input className='contact__input' type='text'
                    name='messageTitle'
                    value={messageTitle}
                    onChange={HandleChange}
                />
                <p className={(messageTitle === '') ? 'error' : 'error__hide'}>The message title field can not be empty</p>
                </div>

                <div className="contact__form--message">
                <h3>Enter a message</h3>
                <textarea className='contact__input--message' type='text'
                    rows='15' cols='95'
                    name='messageber'
                    value={message}
                    onChange={HandleChange}
                />
                <p className={(message === '') ? 'error' : 'error__hide'}>The message field can not be empty</p>
                </div>
                <div className="contact__form--submit">
                <br />
                <input type='submit' disabled={(name === '') || (companyName === '') || (emailPattern.test(email) === false) || (message === '') || (messageTitle === '')} className='contact__submit' />
                </div>
            </form>
            {
                (success === true) ? <div className='contact__success'><h3>Yor input was successfully submitted</h3></div> : <div className='contact__success'><p>This button activates when your form is filled out correct.</p></div>
            }
        </div>
    )


}


