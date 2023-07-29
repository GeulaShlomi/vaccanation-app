import React, { useState, useEffect } from 'react';
import './tabledata.css';
import { Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';

export default function InformationPage() {
    const [data, setData] = useState([])
    const [displayData,setDisplayData] = useState([])
    // const [city, setCity] = useState("");
    // const [birth, setBirth] = useState("");
    const [citySearch, setCitySearch] = useState("");
    const [birthSearch, setBirthSearch] = useState("");

    const URL = 'http://localhost:8080/Human';

    const checkSearch = (item) => {
        if (birthSearch === "" && citySearch === "")
            return true;
        if (checkBirth(item) && checkCity(item))
            return true;
        return false
    }


    const checkCity = (item) => {        
        return citySearch === '' || item.city === citySearch
    }

    const checkBirth = (item) => {
        return birthSearch === '' || item.dateOfBirth === birthSearch;
    }

    const clear = () => {
        setBirthSearch("");
        setCitySearch("");
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() =>{
        setDisplayData(data.filter((item) => checkSearch(item)))
    },[citySearch,birthSearch])

    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
            .then((response) => {
                console.log(response);
                setData(response);
                setDisplayData(response);
            })
    }

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(displayData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook,"name.xlsx")
    }

    return (
        <div className="row container-fluid justify-content-center my-5">
            <div className="col-12">
                <a  onClick={exportToExcel} className='btn my-3'
                    style={{ backgroundColor: 'rgb(40, 197, 244)' }}
                >export to Excel</a>
                <br />
                <tbody >
                    <tr>
                        <th>patient Id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>dateOfBirth</th>
                        <th>address</th>
                        <th>City</th>
                        <th>zipCode</th>
                        <th>landLine</th>
                        <th>cellularPhone</th>
                        <th>infected</th>
                        <th>conditions</th>
                    </tr>
                    {displayData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.zipCode}</td>
                            <td>{item.landLine}</td>
                            <td>{item.cellularPhone}</td>
                            <td>{item.infected ? 'Yes' : 'No'}</td>
                            <td>{item.conditions ? item.conditions : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
                <label htmlFor="searchBirth"
                    className='my-4' />
                Search by birth:
                <input id="searchBirth"
                    className={'mx-3'}
                    type="text"
                    value={birthSearch}
                    onChange={e => setBirthSearch(e.target.value)}
                    placeholder='YYYY-MM-DD'
                />
                <label htmlFor="searchCity"
                    className='my-4' />
                Search by city:
                <input id="searchCity"
                    type="text"
                    value={citySearch}
                    onChange={e => setCitySearch(e.target.value)}
                    className={'mx-3'}
                    placeholder='city'
                />
                <label htmlFor="clear">
                    <Button id="claer" size="sm"
                        onClick={clear}
                        className='my-3'
                        style={{ backgroundColor: 'rgb(244, 121, 28)', outlineColor: 'rgb(244, 121, 28)' }}
                        variant="outline-light">
                        Claer</Button>
                </label>
            </div>
        </div>
    );
}