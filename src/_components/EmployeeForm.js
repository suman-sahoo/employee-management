import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Styles";
import { empActions } from '../actions/emp.actions';
import { connect } from 'react-redux';

import EmployeeListing from './EmployeeListing';
const EmployeeForm = (props)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    classes,
  } = props;
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      mobileno:'',
      address:''

    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Required"),
      name: Yup.string()
        .required("Required"),
      mobileno: Yup.string()
        .required("Required")
        .min(10, "Mobile no must be 10 digit")
        .max(10, "Mobile no must be 10 digit"),
      address: Yup.string()
        .required("Required"),
       
    }),
    onSubmit: values => {
      props.loginRequest(values);
    },
  });

  return(
    <>
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <h1 className={classes.textCenter}>Employee Details</h1>
            <TextField
              id="name"
              label="Name"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.name}
              error={formik.errors.name?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="email"
              label="Email (eg:abc@test.com)"
              type="email"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.email}
              margin="dense"
              variant="outlined"
              error={formik.errors.email?true:false}
              fullWidth              
            />            
            <TextField
              id="mobileno"
              label="Mobile No (10 digits.)"
              type="number"
              maxLength={10}
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.mobileno}
              error={formik.errors.mobileno?true:false}
              margin="dense"
              variant="outlined"
              fullWidth
            />
             <TextField
              id="address"
              label="Address"
              type="number"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.address}
              error={formik.errors.address?true:false}
              multiline
              rows={3}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardContent>
            {formik.touched.userEmail && formik.errors.userEmail ? (
                <div className={classes.errMessage}>{formik.errors.userEmail}</div>
              ) : null}
               {formik.touched.userPassword && formik.errors.userPassword ? (
              <div className={classes.errMessage}>{formik.errors.userPassword}</div>
            ) : null}
          </CardContent>         
          <CardActions className={classes.actions}>
            <Button type="button" color="primary" className={classes.subnitButton}  onClick={handleClickOpen} >
              Go to listing
            </Button>
            <Button type="submit" color="primary" className={classes.subnitButton}  >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
    <EmployeeListing open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}></EmployeeListing>
    </>
  );
};

function mapState(state) {
	return {

	};
}

const actionCreators = {
    loginRequest: empActions.empInfoRequest
};

export default connect(mapState, actionCreators)(withStyles(styles)(EmployeeForm));
