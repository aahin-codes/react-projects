
export default function ModalPopup({ id, header, body, footer, modalPopup }) {
    return (
        <div id={id || 'modal'} className="modal">
            <div className="modal-wrapper">
                <div className="content">
                    <div className="header">
                        <span className="close-modal" onClick={modalPopup}>&times;</span>
                        <h2>{header ? header : 'Header'}</h2>
                    </div>
                    <div className="body">
                        <div>{body ? body : 'Body'}</div>

                    </div>
                    <div className="footer">
                        <div>{footer ? footer : 'Footer'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
