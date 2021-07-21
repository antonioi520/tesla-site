import React from 'react'

export default function Filter({sorts, sorting, sortColor, filteringColor, sortModel, filteringModel}){

    return(
        <div>
            <header>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
                      crossOrigin="anonymous" />
            </header>
            <div className="col-md-12" style={{width: "80%", paddingLeft:"33%", paddingTop:"30px"}}>
                    {/* Filter by Model  */}
                    <div className="select_filter">
                        <div>
                            <p style={{marginBottom: "0px", textAlign: "left", fontWeight: "bold"}}>Sort by Model</p>
                        </div>
                        <select value={sortModel} onChange={filteringModel} className="form-select" style={{marginBottom: "10px"}}>
                            <option value="">None</option>
                            <option value="model 3">Model 3</option>
                            <option value="model s">Model S</option>
                            <option value="model X">Model X</option>
                            <option value="model y">Model Y</option>
                            <option value="roadster">Roadster</option>
                            <option value="roadster sport">Roadster Sport</option>
                        </select>
                    </div>
                    {/* Filter by Color change to condition  */}
                    <div className="select_filter">
                        <div>
                            <p style={{marginBottom: "5px", textAlign: "left", fontWeight: "bold"}}>Sort by Color</p>
                        </div>
                        <select value={sortColor} onChange={filteringColor} className="form-select" style={{marginBottom: "10px"}}>
                            <option value="">None</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                        </select>
                    </div>
                    {/* Sort by Price  */}
                    <div className="select_filter">
                        <div>
                            <p style={{marginBottom: "5px", textAlign: "left", fontWeight: "bold"}}>Sort by Price</p>
                        </div>
                        <select value={sorts} onChange={sorting} className="form-select" style={{marginBottom: "10px"}}>
                            <option value="all">None</option>
                            <option value="high">Highest</option>
                            <option value="low">Lowest</option>
                        </select>
                    </div>
                    {/* Sort by Listing type  */}
                    {/* Sort by Battery  */}
            </div>
        </div>

    )
}