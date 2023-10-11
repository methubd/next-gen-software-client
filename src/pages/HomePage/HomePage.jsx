import { Helmet } from "react-helmet";
import BlackCard from "../../components/BlackCard/BlackCard";
import Banner from "../Banner/Banner";

const HomePage = () => {


    const handlePostSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
    }
    return (
        <section>
            
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <form onSubmit={handlePostSubmit}>
                <input className="bg-slate-400 rounded-md" type="text" name="post" />
                <input className="btn-sm btn-primary rounded-md" type="submit" />
            </form>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-3">
                <BlackCard></BlackCard>
            </div>
        </section>
    );
};

export default HomePage;
