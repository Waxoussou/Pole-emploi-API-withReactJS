import React, { useState, useEffect } from 'react';
import JobContainer from './JobContainer';
import Header from './component/Header';
import './App.css';

function App() {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState('');
  // const [departement, setDepartement] = useState('');
  const [range, setRange] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3001/')
      .then(res => res.json())
      .then(json => {
        setJobs(json.resultats);
        setLoading(false);
      })
  }, []);

  const handleSubmit = (e) => {
    setLoading(true)
    let data = { word, range };
    fetch('http://127.0.0.1:3001/',
      {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .catch(err => console.log(err))
      .then((res) => res.json())
      .then((res) => {
        setJobs(res.resultats);
        setLoading(false);
      })
    e.preventDefault();
  }
  return (
    <div className="App">
      <div className='header'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchBar"></label>
          <input id='searchBar' type="text" onChange={e => setWord(e.target.value)} value={word} />
          <select name="range" id="rangeSelector" onChange={e => setRange(e.target.value)}>
            <option value="">--Nb result--</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <input type="submit" value='Search' id='searchSubmit' />
        </form>
      </div>

      {
        loading ?
          <div className='loading'>...loading data</div>
          : jobs.map((job, index) =>
            < JobContainer
              key={index}
              name={job.intitule}
              contrat={job.typeContrat}
              salaire={job.salaire ? job.salaire.libelle : 'no data availbale'}
              address={job.lieuTravail.libelle}
              experience={job.experienceLibelle}
              description={job.description}
              entreprise={job.origineOffre}
              recruteur={job.entreprise}
              competences={job.competences}
              creation={job.dateCreation}
              contact={job.contact}
            />
          )
      }
    </div >
  );
}


export default App;
