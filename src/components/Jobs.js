import React from "react";

function Jobs(props) {
  return (
    // Rajouter une class au Jobs avec featured == True,
    <div
      className={`container ${props.data.featured ? "border_featured" : ""}`}
    >
      <img src={props.data.logo} alt="logo" />
      <div className="job-desc">
        <div>
          <span style={{ color: "hsl(180, 29%, 50%)" }}>
            {props.data.company}
          </span>
          {props.data.new && <span className="new">NEW</span>}
          {props.data.featured && <span className="featured">FEATURED</span>}
        </div>
        <h5>{props.data.position}</h5>
        <div>
          <span>{props.data.postedAt}</span>
          <span> {props.data.contract} </span>
          <span> {props.data.location} </span>
        </div>
      </div>
      <div className="job-language">
        <span>{props.data.role}</span>
        <span> {props.data.level} </span>
        {/* Récupérer tout les élément de la liste langauges et mettre la cle à id job*/}
        {props.data.languages.map((language, index) => (
          <span key={index}>{language}</span>
        ))}

        {/* Récupérer tout les élément de la liste tools */}
        {props.data.tools.map((tool, index) => (
          <span key={index}> {tool}</span>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
