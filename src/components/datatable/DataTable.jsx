import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userColumns } from "../../datatablesource";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

import "./dataTable.scss";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // let list = [];
    // try {
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //   querySnapshot.forEach((doc) => {
    //     list.push({ id: doc.id, ...doc.data() });
    //   });
    //   setData(list);
    // } catch (error) {
    //   console.log(error);
    // }

    //REAL TIME
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.log(error);
    }
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link to="new" className="addBtn">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
