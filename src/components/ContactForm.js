import React, {useRef} from 'react'
import {Form, Button} from 'react-bootstrap';
import { useContact } from '../store/store';

const ContactForm = () => {
	const {addContact} = useContact()
	const nameRef = useRef()
	const phoneRef = useRef()
	function handleOnSubmit(e){
		e.preventDefault();
		const name = nameRef.current.value
		const phoneNumber = phoneRef.current.value
		console.log('name, phoneNumber :', name, phoneNumber)
		addContact({name, phoneNumber})

		nameRef.current.value = ''
		phoneRef.current.value= ''
	}
  return (
	<div>
		<Form onSubmit={handleOnSubmit}>
			<Form.Group className="mb-3" controlId="formName">
				<Form.Label>이름</Form.Label>
				<Form.Control type="text" ref={nameRef} placeholder="이름을 입력해주세요" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formContact">
				<Form.Label>전화번호</Form.Label>
				<Form.Control type="number" ref={phoneRef} placeholder="전화번호를 입력해주세요" />
			</Form.Group>
			<Button variant="primary" type="submit">
				추가
			</Button>
		</Form>
	</div>
  )
}

export default ContactForm
