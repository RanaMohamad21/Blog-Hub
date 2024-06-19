import Footer from "./Footer";
import NavBar from "./NavBar";
import PostsCard from "./postsCard";
const posts = [{   title: "sunt aut facere repellat provident occaecati", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto autem sunt rem eveniet architecto autem sunt rem eveniet architectoautem sunt rem eveniet architecto"
},{   title: "sunt aut facere repellat provident occaecati", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto autem sunt rem eveniet architecto autem sunt rem eveniet architectoautem sunt rem eveniet architecto"
},{   title: "sunt aut facere repellat provident occaecati", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto autem sunt rem eveniet architecto autem sunt rem eveniet architectoautem sunt rem eveniet architecto"
}]

function HomePage() {
  return <div className=" grid grid-rows-[auto,1fr,auto] bg-gray  max-h-full">
            <NavBar/>
          <div className=" flex items-center justify-center">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-2"> {posts.map((post, index) =>{
                return <PostsCard post={post} key={index} />
            })}</div>
          </div>
            <Footer/>
  </div>;
}

export default HomePage;
