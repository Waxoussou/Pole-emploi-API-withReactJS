import React, { useEffect, useState } from 'react';
import JobDescription from './component/JobDescription';
import Contact from './component/Contact';
import CompanyLinks from './component/CompanyLinks';
import HeaderJobCard from './component/HeaderJobCard';

function JobContainer(props) {

    let dateOfCreation = props.creation;
    const transformDate = (date) => {
        date = new Date(date);
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        // console.log(`${day}-${month}-${year}`);
        return `${day}-${month}-${year}`
    }

    return (
        <div className='jobContainer'>
            <HeaderJobCard
                name={props.name}
                entreprise={props.entreprise}
                recruteur={props.recruteur}
                address={props.address}
                date={transformDate(dateOfCreation)}
            />
            <div className='card-body'>

                <Contact
                    contact={props.contact}
                    recruteur={props.recruteur}
                />
                <div className='job-details'>
                    <div>
                        <h4> {props.experience}</h4>
                    </div>
                    <h4>contrat : {props.contrat}	</h4>
                </div>
                <div className="rem">
                    <h4> Rémunération</h4>
                    <p> {props.salaire}</p>
                </div>
                <div className='mission-description'>
                    <JobDescription
                        title={'Compétences requises'}
                        content={props.competences}
                    />
                    <JobDescription
                        title={'Description du poste'}
                        content={props.description}
                    />
                </div>
                <div className='contact-job'>
                    <CompanyLinks
                        logo={props.logo}
                        entreprise={props.entreprise}
                    />
                </div>
            </div>

        </div >
    )
}

export default JobContainer;