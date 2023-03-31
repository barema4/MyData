import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<h3>BPOSeats.com</h3>
							<a href="https://bposeats.com/">
								<div className="project" style={{backgroundImage: 'url(images/bpo.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>BPOSeats.com</h3>
											<span>Website</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
								</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<h3>Applybpo.com</h3>
							<a href="https://applybpo.com/?page=1">
								<div className="project" style={{backgroundImage: 'url(images/apply1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Applybpo.com</h3>
											<span>Applying For Vaccancies</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
								</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<h3>Dairynomic Kenya</h3>
							<a href="https://dairynomics.netlify.app/onboarding">
								<div className="project" style={{backgroundImage: 'url(images/dd.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Dailynomics</h3>
											<span>Daily Farming</span>
		
										</div>
									</div>
								</div>
								</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<h3>WizrMeets</h3>
							<a href="https://wizrconnect.com/">
								<div className="project" style={{backgroundImage: 'url(images/mwzir.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>WizrMeets</h3>
										</div>
									</div>
								</div>
							</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<h3>RentalUg</h3>
							<a href="https://rentalsug.com/">
								<div className="project" style={{backgroundImage: 'url(images/rentals.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>RentalUg</h3>
											<span>Discover your perfect home today</span>
											
										</div>
									</div>
								</div>
							</a>
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://barema4.github.io/MyData/" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
