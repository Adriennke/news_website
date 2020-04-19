import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';

//de-structure the storyId with putting in {}
export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(()=>{
        getStory(storyId).then(data => data && data.url && setStory(data))
    },[]);

    return (
        <div>
            <p>I am a story! {storyId}</p>
        </div>
    );
}


