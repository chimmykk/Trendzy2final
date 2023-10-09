"use client"

import dynamic from 'next/dynamic'

const Display = dynamic(
    () => import('./Display'),
    {ssr: false})

const IndexPage = () => {
    return (
        <>
            <Display/>
        </>
    )
}

export default IndexPage