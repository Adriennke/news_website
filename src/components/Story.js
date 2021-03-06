/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';
import '../App.css'
import news from '../img/news.jpg'

//de-structure the storyId with putting in {}
export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <div className="storyWrapper">
            <card className="card">
                <img src={news} />
                <p className="yellow">{story.title}</p>
                <a href={story.url}><p>Read more...</p></a>
                <p>{story.text}</p>{/* not done*/}
            </card>
        </div>
    ) : null;
}


