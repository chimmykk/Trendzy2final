

"use client"

import dynamic from 'next/dynamic'

const VideoCallUI = dynamic(
    () => import('./stream'),
    {ssr: false})

const IndexPage = () => {
    return (
        <>
            <VideoCallUI/>
        </>
    )
}

export default IndexPage