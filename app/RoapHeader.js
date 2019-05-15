const RoapHeader = () => {
  return (
    <div className="roap_header">
      <div>
        <span className="checklist__date">ROAP Checklist Date: </span>
        <span>{`${new Date(Date.now()).toLocaleDateString()}`}</span>
      </div>
      <div>
        <span className="created_by">Created By:</span>
        <span>Acromble</span>
      </div>
    </div>
  );
};

export default RoapHeader;
