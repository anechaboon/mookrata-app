'use client'
import Link from 'next/link';
export default function Page(){

    return (
        <>
            <div className='px-6'>Promotion</div>
            <div className='px-6 py-4'>
                <Link href={'/manage'}>Back</Link>
            </div>
        </>
    )
}