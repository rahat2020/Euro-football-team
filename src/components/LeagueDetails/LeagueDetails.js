import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import Male from '../../img/male.png'; 
import Female from '../../img/female.png'; 


const LeagueDetails = () => {
    const {idTeam,strFacebook,strTwitter,strYoutube} = useParams()

    const [leagueDetails, setLeaguesDetails,] = useState({})

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeaguesDetails(data.teams[0]))
    }, [idTeam])
    console.log(leagueDetails)


    return (
        <div className="divStyle">
            <div className="banner-style">
                <img src={leagueDetails.strTeamBanner} alt=""></img>
            </div>

            <Row className="info-style mt-4" >
                <Col className="col-md-6 mt-4 text-left">

                    <h2> {leagueDetails.strTeam}</h2>
                    <h4>⟰ Founded: {leagueDetails.intFormedYear}</h4>
                    <h4>✈ Country: {leagueDetails.strCountry}</h4>
                    <h4>◍ Sports type: {leagueDetails.strSport}</h4>
                    <h4>⚦ Genders: {leagueDetails.strGender}</h4>
                    
                </Col>
                <Col className="col-md-6 ">
                        <img style={{ width: '350px', height: '220px' }} src={leagueDetails.strGender=="Male"? Male: Female} alt=""></img>
                </Col>
           </Row>
            <div className="descriptions-style">
            <span> {leagueDetails.strDescriptionEN}</span>
            </div>

            <div className="icon-style">
            <a href={strFacebook} target="_blank" className="socialIcon-f"><FontAwesomeIcon icon={faFacebookF} /></a>
             <a href={strTwitter} target="_blank" className="socialIcon-t"><FontAwesomeIcon icon={faTwitter} /></a>
             <a href={strYoutube} target="_blank" className="socialIcon-y"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
         </div>
    );
};

export default LeagueDetails;
