import React from "react";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">"Are you sure?"</div>
      <div className="extra content">
        <ui className="two buttons">
          <div className="ui basic green button">Approve</div>
          <ui className="ui basic red button">Reject</ui>
        </ui>
      </div>
    </div>
  );
};

export default ApprovalCard;
