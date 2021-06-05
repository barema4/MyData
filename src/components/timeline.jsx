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
                        <h2>Frontend Engineer at BPOSeats <span> 10-2020-present</span></h2>
                        <p>I recently work at BPOSeats building a remotely centralized operations system for BPOSeats to monitor and manage a distributed team, and Increase operational efficiency through intelligent time-tracking. My major part of the work has been into the field of creating sustainable and scalable reusable components that help employees that carry out daily company’s
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
                        <h2>Software Engineer at Andela<span> Feb-2018 May-2020</span></h2>
                        <p>Contributed to the company’s strategy of providing startups and enterprise companies with world-class developers by being placed as a full-stack web developer to one of Andela’s clients.</p>
                        <p>Implemented full-stack development of enterprise applications in Agile / Scrum environment.</p>
                        <p>Established clean, efficient code based on requirements and specifications for backend applications.</p>
                        <p>Designed and developed single-page frontend applications using React/Redux.</p>
                        <p>Led a team of 5 developers and promoted pair programming that increased team productivity.</p>
                        <p> Stack: Python/Django, NodeJS/Express, JavaScript ES6, React/Redux, VueJs/Vuex, REST,Docker</p>
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
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Software Developer, Afrosoft IT Solutions Kampala<span> May-2017 - Jan-2018</span></h2>
                        <p>Developed an application used for detecting diseases in cattles and also participated in today 's
software development activities that involves designing, Analysis and development</p> 
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
