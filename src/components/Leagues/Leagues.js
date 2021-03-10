import React from 'react';
import './Leagues.css';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Leagues = (props) => {
    const { strSport, idTeam, strTeamBanner, strTeam, strTeamShort } = props.teams
    return (
      
            <Col>
            <Card style={{ width: '18rem', margin: '30px'}}>
                <Card.Img className="style" variant="top" src={strTeamBanner}/>
                <Card.Body>
                <div className="text-center">
                    <Card.Title>Card Title</Card.Title>
                    
                    <Card.Text>
                        <p> show all teams: { strSport}</p>
                        <p> show all teams: { strTeam}</p>
                        <p> show all teams: { strTeamShort}</p>

                    </Card.Text>
                    </div>
            <div className="text-center"> <Link to={`/teams/${idTeam}`}> <Button  className="text-center" variant="primary">Explore</Button> </Link></div>
            {/* <div className="text-center"> <Link to={`/teams/${idTeam}`}><Button  className="text-center" variant="primary">Explore</Button> </Link></div> */}

                </Card.Body>
            </Card>



            </Col>

        
    );
};

export default Leagues;