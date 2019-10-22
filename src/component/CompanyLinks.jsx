import React from 'react';

const CompanyLinks = (props) => {
    return (
        <div className='job-src'> 
            <h3>Liens</h3>
            <div>
                <img src={props.logo} alt="" />
                <a href={props.entreprise.urlOrigine} target='blank'>
                    <button>voir l'offre sur Pole Emploi</button>
                </a>
            </div>
            {props.entreprise.partenaires[0]
                ? <div>
                    <a href={props.entreprise.partenaires[0].url} target='blank'>
                        <button>site d'origine de l'annonce</button>
                    </a>
                </div>
                : <div>
                    <p>pas de lien vers l'annonce d'origine, sorry</p>
                </div>
            }
        </div>
    )
}

export default CompanyLinks;