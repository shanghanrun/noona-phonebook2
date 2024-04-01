import React, { useEffect, useRef, useState } from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { useContact } from '../store/store'

const ContactItem = ({item}) => {
	const {removeContact, editContact} = useContact()
	const [isEditing, setIsEditing] = useState(false)
	const nameRef = useRef()
	const phoneRef = useRef()

	useEffect(() => {
        if (isEditing) {
            nameRef.current.focus();
        }
    }, [isEditing]);

	function remove(){
		removeContact(item.id)
	}
	function toggleEditing(){
		setIsEditing(!isEditing)
	}
	function saveChanges(){
		const newName = nameRef.current.textContent;
        const newPhoneNumber = phoneRef.current.textContent;
        editContact(item.id, newName, newPhoneNumber);
        toggleEditing();
	}
	function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            phoneRef.current.focus();
        }
    }
  return (
	<div className="card" style={{ background: 'rgba(135, 171, 244, 0.3)', marginBottom: '5px' }}>

		<Row>
		<Col lg={3}>
			<img width={100} src="https://tse2.mm.bing.net/th?id=OIP.CyWOZUh-iap_O46jmMhqKwHaHa&pid=Api&P=0&h=220" />
		</Col>
		<Col className="text" lg={3}>
			<div contentEditable={isEditing} ref={nameRef} onKeyDown={handleKeyDown}>{item.name}</div>
			<div contentEditable={isEditing} ref={phoneRef}>{item.phoneNumber}</div>
		</Col>
		<Col className="btn1" lg={3}>
			<Button variant="danger" onClick={remove}>삭제</Button>
		</Col>
		<Col className="btn2" lg={3}>
			{isEditing ? (
						<Button  variant="success" onClick={saveChanges}>저장</Button>
					) : (
						<Button variant="success" onClick={toggleEditing}>수정</Button>
					)}
		</Col>
		</Row>
	</div>
  )
}

export default ContactItem
