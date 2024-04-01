import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useContact } from '../store/store'

const ContactList = () => {
	const {keyword, contactList, filteredList} =useContact()
	let list;
	if(keyword !==''){
		list = filteredList
	} else{
		list = contactList
	}
  return (
	<div>
	  <SearchBox />
	  <div className="num">num: {list.length}</div>
	  {list.map((item)=>(<ContactItem key={item.id} item={item}/>))}
	  {/* !! 삭제할 경우를 대비해서 key=index 안된다. */}
	</div>
  )
}

export default ContactList