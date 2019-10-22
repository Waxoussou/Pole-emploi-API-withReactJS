import React, { useState, useEffect } from 'react';
import './header.css';

const Header = (props) => {


    const [word, setWord] = useState('');
    const [departement, setDepartement] = useState('');
    const [range, setRange] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { word, departement, range };
        fetch('http://127.0.0.1:3001/',
            {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search-term">recherche par terme</label>
                    <input id='search-term' onChange={e => setWord(e.target.value)} type="text" />
                </div>
                <div>
                    <label htmlFor="departement-select">choisir un département</label>
                    <select name="departement" id="departement-select" onChange={e => setDepartement(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="01">01</option>
                        <option value="31">31</option>


                    </select>
                </div>
                <div id='range'>
                    {/* <label htmlFor="range-start"></label><input id='range-start' type="number" /> */}
                    <label htmlFor="range-end">indiquez le nombre de résultats à afficher</label>
                    <input id='range-end' type="number" onChange={e => setRange(e.target.value)} />
                </div>
                <div id='date-of-creation'>
                    <label htmlFor="start-date"></label><input type="date" id='start-date' />
                    <label htmlFor="end-date"></label><input type="date" id='end-date' />
                </div>
                <input type="submit" value='submit' />
            </form>
        </div>
    )
}

export default Header;