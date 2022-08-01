import React from 'react';

const Form = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name,email)
        const data={name,email};
        event.target.reset();
        // fetch data below
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Type Your Name" name='name' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="email" placeholder="Type Your Email" name='email' className="input input-bordered input-primary w-full max-w-xs mb-4" /><br />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
        </div>
    );
};

export default Form;