import React from 'react';
export default ({features}) => {
    return(
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Features</h2>
                    {/*<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>*/}
                </div>
                <div className="row text-center">
                    {
                        features && features.map(({fav, title, caption}, index) =>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i><i className={fav}></i>
                            </span>
                            <h4 className="my-3">{title}</h4>
                            <p className="text-muted">{caption}</p>
                        </div>

                        )}
                </div>
            </div>
        </section>
    )
}