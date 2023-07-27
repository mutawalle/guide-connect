import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0" />
      <Dialog.Content className="fixed top-1/2 left-1/2 bg-white">
        <div>
            cdewkuf weifdhew iu
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            Cancel
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;