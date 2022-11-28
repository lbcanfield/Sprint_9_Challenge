import React from 'react';

export default function Grid(props) {
    return (
        <div id="grid">
            {
                [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
                    <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
                        {idx === 4 ? 'B' : null}
                    </div>
                ))
            }
        </div>
    )
}