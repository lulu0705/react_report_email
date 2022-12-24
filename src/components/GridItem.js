import { Link } from 'react-router-dom';

export default function GridItem({ product }) {
    return (
        <>
        {/* <div className="col-sm-6 col-lg-4 mb-4 "> */}
        <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-4 ">
        <div className="candidate-list candidate-grid">
            <div className="candidate-list-image">
                <img className="img-fluid" src={product.image} alt={product.name} />
            </div>
            <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                        <h5>{product.name}</h5>
                    </div>
                    <div className="candidate-list-option">
                        <ul className="list-unstyled">
                            <li>{product.category}</li>
                            <li>{product.location}</li>
                            <li>NT${product.price}/{product.hour}</li>
                        </ul>
                        <p>{product.company}</p>
                    </div>
                </div>
                <div className="candidate-list-favourite-time">
                <div className="flexBtCenter">
                <Link to={`/product/${product.id}`} className="smallLifeBtn" target="_self" title="服務詳情">
                    服務詳情
                </Link>
	            </div>
                </div>

            </div>
        </div>
        </div>
        </>
    );
}



