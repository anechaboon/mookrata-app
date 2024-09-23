'use client'

import {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link';
async function getProducts() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product`)
        return response
    } catch (error) {
        console.log(`🚀 log:error`,error )
    }
}

export default function Page(){
    const [products, setProducts] = useState([])
    const initProducts = async () => {
        try {
            const result = await getProducts()
            setProducts(result.data.data)
        } catch (error) {
            console.log(`🚀 log:error`,error )
        }
    }
    useEffect(() => {
        initProducts()
    }, [])


    return (
        <div>
            <div className='px-6'>Product</div>
            <table className='w-auto'>
                <thead>
                    <tr>
                    <th className="text-md px-6 py-3">Name</th>
                    <th className="text-md px-6 py-3">Weight</th>
                    <th className="text-md px-6 py-3">Price</th>
                    <th className="text-md px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                    <tr key={item.id}>
                        <td className="text-md px-6 py-3">{item.name}</td>
                        <td className="text-md px-6 py-3">{item.weight}</td>
                        <td className="text-md px-6 py-3">{item.price}</td>
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