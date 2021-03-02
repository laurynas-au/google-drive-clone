import React, { useState } from "react";
import { Button, Modal } from "../../components";
import Form, { InputLabel, Input } from "../../components/Form/Form";

const AddFolderButton = props => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
      <Button buttonStyle="controls" onClick={openModal}>
      + Add Folder
      </Button>
      <Modal showModal={open} setShowModal={setOpen} title="Add folder">
        <Form>
          <InputLabel for="folder-name">Folder name</InputLabel>
          <Input id="folder-name" type="text" value={name}  onChange={(e) => setName(e.target.value)} required />
          <Button buttonStyle="controls" onClick={closeModal}>
            Cancel
          </Button>
          <Button buttonStyle="controls" onClick={closeModal}>
            Save
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default AddFolderButton;
