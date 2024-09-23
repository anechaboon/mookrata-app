'use client'

import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link';
async function getUsers() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user`)
        return response
    } catch (error) {
        console.log(`🚀 log:error`,error )
    }
}

export default function Page(){
    const [users, setUsers] = useState([])
    const initUsers = async () => {
        try {
            const result = await getUsers()
            setUsers(result.data.data)
        } catch (error) {
            console.log(`🚀 log:error`,error )
        }
    }
    useEffect(() => {
        initUsers()
    }, [])


    return (
        <div>
            <div className='px-6'>User</div>
            <table className='w-auto'>
                <thead>
                    <tr>
                    <th className="text-md px-6 py-3">Name</th>
                    <th className="text-md px-6 py-3">Telephone</th>
                    <th className="text-md px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                    <tr key={item.id}>
                        <td className="text-md px-6 py-3">{item.full_name}</td>
                        <td className="text-md px-6 py-3">{item.telephone}</td>
                        <td className="text-md px-6 py-3">
                            <button className='px-2'>Edit</button>
                            <button className='px-2'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className='px-6 py-4'>
                <Link href={'/manage'}>Back</Link>
            </div>
        </div>
    )
}