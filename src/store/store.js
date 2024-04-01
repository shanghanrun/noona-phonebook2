import {create} from 'zustand'
import {v4} from 'uuid';

export const useContact = create((set)=>({
	contactList:[],
	filteredList:[],
	keyword:'',
	addContact:({name,phoneNumber})=>set((state)=>({contactList: [...state.contactList, {id: v4(), name,phoneNumber}]})),
	removeContact:(id) =>set((state)=>({contactList: state.contactList.filter((item)=> item.id !== id)})),
	search:(keyword) =>set((state)=>({
		keyword,
		filteredList: state.contactList.filter((item)=> item.name.includes(keyword) || item.phoneNumber.includes(keyword))})),
	editContact:(id, name, phoneNumber)=>set((state)=>{
		const updatedList = state.contactList.map((item)=>{
			if(item.id ===id){
				return {...item, name,phoneNumber}
			} else{
				return item;
			}
		});
		return {contactList: updatedList}
	})
}))