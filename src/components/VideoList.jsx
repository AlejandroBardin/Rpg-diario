import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import './VideoList.css';

function VideoList({ onPointsIncrease }) {
    const [videos, setVideos] = useState(() => {
        const storedVideos = localStorage.getItem('videos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });

    const [newVideoTitle, setNewVideoTitle] = useState('');
    const [newVideoDate, setNewVideoDate] = useState('');
    const [newVideoThumbnail, setNewVideoThumbnail] = useState(null);

    useEffect(() => {
        localStorage.setItem('videos', JSON.stringify(videos));
    }, [videos]);

    const handleAddVideo = () => {
        if (!newVideoTitle || !newVideoDate || !newVideoThumbnail) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const newVideo = {
            id: Date.now(),
            title: newVideoTitle,
            date: newVideoDate,
            thumbnail: URL.createObjectURL(newVideoThumbnail),
            completed: false
        };

        setVideos([...videos, newVideo]);
        setNewVideoTitle('');
        setNewVideoDate('');
        setNewVideoThumbnail(null);
    };

    const handleFileUpload = (e) => {
        setNewVideoThumbnail(e.target.files[0]);
    };

    const deleteVideo = (id) => {
        const updatedVideos = videos.filter((video) => video.id !== id);
        setVideos(updatedVideos);
    };

    const toggleComplete = (id) => {
        const updatedVideos = videos.map((video) => {
            if (video.id === id) {
                const newCompletedState = !video.completed;
                onPointsIncrease(newCompletedState ? 100 : -100); // Aumenta o resta puntos según el estado
                return { ...video, completed: newCompletedState };
            }
            return video;
        });
        setVideos(updatedVideos);
    };

    return (
        <div className="video-list-container">
            <h2 className="section-title">Videos</h2>
            <div className="videos-grid">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        onDelete={() => deleteVideo(video.id)}
                        onToggleComplete={() => toggleComplete(video.id)}
                    />
                ))}
            </div>

            <div className="add-video-form">
                <h3>Agregar Nuevo Video</h3>
                <input
                    type="text"
                    placeholder="Título del video"
                    value={newVideoTitle}
                    onChange={(e) => setNewVideoTitle(e.target.value)}
                />
                <input
                    type="date"
                    value={newVideoDate}
                    onChange={(e) => setNewVideoDate(e.target.value)}
                />
                <input type="file" onChange={handleFileUpload} />
                <button onClick={handleAddVideo}>Agregar Video</button>
            </div>
        </div>
    );
}

export default VideoList;
