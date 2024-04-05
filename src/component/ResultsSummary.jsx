import React from 'react';
import './resultsSummary.css';

import memory from '../assets/icon-memory.svg'
import reaction from '../assets/icon-reaction.svg'
import verbal from '../assets/icon-verbal.svg'
import visual from '../assets/icon-visual.svg'
// import Button from './Button.jsx'
function ResultsSummary() {
    const data = [
        {
            summary: {
                "Reaction point": 80,
                "Memory point": 92,
                "verbal point": 61,
                "visual point": 72
            }
        },
        {
            result: {
                "total score": 76,
                "percentile": 65
            }

        }
    ]


    return (
        <>
            <div className='result-summary-grid'>
                <div className='result'>
                    <div className='your-result'>Your Result</div>
                    <div className='score'>
                        <div>{data[1].result["total score"]}</div>
                        <div>of 100</div>
                    </div>
                    <div className='ovation'>Great</div>
                    <div>{`You scored higher than ${data[1].result["percentile"]}% of the people who have taken these tests.`}</div>
                </div>
                <div className='summary'>
                    <div>Summary</div>
                    <div>
                        <ul className='summary-list'>
                            <li>
                                <div className='reaction skill'>
                                    <img src={reaction} alt="" />
                                    <div>Reaction</div>
                                </div>
                                <div className='points'>
                                    <p>{data[0].summary["Reaction point"]}</p>
                                    <p>/ 100</p>
                                </div>
                            </li>
                            <li>
                                <div className='memory skill'>
                                    <img src={memory} alt="" />
                                    <div>Memory</div>
                                </div>
                                <div className='points'>
                                    <p>{data[0].summary["Memory point"]}</p>
                                    <p>/ 100</p>
                                </div>
                            </li>
                            <li>
                                <div className='verbal skill'>
                                    <img src={verbal} alt="" />
                                    <div>Verbal</div>
                                </div>
                                <div className='points'>
                                    <p>{data[0].summary["verbal point"]}</p>
                                    <p>/ 100</p>
                                </div>
                            </li>
                            <li>
                                <div className='visual skill'>
                                    <img src={visual} alt="" />
                                    <div>Visual</div>
                                </div>
                                <div className='points'>
                                    <p>{data[0].summary["visual point"]}</p>
                                    <p>/ 100</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button>continue</button>
                </div>
            </div>
        </>
    )
}

export default ResultsSummary
