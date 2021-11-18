import styled from "styled-components";
import {BsWindows} from 'react-icons/bs'
import {GoBrowser} from 'react-icons/go'

function GamesCard({gamesObj:{thumbnail, title, short_description, genre, platform, freetogame_profile_url}}){
    
const truncateDesc = (input) => input.length > 55 ? `${input.substring(0, 55)}...` : input;
const truncateTitle = (input) => input.length > 20 ? `${input.substring(0, 20)}...` : input;

const iconRender = (input) => {
    if(input === 'PC (Windows)'){
        return <BsWindows size={18} color="white"/>
    } else if(input === 'Web Browser'){
        return <GoBrowser size={20} color="white"/>
    } else {
        return <><BsWindows size={18} color="white"/> <GoBrowser size={20} color="white"/></>
    }
}
    
    return (
            <Card>
                <a href={freetogame_profile_url} target="_blank" rel="noreferrer">
                    <img src={thumbnail} alt=""/>
                    <span className="title">{truncateTitle(title)}</span>
                    <span className="genre">Genre: {genre}</span>
                    <p className="desc">{truncateDesc(short_description)}</p>
                    <span className="platform">{iconRender(platform)}</span>
                </a>
            </Card>
    )
}

export default GamesCard;

const Card = styled.div`
    display: block;
    background-color: #303859;
    width: 400px;
    height: 350px;
    padding: 15px;
    margin: 15px;
    box-shadow: 4px 4px 8px 0px rgb(0,0,0,0.2);
    border-radius: 5px;
    a{
        text-decoration: none;
    }
    img{
        width: 100%;
    }
    .title{
        float: left;
        color: white;
        font-size: 1.1rem;
        padding: 5px;
        font-family: 'Lemonada', cursive;
    }
    .genre{
        float: right;
        color: white;
        padding: 5px;
        font-size: 0.95rem;
        font-family: 'Lemonada', cursive;
    }
    .desc {
        float: left;
        width: fit-content;
        font-size: 1.5rem;
        color: white;
        font-family: 'Lemonada', cursive;
        padding: 5px;
        text-align: left
    }
    .platform {
        float: left;
        align-self: flex-end;
        padding: 5px
    }
`