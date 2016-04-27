import React from 'react';
import StoryModel from './../../models/StoryModel.js';
import StoryReadModel from './../../models/StoryReadModel.js';

export default React.createClass({
	getInitialState: function() {
		return {
			story: new StoryModel({id: this.props.params.storyId}),
			error: '',
			currentPage: 0,
			finished: false,
			currentWordLocation: 0,
			numberOfWords:0
		};
	},
	componentDidMount: function() {
		this.state.story.on('change', (storyData)=> {
			this.setState({story: this.state.story});
		});
		this.state.story.fetch({
			data: {withRelated: ['pages']},
			error: (model, error) => {
				this.setState({error: error.responseJSON.message});
			}
		});
	},
	render: function() {
		if(this.state.finished) {
			return (
				<section>
					<h1>YOU DID IT :D</h1>
					<a href="/stories">Read other stories!</a>
					<p onClick={this.reread}>Re-read the story!</p>
				</section>
			);
		}
		if(this.state.error) {
			return (
				<section className="page-read">
					<h1>{this.state.error}</h1>
				</section>
			);
		} else if (!this.state.story.get('title')){
			return (
				<h1>Loading</h1>
				);	
		}
		else {
			
			let pageText = (this.state.story.get('pages')[this.state.currentPage].body).replace('.','. ');
			
			let arrayOfWords = pageText.split(' ');
			let textAfterCurrentWord=arrayOfWords;
			let textBeforeCurrentWord = textAfterCurrentWord.splice(0,this.state.currentWordLocation);
			let currentWord=textAfterCurrentWord.splice(0,1);


	 		return (
                <section className="page-read">
                    <h1>{this.state.story.get('title')}</h1>
                    <img className="page-pic" src={this.state.story.get('pages')[this.state.currentPage].image}/>
                    <p className="page-text">
                    	{textBeforeCurrentWord.join(' ')+' '}<span className="word-highlight">{currentWord}</span>{' '+textAfterCurrentWord.join(' ')}
                	</p>
                	<div className="directionals-container">
                        <button className="directionals" onClick={this.PreviousWord}>Previous Word</button>
                        
                        <button className="directionals" onClick={this.nextWord}>Next Word</button>
                    </div>
                    <div className="directionals-container">
                        <button className="directionals" onClick={this.previousPage}>Previous</button>
                        <h1 className="page-num">Pg. {this.state.currentPage+1}</h1>
                        <button className="directionals" onClick={this.nextPage}>Next</button>
                    </div>
                    <progress max={this.state.story.get('pages').length} value={this.state.currentPage+1}></progress>
                </section>
            );
        }
    },
	nextPage: function() {
		if(this.state.story.get('pages').length === this.state.currentPage+1) {
			StoryReadModel.save({
				finishedAt: new Date()
			});
			this.setState({finished: true});
		} else {
			this.setState({currentPage:this.state.currentPage+1});
		}		
	},
	previousPage: function(){
		this.setState({currentPage:this.state.currentPage-1});
	},

	nextWord: function(){

		this.setState({currentWordLocation:this.state.currentWordLocation+1});
	},
	PreviousWord: function(){
		this.setState({currentWordLocation:this.state.currentWordLocation-1});
	},
	reread: function() {
		this.setState({finished: false, currentPage: 0, currentWordLocation: 0, numberOfWords:0});
	}
});