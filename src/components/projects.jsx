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
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<h3>Tarp Online University</h3>
								<div className="project" style={{backgroundImage: 'url(images/tarp.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://staff.testing.aims.ac.ug/auth-power">Terp</a></h3>
											<span>TERP Online UniversityEkampus/AIMSv2.0 Staff Portal</span>
											{/* <p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p> */}
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
