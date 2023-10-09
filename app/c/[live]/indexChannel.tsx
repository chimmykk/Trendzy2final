
"use client"

import dynamic from 'next/dynamic'

const Audience = dynamic(
    () => import('./joinChannel'),
    {ssr: false})

const IndexPage = ({channelName}: {channelName: string}) => {
    return (
        <>
            <Audience channelName={channelName}/>
        </>
    )
}

export default IndexPage