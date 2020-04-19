import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story';
import '../App.css';


export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, [])


    return (
        <div className="container">
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId =><Story key={storyId} storyId = {storyId}/>)}
        </div>
    )
}

