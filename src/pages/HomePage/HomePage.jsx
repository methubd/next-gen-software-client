import BlackCard from "../../components/BlackCard/BlackCard";
import Banner from "../Banner/Banner";


const HomePage = () => {
    return (
        <section>
            <Banner></Banner>

            <div className="grid grid-cols-3 gap-3">
                <BlackCard></BlackCard>
                <BlackCard></BlackCard>
                <BlackCard></BlackCard>
            </div>
        </section>
    );
};

export default HomePage;