

"use client"

import dynamic from 'next/dynamic'

const ChannelPage = dynamic(
    () => import('./Parent'),
    {ssr: false})

const IndexPages = ({channelName}: {channelName: string}) => {
    return (
        <>
            <ChannelPage channelName={channelName}/>
        </>
    )
}

export default IndexPages 