import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Header() {
  const { updateHeaderData } = useContext(ResumeContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    updateHeaderData(data);
  };

  // console.log(watch("name")); To test if the input is receiving the data

  return (
    <div className="">
      <h2>Header</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Zip Code"
          name="zip"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          inputRef={register}
          onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }}
        />
        {/* <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ margin: 8 }}
        >
          Update
        </Button> */}
      </form>
    </div>
  );
}

export default Header;
