import React from 'react';
import { Button } from 'reactstrap';

interface IState {
    norrisJoke: any,
    jokeId: number
}

export class Norris extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            norrisJoke: null,
            jokeId: 1
        }
    }

    updateJokeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            jokeId: +event.target.value
        })
    }

    findNewJoke = async () => {
        const resp = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
        const norrisJoke = await resp.json();
        const nJoke = norrisJoke.value.joke;
        this.setState({
            norrisJoke: nJoke 
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.findNewJoke}>New Joke</Button>
                <h2>Joke: {this.state && this.state.norrisJoke}</h2>
                
                {/* <input name="jokeId" 
                    type="number" 
                    value={this.state.jokeId}
                    onChange={this.updateJokeId}></input>
                    <Button color="warning" onClick={this.findNewJoke}>Find new joke!</Button> */}

                <br/>
                {/* <h3>Name: {this.state.norrisJoke && this.state.norrisJoke.name}</h3> */}
                {/* <h3>Name: {this.state.norrisJoke && this.state.norrisJoke.name}</h3>
                {this.getSprites()} */}
                

            </div>
        );
    }
}
