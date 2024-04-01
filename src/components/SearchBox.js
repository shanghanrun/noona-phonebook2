import React, { useRef } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { useContact } from '../store/store'

const SearchBox = () => {
	const {search} = useContact()
	const searchRef = useRef()
	function handleOnSubmit(e){
		e.preventDefault();
		const keyword = searchRef.current.value;
		search(keyword)
		searchRef.current.value =''
	}
  return (
	<Form onSubmit={handleOnSubmit} className="search-form">
		<Row>
			<Col lg={9}>
				<Form.Control type="text" ref={searchRef} placeholder="빈 검색은 전체목록을 보여줍니다." />
			</Col>
			<Col lg={3}>
				<Button variant="primary" type="submit">찾기</Button>
			</Col>
		</Row>
	</Form>
  )
}

export default SearchBox