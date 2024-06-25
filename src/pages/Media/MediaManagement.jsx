import React, { useState } from 'react';
import { Image, ProgressBar } from 'react-bootstrap';

const MediaManagement = () => {
    const [now, setNow] = useState(60); 

    const rechardImage = 'https://file3.instiz.net/data/cached_img/upload/2024/04/12/17/417cc1230788263064216f2e43d976d5.gif'; 

    return (
        <div style={{ margin: 40 }}>
            <h3>미디어 관리</h3>
            <Image src={rechardImage} style={{ width: '50rem', height: '25rem', marginBottom: 40 }} />
            <ProgressBar animated now={now} label={`${now}%`} style={{ width: '50rem' }} />
        </div>
    );
};

export default MediaManagement;
