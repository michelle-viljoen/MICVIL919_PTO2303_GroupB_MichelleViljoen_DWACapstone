
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

// the podcast preview 
export function PodcastCard (props)  {
    let navigate = useNavigate()
    
    // when clicked, navigates a user to the detailed single show view 
    const handleClick = () => {
        navigate(`/podcasts/${props.id}`);
    };

    // maps over the genres to display the correct titles 
    const genreMap = {
        1: 'Personal Growth',
        2: 'True Crime and Investigative Journalism',
        3: 'History',
        4: 'Comedy',
        5: 'Entertainment',
        6: 'Business',
        7: 'Fiction',
        8: 'News',
        9: 'Kids and Family',
    };

    return (
        
        <div className='preview__display'>
            <div className='preview__content'>
        
            <button onClick={handleClick}>
                <h2 className='preview__title'>{props.title}</h2>
                <img className='preview__image' src={props.image} width="150px"/>
                <h3 className='preview__description'>{props.description}</h3>
                <p className='preview__seasons'>Seasons: {props.seasons}</p>
                <p className='preview__genres'>{props.genres.map((genreId) => genreMap[genreId]).join(', ')}</p>
                <p className='preview__updated'>Last updated: {new Date(props.updated).toDateString()}</p>
               
            </button>  
           
      </div>
      </div>
 
    )
}




