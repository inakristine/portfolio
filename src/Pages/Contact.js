import React, { useState } from 'react';

export default function ContactSpecific() {
    let [success, setSuccess] = useState(false);
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [phoneNum, setPhoneNum] = useState('');
    let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
    let phonePattern = /^([0-9]{9})$/;

    // Both Thess patterns works just fine in a regex-tester online, AND in anoter website, but not in this one :-/
    // let phonePattern = /([0-9]{3}[-|\s|.])([0-9]{3}[-|\s|.])([0-9]{3})$/;
    // let phonePattern = /^\d{3}([\-\s\.])?\d{3}([\-\s\.])?\d{3}$/g;

    const HandleChange = input => {
        let name = input.target.name;
        let value = input.target.value;

        switch (name) {
            case 'firstname':
                setFirstName(value);
                break;
            case 'lastname':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNum(value);
                break;
            default:
                break;
        }
    };

    const HandleSubmit = (evt) => {
        evt.preventDefault();
        setSuccess(!success);
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phoneNum);
    }

    return (
        <div className='pageContent'>
            <div className='col-sm-6'>
                <h1>Contact form</h1>
                <form onSubmit={HandleSubmit} >

                    <p>Enter your first name</p>
                    <input type='text'
                        name='firstname'
                        className='form-controll'
                        value={firstName}
                        onChange={HandleChange}
                    />
                    <p className={(firstName === '') ? 'error' : 'error__hide'}>Please enter a first name</p>

                    <p>Enter your last name</p>
                    <input type='text'
                        name='lastname'
                        className='form-controll'
                        value={lastName}
                        onChange={HandleChange}
                    />
                    <p className={(lastName === '') ? 'error' : 'error__hide'}>Please enter a last name</p>
                   

                    <p>Enter your email adress</p>
                    <input type='text'
                        name='email'
                        className='form-controll'
                        value={email}
                        onChange={HandleChange}
                    />
                    <p className={(emailPattern.test(email)) ? 'error__hide' : 'error'}>Please enter an email name</p>

                    <p>Enter your Phone number</p>
                    <input type='number'
                        name='phoneNumber'
                        className='form-controll'
                        value={phoneNum}
                        onChange={HandleChange}
                    />
                    <p className={(phonePattern.test(phoneNum)) ? 'error__hide' : 'error'}>Please enter 9 digits</p>
                    <br />

                    <br />
                    <input type='submit' disabled={(firstName === '') || (lastName === '') || (emailPattern.test(email) === false) || (phonePattern.test(phoneNum) === false)} className='btn' />
                </form>
                {
                    (success === true) ? <div><h4>Yor input was successfully submitted</h4></div> : <div>This button activates when your form is filled out correct.</div>
                }

            </div>
        </div>
    )


}


