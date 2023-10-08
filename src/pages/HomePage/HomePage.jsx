import { Helmet } from "react-helmet";
import BlackCard from "../../components/BlackCard/BlackCard";
import Banner from "../Banner/Banner";
import { useGetPostsQuery, useGetUsersQuery } from "../../redux/features/api/baseApi";


const HomePage = () => {
    const {data : posts, isLoading : isPostsLoading, error : isPostsError } = useGetPostsQuery();
    const firstSixUsers = posts?.slice(0, 6);

    if (isPostsLoading) {
        return <div className="flex justify-center items-center text-5xl font-bold text-red-400">Loading</div>
    }

    if(isPostsError){
        return <div className="flex justify-center items-center text-5xl font-bold text-red-400">Something went Wrong</div>
    }

    return (
        <section>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner></Banner>

            <div className="grid grid-cols-3 gap-3">
                {
                    firstSixUsers?.map(post => <BlackCard
                    key={post.id}
                    title={post?.title}
                    description={post?.body}
                    ></BlackCard>)
                }
            </div>
        </section>
    );
};

export default HomePage;