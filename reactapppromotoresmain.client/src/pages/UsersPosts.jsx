import { useState, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
//import Post from '../components/post/Post';
import Placeholder from '../components/utils/Placeholder';
import { useSelector, useDispatch } from 'react-redux';


import { toast } from 'react-toastify';
import NoProspecto from '../components/utils/NoProspecto';
import { getUserPosts } from '../actions/prospectosActions';
import ListadoProspectoVirtual from '../components/prospectos/ListadoProspectoVirtual';

export default function UserPosts() {

    const [fetching, setFetching] = useState(false);
    const fetched = useSelector(state => state.posts.fetched);
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchedPosts() {
            if (!fetched) {
                try {
                    setFetching(true);
                    await dispatch(getUserPosts());
                    setFetching(false);
                } catch (err) {
                    toast.error(err.response.data.message, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 });
                }
            }
        }
        fetchedPosts();
    }, [dispatch, fetched]);

    return (
        <div>
            <Jumbotron>
                <h1>Mis prospectos</h1>
            </Jumbotron>
            {fetching && <Placeholder></Placeholder>}
            {!fetching && posts.length === 0 && <NoProspecto text="No hay prospectos disponibles"></NoProspecto>}
            <div>
                {/*posts.map(post => <Post key={post.postId} post={post} renderControls={true} ></Post>)*/}
                {posts && posts.length != 0 && <ListadoProspectoVirtual datos={posts} />}
            </div>
        </div>
    )
}
