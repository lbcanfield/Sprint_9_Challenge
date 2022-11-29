import React from 'react';


class Grid extends React.Component {

    render() {
        return (
            <div id="grid">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
                        <div key={idx} className={`square${idx === this.props.index ? ' active' : ''}`}>
                            {idx === this.props.index ? 'B' : null}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Grid;