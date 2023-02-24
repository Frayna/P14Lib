# React modal component

[![npm version](https://badge.fury.io/js/p14lib.svg)](https://badge.fury.io/js/p14lib)

A accessible modal dialog component for React.JS

## Installation

```sh
npm install p14lib
```

## Usage

```js
import React from 'react';
import { Modal } from 'p14lib';

export default function Index() {
	const [opened, setOpened] = useState(false);

	return (
		<Modal styles={{body: {backgroundColor: '#000', color: '#FFF'}}} opened={opened} onClose={() => setOpened(false)}>
			<p style={{margin:'8px 6px'}}>Modal opened !</p>
		</Modal>
	);
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `opened` | `boolean` | `false` | If `true`, the modal is open |
| `onClose` | `function` | `() => {}` | Callback fired when the component requests to be closed. |
| `title` | `ReactNode or undefined` | `undefined` | Modal title |
| `styles.root` | `object` | `{}` | Styles to apply to the modal |
| `styles.overlay` | `object` | `{}` | Styles to apply to the modal overlay |
| `styles.content` | `object` | `{}` | Styles to apply to the modal content |
| `styles.close` | `object` | `{}` | Styles to apply to the modal close button |
| `styles.title` | `object` | `{}` | Styles to apply to the modal title |
| `styles.body` | `object` | `{}` | Styles to apply to the modal body |
| `styles.header` | `object` | `{}` | Styles to apply to the modal header |
