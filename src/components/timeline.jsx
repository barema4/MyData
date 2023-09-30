import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Frontend Engineer at MasterWizr <span> 05-2021- Present</span></h2>
                        <p>Built  the world's premier presentation and meeting tool that makes all meetings more professional, engaging and efficient whether online and in person in Norway.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Frontend Engineer at BPOSeats <span> 05-2020-05/2021</span></h2>
                        <p>Building a remotely centralized operations system for BPOSeats to monitor and manage a distributed team, and Increase operational efficiency through intelligent time-tracking. My major part of the work has been into the field of creating sustainable and scalable reusable components that help employees that carry out daily company’s
                          activities very efficiently and more productively.. I am also exploring the role of container technology like Docker and container-orchrastation technologies like Kubernetes, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack Engineer at Andela<span> Feb-2018 March-2020</span></h2>
                        <p>Andela provides companies with access to the top 1% of global tech talent. We identify high-potential developers on the African continent, shape them into world-class technical leaders, and pair them with companies as full-time, distributed team members. This allows Andela's partners, which range from startups to Fortune 500s, to accelerate their product roadmaps while minimizing time spent interviewing, on-boarding, and training new hires.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Frontend Developer Cowsoko Kenya <span> Jan-2019 to July-2019</span></h2>
                        <p>Built the frontend of the Dairynomics using React and Redux that connected farmers to the modern market.
                          Built APIs for both chat and e-commerce application using Nodejs/Express.

                          Tools used include Slack, git, Zoom, Pivotal Tracker and Gitlab</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
