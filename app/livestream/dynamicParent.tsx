
"use client"

import dynamic from 'next/dynamic'

const Lives = dynamic(
    () => import('./Parent'),
    {ssr: false})

const IndexPages = () => {
    return (
        <>
            <Lives />
        </>
    )
}

export default IndexPages 