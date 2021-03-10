import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const {idTeam,strGender,intFormedYear} = useParams()
    
    const [leagueDetails, setLeaguesDetails] = useState({})

    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeaguesDetails(data.teams[0]))
    },[idTeam])
    console.log(leagueDetails)
    return (
        <div>
             <h3>show league: {leagueDetails.idTeam}</h3>
                <h4>show genders: {leagueDetails.strGender}</h4>
                <h4>show formed years: {leagueDetails.intFormedYear}</h4>
        </div>
    );
};

export default LeagueDetails;