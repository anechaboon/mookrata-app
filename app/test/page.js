'use client'

import {useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = 'https://66e9a62b87e41760944a4876.mockapi.io'

async function getUsers() {
    try {
        const response = await axios.get(`${BASE_URL}/users`)
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
            setUsers(result.data)
        } catch (error) {
            console.log(`🚀 log:error`,error )
        }
    }
    useEffect(() => {
        initUsers()
    }, [])

    return (
        <div>
            Test Page Get Users
            {
                users.map((user, index) => (
                    <div key={index}>
                        {user.id} - {user.full_name}
                    </div>
                )) 
            }
        </div>
    )
}