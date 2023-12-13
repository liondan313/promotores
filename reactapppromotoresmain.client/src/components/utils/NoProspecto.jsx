import nada from '../../assets/nada.svg';

export default function NoProspecto({ text }) {
    return (
        <div className="no-posts-component">
            <div className="post-image-container">
                <object type="image/svg+xml" data={nada}>
                    Error al cargar svg
                </object>
                <p>{text}</p>
            </div>
        </div>
    )
}
