import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  goBack: {
    backgroundColor:"orange",
    color:"white"
  },

}));

const Login = ({props}) => {
    

  const classes = useStyles();

  const { history } = props;
  
  const handleGoBack = () => {
    history.goBack();
  };


  const { register, handleSubmit } = useForm();

  const [admin,setAdmin]= React.useState("");

  const onSubmit = (data) =>{
      setAdmin(data)
  } 
   
  console.log(admin) 

  

  return (
    <>
     <Button variant="outlined" color="primary" className={classes.goBack} onClick={handleGoBack}>
        Go back
      </Button>
      <h1 className="login_text">Login </h1>
    <div className="login">
      <div className="login_item">
        <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
        <label className="label_text"> Email: <input className="inputs_login" type="email" {...register("email")} /> </label>
        <label className="label_text"> Password: <input className="inputs_login" type="password" {...register("password", { required: true, minlength: 8 })} /> </label>
        <label className="label_text"> I am not Robot: <input className="inputs_login" type="checkbox" {...register("not robot", { required: true})} /> </label>
          <input className="inputs_login" type="submit" />
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
