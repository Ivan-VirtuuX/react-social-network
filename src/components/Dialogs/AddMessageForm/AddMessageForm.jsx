import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import msgStyles from "./AddMessageForm.module.css";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder="Enter your message"
          name="newMessageBody"
          style={{ resize: "none", border: "none"}}
        />
      </div>
      <div>
        <button className={msgStyles.sendBtn}>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);
