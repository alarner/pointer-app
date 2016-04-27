import React from 'react';


export default React.createClass({
	render: function() {
		return (
			<section className="page-home container">
        			<div className="one-half column videoblock">
            			<div className="video">
            				<embed scale="aspect" width="459" height="258" src="https://www.youtube.com/embed/Fo-7bR9i_ms" frameBorder="0" allowFullScreen></embed>
            			</div>
            			<div className="follow-buttons">
	            			<a className="fb-like" data-href="http://www.pointerapp.co/" data-width="50" data-layout="button" data-action="like" data-show-faces="false" dataShare="false"></a>
	            			<a className="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a>
            			</div>
					</div>
        			<div className="one-half column textblock">
        				<h3>Boost your child's ability to read</h3>
						<p>As your child grows, there is a window of opportunity to shape their future in many ways. 
						Teaching them to read builds a critical educational foundation. With Pointer, children stay 
						engaged with your voice, learning better and faster. They feel more connected and get more 
						pleasure and meaning from reading.</p>
						<span>Sign up for early access.</span>
						<form>
							<input type="email" placeholder="email"/>
							<button> Sign me up!</button>
						</form>
					</div>

			</section>
		);
	}
});