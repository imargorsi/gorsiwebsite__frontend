import Hero from "../components/home/Hero/Hero";
import History from "../components/home/History/History";
import Banner from "../components/home/Banner/Banner";
import BlogGrid from "../components/home/BlogGrid/BlogGrid";
import Header from "../components/Header/Header";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <History />
      <Banner />
      <BlogGrid />
    </>
  );
}

export default Home;
