
export default function ModalCard({ id, header, body, footer, modalPopup, responsive }) {

    return (
        <div id={id || 'modal'} className="modal">
            <div className="modal-wrapper">
                {responsive && responsive.innerWidth && responsive.innerWidth < 719 ? (<div className="content">
                    <div className="header">
                        <span className="close-modal" onClick={modalPopup}>&times;</span>
                        <h2>{header ? header : 'Modal Popup'}</h2>
                    </div></div>): (<div className="content">
                    <div className="header">
                        <span className="close-modal" onClick={modalPopup}>&times;</span>
                        <h2>{header ? header : 'Reusable Modal Component'}</h2>
                    </div>
                    <div className="body">
                        <div>{body ? body : (<div className="body-content">
                            <p>This is a fully customizable modal built from scratch using React.</p>
                            <ul>
                                <li><strong>Overlay:</strong> Blocks background interactions.</li>
                                <li><strong>Dynamic Content:</strong> Accepts any JSX as props.</li>
                                <li><strong>Transitions:</strong> Smooth fade-in/out effects.</li>
                            </ul>
                            <p>Try clicking the "X" or the Close button below to exit.</p>
                        </div>)}</div>

                    </div>
                    <div className="footer">
                        <div>{footer ? footer : <button onClick={modalPopup}>Close Modal</button>}</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
