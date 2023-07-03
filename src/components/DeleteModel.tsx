function DeleteModal(props:any) {
    
    return <div>
        <div className="modal" id="deleteModal" >
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Student</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-light" data-bs-dismiss="modal" value="close" >Close</button>
                        <button type="button" className="btn  btn-secondary"
                         data-bs-dismiss="modal" value="delete"
                         onClick={()=>props.callback(true)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default DeleteModal;