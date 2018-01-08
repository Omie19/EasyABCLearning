import React, { Component } from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';

class EasyABC extends Component {

	constructor(props) {
		super(props);

		this.state = {
			alphabets: alphabets,
			currentposition: 0,
			currentTick: 0
		}

		this.next = this.next.bind(this);
		this.prev= this.prev.bind(this);

	}

	next(){
		if(this.state.currentposition === this.state.alphabets.length-1)
		{
			this.setState({currentposition: 0, currentTick: 0});
			if(this.state.currentTick < 2) {
				this.setState({currentTick: this.state.currentTick + 1});
			}
			else {
				this.setState({currentposition: this.state.currentposition + 1, currentTick: 0});
			}
		}

		else {
			if(this.state.currentTick < 2) {
				this.setState({currentTick: this.state.currentTick + 1});
			}
			else {
				this.setState({currentposition: this.state.currentposition + 1, currentTick: 0});
			}
		}
	}

	prev(){
		console.log("prev");
		if(this.state.currentposition > 0) {
			this.setState({currentposition: this.state.currentposition - 1});
		}
		else {
			this.setState({currentposition: this.state.alphabets.length-1});
		}
	}

  render() {
  	let showImage = this.state.currentTick !==0? true: false;
  	let showWord = this.state.currentTick ===2? true: false;
  	// console.log(this.state.currentTick, showImage);
    return ( 
    	<div className="game">
    		<div className="option">
    			<div className="fields">
    				<div className="field-block">
    					{this.state.alphabets[this.state.currentposition].letter}
    				</div>
    			</div>
    			<div className="buttons">
    				<a onClick={this.prev} className="button prev">Previous</a>
    				<a className="button sound">Play Sound Again</a>
    				<a onClick={this.next} className="button next">Next</a>
    			</div>
    			<div className="fields">
    				<div className="field-block">
    					<div className="left-field">
    						<div className={classNames('placeholder-span', {hide: showImage})}>Click Next to view image</div>
    						<img className={classNames('letter-image', {hide: !showImage})} alt={this.state.alphabets[this.state.currentposition].word} 
    						src={this.state.alphabets[this.state.currentposition].image}/>
    					</div>
    					<div className="right-field">
    						<div className={classNames('placeholder-span', {hide: showWord})}>Click Next to view spelling</div>
    						<div className={classNames('word', {hide: !showWord})}>
    							{this.state.alphabets[this.state.currentposition].word}
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	);
	}
}

export default EasyABC;