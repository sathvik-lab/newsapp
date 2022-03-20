import React from "react";

const NewsItem= (props)=>{
 
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="my-3">
          <div class="card">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span class="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img src={imageUrl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">
                <small className="text-muted">
                  By {author} on {date}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                class="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );

}

export default NewsItem