import React from 'react';

const SkillList = (props) => {

    return (
        <div>

            <ul>
                {
                    props.competences != ''
                        ? props.competences.map((competence, index) =>
                            <li key={index} className='skill' > {competence.libelle} </li>)
                        : <div><li className='no-data'> pas d'information </li></div>
                }
            </ul>
        </div>
    )

}

export default SkillList;