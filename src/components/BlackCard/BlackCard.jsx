
const BlackCard = ({title, description}) => {
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm btn-neutral">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default BlackCard;