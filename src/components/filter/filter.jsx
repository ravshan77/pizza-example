import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./filter.css";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      border:"1px solid green",
      width:"90%",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    // margin: theme.spacing(1.5),
    width:"100px",
    // height:"100%"
  },
  card: {
    width:"100%",
    border:"1px solid red",
    // height: "160px",
    
  },
  center: {
    textAlign: "center",
  },
  
  filterBox:{
    display:"flex",
    width:"auto",
    justifyContent: "center",
    // height:"40%",
    // backgroundColor:"orange"  
  },

  inputBtn:{
    // backgroundColor:"orange",
    width:"90%"
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [date, setDate] = React.useState("");
  const [label, setlabel] = React.useState("");
  const [cost, setCost] = React.useState("");

  const handleChangeDate = (event) => {
    setDate(() => event.target.value);
  };
  const handleChangelabel = (event) => {
    setlabel(() => event.target.value);
  };

  const handleChangeCost = (event) => {
    setCost(() => event.target.value);
  };

  const handleFilterDate = () => {
    console.log("clicked: ", date);

  };
  const  handleFilterLabel= () => {
    
    console.log("clicked: ", label);
  };
  const  handleFilterCost= () => {
    
    console.log("clicked: ", cost);
  };



  return (
    <div className={classes.card}>
      <Typography
        className={classes.center}
        gutterBottom
        variant="h5"
        component="h2"
        color="black"
        >
        <h3 style={{ color:"orange" }} >F̾i̾l̾t̾e̾r̾i̾n̾g̾</h3>
      </Typography>

      <div className={classes.filterBox}>
        
        {/* ////// */}

        <div className="margin">
          <FormControl>  
            <InputLabel htmlFor="demo-customized-textbox">Cost</InputLabel>
            <BootstrapInput
              value={cost}
              onChange={handleChangeCost}
              id="demo-customized-textbox"
              className={classes.inputBtn}
            />
            {(cost) &&
            (<Button className={classes.inputBtn} onClick={handleFilterCost} variant="outlined" color="primary">
                <Link to={`/filteredByCost/${cost}`}>Costs</Link>
              </Button>)
            }
          </FormControl>
        </div>

        {/* /////// */}

        <div className="margin">
          <FormControl>
            <InputLabel htmlFor="demo-customized-textbox">Name</InputLabel>
            <BootstrapInput
              value={label}
              onChange={handleChangelabel}
              id="demo-customized-textbox"
              className={classes.inputBtn}
            />
            {(label) && 
            (<Button className={classes.inputBtn} onClick={handleFilterLabel} variant="outlined" color="primary">
                <Link to={`/filteredByLabel/${label.replace(/\b(\w)/g, s => s.toUpperCase())}`}>Labels</Link>
              </Button>)
            }
          </FormControl>
        </div>

        <div className="margin">
          <FormControl>
            <InputLabel id="demo-customized-select-label">Date</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={date}
              onChange={handleChangeDate}
              input={<BootstrapInput />}
              className={classes.inputBtn}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"0"}>ready now 0</MenuItem>
              <MenuItem value={"20"}>20 minutes</MenuItem>
              <MenuItem value={"25"}>25 minutes</MenuItem>
              <MenuItem value={"40"}>40 minutes</MenuItem>
              <MenuItem value={"60"}>60 minutes</MenuItem>
            </Select>
            {(date) && (
              <Button className={classes.inputBtn} onClick={handleFilterDate} variant="outlined" color="primary">
                <Link to={`/filteredByDate/${date}`}>Dates</Link>
              </Button>
            )}
          </FormControl>
        </div>
      </div>
    </div>
  );
}
