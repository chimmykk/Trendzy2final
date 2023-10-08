"use client"

import dynamic from 'next/dynamic'

const StartStream = dynamic(
    () => import('./startStream'),
    {ssr: false})

const IndexPage = () => {
    return (
        <>
            <StartStream/>
        </>
    )
}

export default IndexPage