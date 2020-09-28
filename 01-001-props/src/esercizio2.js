import React from 'react'
export default () => {
    return (
        <div>
            <div className="ui placeholder segment">
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
            </div>
            <div className="ui placeholder segment">
                <h4 class="ui header">For Your Information</h4>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
            </div>
        </div>
    );
}