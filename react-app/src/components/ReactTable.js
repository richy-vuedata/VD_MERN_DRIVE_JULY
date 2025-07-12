import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchApi';
import DataTable from 'react-data-table-component';

const Reacttable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, []);

    const fetchAPI = async () => {
        try {
            const output = await fetchData();
            setData(output);
            console.log(output, "output");
        } catch (err) {
            console.error("Reacttable fetch error:", err);
        }
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Username',
            selector: row => row.username,
        },
        {
            name: 'Website',
            selector: row => row.website,
        },
    ];

    return (
        <div>
            <h1>Table</h1>
            <DataTable 
                columns={columns} 
                data={data || []} 
            />
        </div>
    );
};

export default Reacttable;
