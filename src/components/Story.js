/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi';
import '../App.css'

//de-structure the storyId with putting in {}
export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(()=>{
        getStory(storyId).then(data => data && data.url && setStory(data))
    },[]);

    return story && story.url ? (
        <div className="storyWrapper">
            <a href={story.url}><p className="yellow">{story.title}</p></a>
            By: <p>{story.by}</p>
            Posted: {story.time}
        </div>
    ) : null;
}


