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
	  {list.map((item, i)=>(<ContactItem key={item.id} item={item}/>))}
	</div>
  )
}

export default ContactList