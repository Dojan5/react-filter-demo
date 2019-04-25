import React, {Component} from 'react';
import { CardContainer } from './components/Cards';
import {FilterList} from './components/FilterList';
import './App.css';

class App extends Component {
	state = {
		allClubs: [
			{
				id: 0,
				type: "SPORTS",
				name: "Swimmers Anonymous",
				description: "Come, swim with us! Splash, but don't tell!"
			},
			{
				id: 1,
				type: "SPORTS",
				name: "The Hoop-Lahs",
				description: "Basketball and choir practise, mixed into one thing!"
			},
			{
				id: 2,
				type: "CRAFTS",
				name: "The Scissor Scisters",
				description: "You don't actually need to be a woman to join us."
			},
			{
				id: 3,
				type: "CRAFTS",
				name: "Florists For Florence",
				description: "I was going to make a joke here, but I realised that I don't know if Florence is in Italy or France."
			},
			{
				id: 4,
				type: "COOKING",
				name: "Bready, set, go!",
				description: "Are you ready for pain? Pain riche!"
			},
			{
				id: 5,
				type: "COOKING",
				name: "Onion Soup",
				description: "ByooooOooOOoooOooOoooOootifuuul sooooOoooOoooup."
			}
		],
		filteredClubs: [
			{
				id: 0,
				type: "SPORTS",
				name: "Swimmers Anonymous",
				description: "Come, swim with us! Splash, but don't tell!"
			},
			{
				id: 1,
				type: "SPORTS",
				name: "The Hoop-Lahs",
				description: "Basketball and choir practise, mixed into one thing!"
			},
			{
				id: 2,
				type: "CRAFTS",
				name: "The Scissor Scisters",
				description: "You don't actually need to be a woman to join us."
			},
			{
				id: 3,
				type: "CRAFTS",
				name: "Florists For Florence",
				description: "I was going to make a joke here, but I realised that I don't know if Florence is in Italy or France."
			},
			{
				id: 4,
				type: "COOKING",
				name: "Bready, set, go!",
				description: "Are you ready for pain? Pain riche!"
			},
			{
				id: 5,
				type: "COOKING",
				name: "Onion Soup",
				description: "ByooooOooOOoooOooOoooOootifuuul sooooOoooOoooup."
			}
		],
		types: [
			"DEFAULT", "SPORTS", "CRAFTS", "COOKING"
		]
	}

	handleFilter = (e) => {
		//E is the event that is returned by the onChange event that is triggered when you change the selector

		//This one sets the filtered clubs to just be all the clubs if the filter is set to DEFAULT
		if(e.target.value === "DEFAULT") {
			this.setState({filteredClubs: this.state.allClubs});
			return;
		}
		
		//This one actually filters the clubs.
		this.setState({filteredClubs: this.state.allClubs.filter(club => club.type === e.target.value)})
	}

	render() {
		return (
			<div className="container">
				<FilterList onChange={this.handleFilter} filters={this.state.types} />
				<CardContainer clubs={this.state.filteredClubs} />
			</div>
		)
	}
}


export default App;
