// Libs
import React from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose';

// Config
import {RETURN_ADDR} from '../config';


// Animations with Pose:
const ParentItem = posed.div({
    hoverable: true,
    init: { scale: 1},
    hover: { scale: 1.1},
    enter: {
        opacity: 1,
        delayChildren: 100,
        staggerChildren: 50
    },
    exit: {
        opacity: 0,
        staggerChilldren: 50
    }
})

const Item = posed.div({
    hoverable: true,
    init: { scale: 1},
    hover: { scale: 0.9},
    enter: {
        x: 0,
        opacity: 1,
        delay: 300
    },
    exit: {
        x: -150,
        opacity: 0,
        delay: 300
    }
});

// Component:

const Results = (props) => {

    return (
        <div className="grid">
        <PoseGroup>
            {
                props.res.map(({title, extract, pageid, thumbnail}, i) =>
                <ParentItem key={i}  className="results mb-3 rounded shadow bg-white">
                    <Item className="row full">
                        <div className="col-2 text-right p-2">
                            {(thumbnail) ? <img src={thumbnail.source} className="card-img align-middle text-right" alt=""/> : <div className="card-img text-left"><i className="fab fa-wikipedia-w pos-rel middle text-center text-success"></i></div>}
                        </div>
                        <div className="col-10 p-2">
                                <h5 className="align-top text-success mb-0">{title}</h5>
                                <p className="inline text-secondary small mr-3 mb-3">page ID: {pageid}</p><a href={RETURN_ADDR + pageid} target="_blank" rel="noopener noreferrer" className="inline small text-secondary">More on Wikipedia <i className="fas fa-external-link-alt"></i></a>
                            <p>{extract/*.replace(/<span class="searchmatch">/g,'').replace(/<\/span>/g,'')*/}</p>
                            <p className="text-right"></p>
                        </div>
                    </Item>
                </ParentItem>)
            }
        </PoseGroup>
        </div>
    )
}

Results.propTypes = {
    title: PropTypes.string,
    snippet: PropTypes.string,
    'props-res': PropTypes.array
}

export default Results;