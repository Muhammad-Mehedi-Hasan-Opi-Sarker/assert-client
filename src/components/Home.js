import React from 'react';
import Form from './Form';
import UserData from './UserData';

const Home = () => {
    return (
        <div>
            <UserData></UserData>
            {/* <h1 className='text-2xl font-bold text-primary'>Submit Your Data</h1> */}
            <Form></Form>
            
        </div>
    );
};

export default Home;