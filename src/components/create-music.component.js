import React, { Component } from 'react';
import axios from 'axios';

class CreateMusic extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            artist: '',
            genre: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const music = {
            name: this.state.name,
            artist: this.state.artist,
            genre: this.state.genre
        }
        axios.post('http://localhost:3003/music/add', music)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        window.location = '/';
    }

    render() {
        return(
            <div className="music">
            <h2>Create New Music</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-field">
                    <label>Name </label>
                    <input type="text" className="name" name="Name" placeholder="" value={this.state.name} onChange={this.onChangeName} required />
                </div>
                <div className="form-field">
                    <label>Artist </label>
                    <input type="text" name="artist" placeholder="" value={this.state.artist} onChange={this.onChangeArtist} required/>
                </div>
                <div className="form-field">
                    <label>Genre </label>
                    <input type="text" name="genre" placeholder="" value={this.state.genre} onChange={this.onChangeGenre} required />
                </div>
                <input className="submit" type="submit" value="Submit"></input>
            </form>
            </div>
        )
    }
}

export default CreateMusic;