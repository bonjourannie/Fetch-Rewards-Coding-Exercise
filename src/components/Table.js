import React from "react";

const Table = ({ myData }) => {
  const dataSorted = myData.sort((a, b) => {
    if (a.listId > b.listId) {
      return 1;
    } //Sortin the Data by listId and then by name. Tried to the code most legible way
    if (a.listId < b.listId) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
  });

  return (
    <div className="table">
      <div className="table_head">
        <p className="header">ListId</p>
        <p className="header">Name</p>
      </div>
      {dataSorted.map((
        item //Iterate the data already sorted
      ) => (
        <div className="table_head">
          <p className="content">{item.listId}</p>
          <p className="content">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
