import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
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
    margin: theme.spacing(1.5),
    width:"140px"
  },
  card: {
    marginBottom: theme.spacing(5),
  },
  center: {
    textAlign: "center",
  },

  filterBox:{
    display:"flex"
  }
}));

export default function Filter() {
  const classes = useStyles();
  const [date, setDate] = React.useState("");
  const [cost, setCost] = React.useState("");



  const handleChangeDate = (event) => {
    setDate(() => event.target.value);
  };
  const handleChangeCost = (event) => {
    setCost(() => event.target.value);
  };



  const handleFilterDate = () => {
    console.log("clicked: ", date);

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
        <h3>Filtering</h3>
      </Typography>

      <div className={classes.filterBox}>
        <div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox">Cost</InputLabel>
            <BootstrapInput
              value={cost}
              onChange={handleChangeCost}
              id="demo-customized-textbox"
            />
            {(cost) && 
            (<Button onClick={handleFilterCost} variant="outlined" color="primary">
                <Link to={`/filteredByCost/${cost}`}>FilterCost</Link>
              </Button>)
            }
          </FormControl>
        </div>

        <div>
          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Date</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={date}
              onChange={handleChangeDate}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2021-4-2"}>2021-4-2</MenuItem>
              <MenuItem value={"2021-3-5"}>2021-3-5</MenuItem>
              <MenuItem value={"2021-4-3"}>2021-4-3</MenuItem>
            </Select>
            {(date) && (
              <Button onClick={handleFilterDate} variant="outlined" color="primary">
                <Link to={`/filteredByDate/${date}`}>Filter</Link>
              </Button>
            )}
          </FormControl>
        </div>
      </div>
    </div>
  );
}
