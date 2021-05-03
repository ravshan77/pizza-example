import React from "react";
import { useForm } from "react-hook-form";
import "./goToStore.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userData } from "../../store/item/item-action";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ReactNumberFormat from "react-number-format";
// import { promaCode } from "../../store/item/item-action"
const useStyles = makeStyles(() => ({
  goBack: {
    backgroundColor: "orange",
    color: "white",
  },
  inputs_login: {
    width: "290px",
    height: "40px",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    outline: "none",
    border: "none",
  }
}));

const GoToStore = ({ props }) => {
  const classes = useStyles();

  const { history } = props;

  const handleGoBack = () => {
    history.goBack();
  };

  const { food } = useSelector((state) => state.cardData);

  const cost = food.map((item) => {
    return item.cost;
  });
  const toOrder = cost.reduce((a, b) => a + b, 0);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [customer, setCustomer] = React.useState("");

  const onSubmit = (data) => {
    setCustomer(
        data,{phoneNumber,cardNumber});
  };

  const [phoneNumber, setPhoneNumber] = React.useState(null);

  const handlePhoneNumber = (data) => {
    setPhoneNumber(data.value);
  };

  const [cardNumber, setCardNumber] = React.useState(null);

  const handleCardNumber = (data) => {
    setCardNumber(data.value);
  };

  console.log(customer);
  console.log(phoneNumber);
  console.log(cardNumber);

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        className={classes.goBack}
        onClick={handleGoBack}
      >
        Go back
      </Button>
      <h1 className="login_text">
        𝐎𝐫𝐝𝐞𝐫:{" "}
        {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
          toOrder.toFixed(2) / 10
        )}{" "}
        so'm{" "}
      </h1>
      <div className="login">
        <div className="login_item">
          <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            <label className="label_text">
            {" "}
              Tel: {" "}
              <ReactNumberFormat
                className={classes.inputs_login}
                type="text"
                name="phone"
                placeholder="+998"
                value={phoneNumber}
                format="+(998)## ###-##-##"
                mask="_"
                onValueChange={handlePhoneNumber}
                />
                </label>
            <label className="label_text">
              {" "}
              First Name:{" "}
              <input
                className="inputs_login"
                {...register("firstName", { required: true, maxLength: 20 })}
              />{" "}
            </label>
            <label className="label_text">
              {" "}
              Site:{" "}
              <input
                className="inputs_login"
                {...register("site", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />{" "}
            </label>
            <label className="label_text">
              {" "}
              Street:{" "}
              <input
                className="inputs_login"
                {...register("street", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />{" "}
            </label>
            <label className="label_text">
              {" "}
              House Number:{" "}
              <input
                className="inputs_login"
                {...register("house number", { required: true })}
              />{" "}
            </label>
            <label className="label_text">
              {" "}
              Message:{" "}
              <input
                className="inputs_login"
                type="text"
                {...register("message")}
              />{" "}
            </label>
            <label className="label_text">
              {" "}
              Card Number:{" "}
              <ReactNumberFormat
              className={classes.inputs_login}
                type="text"
                name="card number"
                value={cardNumber}
                placeholder="8600"
                format="#### #### #### #### ####"
                mask="_"
                onValueChange={handleCardNumber}
              />
              {/* <input
                className="inputs_login"
                type="number"
                {...register("card number", {
                  required: true,
                  min: 8600000000000000,
                  maxLength: 16,
                  minlength: 16,
                })}
              /> */}
              {" "}
            </label>
            {/* <label className="label_text"> Promo code: <input className="inputs_login" onChange={dispatch(promaCode(-10))} {...register("promo code")} /> </label> */}
            <input
              className="inputs_login"
              type="submit"
              onClick={() => dispatch(userData({ customer }))}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default GoToStore;
