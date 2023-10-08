

const Banner = () => {
    return (
        <section className="flex justify-evenly items-center">
            <div>
                <h1 className="text-5xl font-bold">Application<br />Development</h1>
                <h4 className="text-xl py-2">Come and get today... Click Count : 0</h4>
                <button className="btn btn-warning btn-sm">+ Count</button>
            </div>
            <div>
                <img src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-abstract-blue-digital-technology-lines-diagram-png-image_6474402.png" alt="" />
            </div>
            
        </section>
    );
};

export default Banner;