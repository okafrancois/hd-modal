[![NPM](https://img.shields.io/npm/v/phpecoraro-npm-modal.svg)](https://www.npmjs.com/package/phpecoraro-npm-modal)
![npm](https://img.shields.io/npm/dm/phpecoraro-npm-modal)

# Npm Modal
Modal for react application. Custom modal appears after form validation.

**Contains:** 
- header title 
- body for message 
- close button

## Installation
To install:
```
npm install phpecoraro-npm-modal
```
## Exemple
Then use it in your React app:

```js
import { Modal } from 'phpecoraro-npm-modal'

<div>
    <button type="submit" className="formButton" onClick={() =>
        setShow(true)}
    >Save</button>
    <Modal title="Modal Title"
        onClose={() => setShow(false)} show={show}>
        <p>Modal Body</p>
    </Modal>
</div>

```
Enter your Title into "Modal Title", and your message into \<p>Modal Body\</p>
Show the modal when you click on the submit button.

**3 possibilities to close the modal:**
- modal close button
- escape keyboard key
- when you click outside the modal
