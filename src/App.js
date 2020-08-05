import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';


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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>

                        </ErrorBoundary>
                    </Scroll>
        
                </div>
            );

        }
        
    }       
}


export default App;