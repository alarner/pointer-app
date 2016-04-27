import React from 'react';
import StoryModel from './../../models/StoryModel.js';

export default React.createClass({
	getInitialState: function() {
		return {
			story: new StoryModel({id: this.props.params.storyId}),
			error: '',
			currentPage: 0,
			currentWord: 0,
			arrayOfWords:[]
		};
	},
	componentDidMount: function() {
		this.state.story.on('change', (storyData)=> {
			this.setState({story: this.state.story});
			var pages = this.state.story.get('pages')
			for (let i=0; i<pages.length; i++) {
				let image=new Image()
				image.src=pages[i].image
			}
		});
		this.state.story.fetch({
			data: {withRelated: ['pages']},
			error: (model, error) => {
				this.setState({error: error.responseJSON.message});
			}
		});
	},
	render: function() {
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
	 		return (
                <section className="page-read">
                    <h1>{this.state.story.get('title')}</h1>
                    <img className="page-pic" src={this.state.story.get('pages')[this.state.currentPage].image}/>
                    <p className="page-text">{this.state.story.get('pages')[this.state.currentPage].body}</p>
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
		
		this.setState({currentPage:this.state.currentPage+1});
		
	},
	previousPage: function(){
	
		this.setState({currentPage:this.state.currentPage-1});
	}
});
