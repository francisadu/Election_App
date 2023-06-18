import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Candidates from "./candidates";
import  AddCandidate from "./candidates/add";

import Voters from './voters';
import Dashboard from "./dashboard"
import AddVoter from './voters/add';
import VoterList from './voters/list';
import AddPositions from './positions/add';
import Positions from './positions';
import Positionlist from './positions/list';

const MainApp = () => {
    return (

        <div>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="voters" element={<Voters />} >
                    <Route path="add" element={<AddVoter />} />
                    <Route path="list" element={<VoterList />} />
                </Route>
                <Route path="candidates" elements={<Candidates />}> 
                    <Route path="add" element={<AddCandidate />} />
                </Route>
                <Route path="positions" element={<Positions />}>
                    <Route path="add" element={<AddPositions />} />
                    <Route path="list" element={<Positionlist />} />

                </Route>
            </Routes>
        </div>
    )
}
export default MainApp;