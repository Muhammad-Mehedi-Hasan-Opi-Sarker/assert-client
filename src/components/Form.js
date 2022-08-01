import React from 'react';

const Form = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        console.log({name,email});
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