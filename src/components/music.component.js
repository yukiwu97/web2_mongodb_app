import React, { Component } from 'react';
import axios from 'axios';

export default class Music extends Component {
    state = {
        musicList: []
    }

    componentDidMount() {
        axios.get("http://localhost:3003/music")
            .then(res => {
                const musicData = res.data;
                console.log(musicData);
                this.setState({
                    musicList : musicData
                });
            })
    }

    deleteMusic(e, music) {
        e.preventDefault();

        axios.get('http://localhost:3003/music/delete/' + music._id)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location = '/';
    }

    render() {
        return(
        <div className="music">
            <h1>My playlist</h1>
            <table>
                <thead>
                    <tr><th></th><th className='desc-h-col'>NAME</th><th className='desc-h-col'>ARTIST</th><th className='desc-h-col'>GENRE</th><th className='button-col'></th></tr>
                </thead>
                <tbody>
                    {this.state.musicList.map(music =>
                        <tr><td className='counterCell'></td><td className='desc-col'>{music.name}</td><td className='desc-col'>{music.artist}</td><td className='desc-col'>{music.genre}</td><td className='button-col'><button onClick = {(e) => {this.deleteMusic(e, music)}}>delete</button></td></tr>
                    )}
                </tbody>
            </table>
        </div>
    )
    }
}