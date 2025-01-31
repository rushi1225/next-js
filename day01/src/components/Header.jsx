import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div>
            <h1>Header Page</h1>

            <ul>
                <li>
                    <Link href="/"> Home </Link>
                </li>
                <li>
                    <Link href="/about"> About </Link>
                </li>
                <li>
                    <Link href="/contact"> contact </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
