import React from 'react';

const Pagination = () => {
    return (
        <div className="">
            <div className="pagination ms-auto">
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex flex-end">
                        <li className="page-item" >
                            <a className="page-link" href="#"
                               aria-label="Previous" style={{marginRight: "12px", padding: "13px 17px"}}>
                            <span aria-hidden="true">
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.248319 8.42698L8.55334 0.487183C8.88443 0.170939 9.42059 0.170939 9.75168 0.487183C10.0828 0.803703 10.0828 1.31681 9.75168 1.63305L2.04583 9.00001L9.75168 16.367C10.0828 16.6833 10.0828 17.1964 9.75168 17.5126C9.58613 17.6709 9.36947 17.75 9.15251 17.75C8.93556 17.75 8.71889 17.6709 8.55334 17.5126L0.248319 9.57285C-0.0827742 9.25633 -0.0827742 8.74319 0.248319 8.42698Z" fill="#333333"/>
</svg>

                            </span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link " href="#" style={{ marginRight: "12px",padding: "13px 20px", color: "black"}}>1</a></li>
                        <li className="page-item"><a className="page-link" href="#" style={{ marginRight: "12px", padding: "13px 19px", color: "black"}}>2</a></li>
                        <li className="page-item"><a className="page-link" href="#" style={{ marginRight: "12px", padding: "13px 18px", color: "black"}}>3</a></li>
                        <li className="page-item"><a className="page-link" href="#" style={{marginRight: "12px", padding: "13px 17px", color: "black"}}>4</a></li>
                        <li className="page-item"><a className="page-link" href="#" style={{marginRight: "12px", padding: "13px 17px", color: "black"}}>...</a></li>
                        <li className="page-item"><a className="page-link" href="#" style={{marginRight: "12px", padding: "13px 17px", color: "black"}}>N</a></li>

                        <li className="page-item">
                            <a className="page-link" href="#"
                               aria-label="Next" style={{padding: "13px 17px"}}>
                            <span aria-hidden="true">
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75168 8.42698L1.44666 0.487183C1.11557 0.170939 0.579412 0.170939 0.24832 0.487183C-0.0827732 0.803703 -0.0827732 1.31681 0.24832 1.63305L7.95417 9.00001L0.24832 16.367C-0.0827732 16.6833 -0.0827732 17.1964 0.24832 17.5126C0.413866 17.6709 0.630534 17.75 0.847489 17.75C1.06444 17.75 1.28111 17.6709 1.44666 17.5126L9.75168 9.57285C10.0828 9.25633 10.0828 8.74319 9.75168 8.42698Z" fill="#333333"/>
</svg>

                            </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;