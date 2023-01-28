import { ReactNode } from 'react'
import React from 'react'
import '../styles.scss'

/**
 * Modal component that can be used to display a modal with a title, body, and close button.
 * @example
 * <Modal opened={opened} onClose={() => setOpened(false)} title="Employee Created!" styles={{
 *    title:{fontSize: '16px'}, 
 *    body:{display:flex}
 *  }}>
 * 		<p style={{margin:'8px 6px'}}>Employee Created!</p>
 * </Modal>
 * @param {boolean} opened Whether or not the modal is opened. (external boolean state variable)
 * @param {ReactNode} title The title of the modal.
 * @param {Function} onClose The function to call when the modal is closed. (setter of the external boolean state variable)
 * @param {ReactNode} children The body of the modal.
 * @param {Record<string, any>} styles The styles to apply to the modal and its elements.
 * @example
 * {
 * 	root: {display: 'flex', justifyContent: 'center', alignItems: 'center', {...}},
 * 	overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5), {...}'},
 * 	content: {backgroundColor: '#fff',boxShadow: '0 0 10px rgba(0, 0, 0, 0.5), {...}'},
 * 	close: {position: 'absolute', top: '8px', right: '8px', backgroundImage: 'url(https://....png)', {...}},
 * 	header: {display: 'flex', justifyContent: 'space-between', {...}},
 * 	title: {fontSize: '16px', {...}},
 * 	body: {display: 'flex', flexDirection: 'column', {...}}
 * }
 * @returns {JSX.Element | ReactFragment} The modal component.
**/

export function Modal({opened, title, onClose, children, styles}: {opened: boolean, title?: ReactNode, onClose: Function, children?: ReactNode, styles?: Record<'root' | 'overlay' | 'content' | 'close' | 'header' | 'title' | 'body', React.CSSProperties>}) {
	return (opened ?
			<div className="modal" style={styles && styles.root ? styles.root : undefined}>
				<div className="modal__overlay" style={styles && styles.overlay ? styles.overlay : undefined} onClick={() => onClose()}></div>
				<div className="modal__content" style={styles && styles.content ? styles.content : undefined}>
					<div className="modal__close" style={styles && styles.close ? styles.close : undefined} onClick={() => onClose()}>
					</div>
					<div className="modal__header" style={styles && styles.header ? styles.header : undefined}>
						{title && <h2 className="modal__title" style={styles && styles.title ? styles.title : undefined}>{title}</h2>}
					</div>
					<div className="modal__body" style={styles && styles.body ? styles.body : undefined}>
						{children}
					</div>
				</div>
			</div> : <></>
		)
	}