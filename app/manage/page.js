'use client'
import Link from 'next/link';
export default function Page(){

    return (
        <div>
            <div class="flex flex-wrap">
                <div class="w-full px-3 py-2">
                    <Link href={'/users'}>User</Link>
                </div>
                <div class="w-full px-3 py-2">
                    <Link href={'/product'}>Product</Link>
                </div>
                <div class="w-full px-3 py-2">
                    <Link href={'/promotion'}>Promotion</Link>
                </div>
            </div>
        </div>
    )
}