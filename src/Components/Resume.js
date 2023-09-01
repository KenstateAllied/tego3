import React, { Component } from 'react';


class Resume extends Component {
  render() {
    if(this.props.data){
      var EXPERTISE = this.props.data.EXPERTISE.map(function(edu){
        return <div key={edu.school} className="row item">
           <div className="twelve columns">
              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
              <p>
                {edu.description}
              </p>
           </div>
        </div>
      });

      var ENGAGEMENTS = this.props.data.ENGAGEMENTS.map(function(job){
        return <div key={job.company} className="row item">
           <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>

              <p>
              {job.description}
              </p>
           </div>
        </div>
      });

      var TECHNOLOGIES = this.props.data.TECHNOLOGIES.map(function(skill){
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
      });
    }
    return (
      <section id="resume">
      <div className="row EXPERTISE">
         <div className="three columns header-col">
            <h1><span>EXPERTISE</span></h1>
         </div>

         <div className="nine columns main-col">
            {EXPERTISE}
         </div>
      </div>

      <div className="row ENGAGEMENTS">
         <div className="three columns header-col">
            <h1><span>ENGAGEMENTS</span></h1>
         </div>

         <div className="nine columns main-col">
          {ENGAGEMENTS}
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>SYSTEMS</span></h1>
         </div>
         <div className="nine columns main-col">
            <p>We have been working on the specializations listed below in the whole of Africa
            </p>
				<div className="bars">
				   <ul className="TECHNOLOGIES">
					  {TECHNOLOGIES}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
