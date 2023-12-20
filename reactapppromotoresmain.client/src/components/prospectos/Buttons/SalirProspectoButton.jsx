import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUserPosts } from '../../../actions/prospectosActions';
import { useHistory } from 'react-router-dom';

export default function SalirProspectoButton({ postId, title }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const createAlert = () => {

        confirmAlert({
            title: "Salir prospecto",
            message: `¿Estas seguro que deseas salir? si sale perdera toda la información de la captura del prospecto ${title}`,
            buttons: [
                {
                    label: 'Si',
                    onClick: () => { exitPost() }
                },
                {
                    label: 'No',
                    onClick: () => { return false; }

                }
            ]
        });
    }

    const exitPost = async () => {
        try {
            
            await dispatch(getUserPosts());
            history.push('/');

        } catch(err) {
            toast.error(err.response.data.message, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 });
        }
    }

    return (
        <Button 
            onClick={ createAlert }
            variant="primary" 
            >Salir</Button>
    )
}
