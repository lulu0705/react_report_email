import GridItem from "./GridItem";
import products from "../json/products.json";

export default function GridList({products}) {
    return (
        <div className="container_list">
            <div className="col-lg-8">
                <div className="row mb-4">
                    <div className="col-12">
                        {/* <h6 className="mb-0">Showing 1-10 of <span className="text-primary">28 Candidates</span></h6> */}
                    </div>
                </div>

                {/* <div className="job-filter mb-4 d-sm-flex align-items-center">
                    <div className="job-alert-bt"> <a className="btn btn-md btn-dark" href="#"><i className="fa fa-envelope"></i>Get job alert </a> </div>
                    <div className="job-shortby ml-sm-auto d-flex align-items-center">
                        <form className="form-inline">
                            <div className="form-group mb-0">
                                <label className="justify-content-start mr-2">Sort by :</label>
                                <div className="short-by">
                                    <select className="form-control basic-select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                        <option data-select2-id="3">Newest</option>
                                        <option>Oldest</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}

                <div className="row">
                {products.map(product =>(
                        <GridItem key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        
        </div>
    );
}


