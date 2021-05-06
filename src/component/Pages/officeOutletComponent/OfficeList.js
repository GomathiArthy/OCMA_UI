import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOffices } from "../../action/OfficeActions";
import axios from '../../axios/axios';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deleteOffice } from '../../action/OfficeActions';
import { useHistory } from 'react-router';

const OfficeList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const offices = useSelector((state) => state.allOffices.offices);

  const fetchOffices = async () => {
    const result = await axios.get('http://localhost:9191/api/ocma/Office/getAllOfficeData').catch((err) => {
      console.log("Error ", err);
    });
    dispatch(getAllOffices(result.data))
  };

  useEffect(() => {
    fetchOffices();
  }, []);

  console.log("Offices :", offices);

  const deleteOfficeById = async (officeId) => {
    await axios.delete(`http://localhost:9191/api/ocma/Office/deleteOffice/${officeId}`).catch((err) => { console.log("Error", err); });
    dispatch(deleteOffice(officeId));
    alert("Deleted Successfully");
    fetchOffices();
    history.push('/Office');
  }

  return (
    <div className="">
      <Grid>
        <TableContainer component={Paper}>
          <Table border="1" bgcolor="white" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow>
                <StyledTableCell>Office Id</StyledTableCell>
                <StyledTableCell>Office Opening Time</StyledTableCell>
                <StyledTableCell>Office Closing Time</StyledTableCell>
                <StyledTableCell>View</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                offices.map((office) => {
                  const { officeId, openingTime, closingTime } = office;
                  return (
                    <StyledTableRow key={officeId}>
                      <td>{officeId}</td>
                      <td>{openingTime}</td>
                      <td>{closingTime}</td>
                      <td><Link to={`/getOfficeById/${officeId}`}><Button color="primary" variant="contained" className="btn btn-info">VIEW</Button></Link></td>
                      <td><Link to={`/getOfficeById/${officeId}`}><Button color="secondary" variant="contained" className="btn btn-secondary">Delete</Button></Link></td>
                    </StyledTableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default OfficeList;