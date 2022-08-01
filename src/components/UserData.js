import React, { useEffect, useState } from 'react';

const UserData = () => {
    /* const [allData, setData] = useState([]);
    const [reload,setReload] =useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/user`;
        fetch(url).then(res => res.json()).then(data => setData(data))
    }, [reload]) */
    return (
        <div>
            {/* <h1 className='text-2xl font-bold text-primary'>Submit Your Data</h1> */}
            {/* <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((data, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default UserData;