import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from "./Post";



const PostListScreen = () => {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('https://dummyjson.com/posts')
                console.log(res)
                setPost(prePost => [...prePost, ...res.data.posts]);
            } catch(err) {
                console.log('Error fetching posts',err);
            }
        }
        fetchPosts();
    },[page])

    // console.log(window.innerHeight)
    //     console.log(document.documentElement.scrollTop)
    //     console.log(document.documentElement.offsetHeight)
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight
        ) 
        return;
        setPage(prePage => prePage + 1);
        };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4 text-center text-emerald-400">Post List</h1>
                <div className="h-100vh grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {post.map(post => (
                        <Post key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PostListScreen;