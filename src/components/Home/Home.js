import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import { Row  } from 'react-bootstrap';
import './Home.css';


const Home = () => {
    const [allTeams, setAllTeams] = useState([])

    useEffect(()=> {
        const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res => res.json())
        .then (data => setAllTeams(data.teams))
    },[])
    return (
        <div>
            <h1>Teams: {allTeams.length}</h1>
            {/* <h5>{allTeams.strTeamLogo}</h5> */}
            <div className="bgCover-style">
                    <p classID="text-style"> Euro league selection</p>
            </div>

             <div className="">
             <Row>
            {
                allTeams.map(teams => <Leagues teams={teams}></Leagues>)
            }

           
            </Row>
             </div>

        </div>
    );
};

export default Home;