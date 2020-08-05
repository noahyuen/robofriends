import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';


class App extends React.Component {
    constructor () {
        // declare the 'state' in here
        super()
        // 'super()' must preceed 'this'
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        // use '= () => {}' arrow syntax for methods that aren't 'constructor' and 'render'
        this.setState({ searchField: event.target.value })
        // this.setState method changes the state of a given attribute in the state object
    }




    render () {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
        
                </div>
            );

        }
        
    }       
}


export default App;