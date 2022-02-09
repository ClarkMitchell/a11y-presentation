import * as React from "react";
import Dialog from "@reach/dialog";

export default function Modal(props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <article>
      <button onClick={open}>Open Dialog</button>

      <Dialog isOpen={showDialog} onDismiss={close} className="modal">
        <button className="close-button" onClick={close}>
          <span className="sr-only">Close</span>
          <span aria-hidden>×</span>
        </button>

        <form
          onSubmit={(e) => {
            alert("yay");
            e.preventDefault();
          }}
        >
          <fieldset>
            <label>
              Enter Email!
              <input type="email" aria-label="Email" />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </Dialog>
    </article>
  );
}
