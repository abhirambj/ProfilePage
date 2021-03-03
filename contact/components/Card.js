import React from 'react'
import Link from 'next/link';

function Card() {
    return (
        <div className="Card">
                <img src="/img/profile.jpg" className="profilePic" alt=""/>
                <h1>Magnus Carlsen</h1>
                <Link href="/user/all">
                <a>View Leads</a>
                </Link>
        </div>
    )
}

export default Card
