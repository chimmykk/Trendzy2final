"use client"

import dynamic from 'next/dynamic'

const CreateChannel = dynamic(
    () => import('./createChannel'),
    {ssr: false})

const ChannelStream = () => {
    return (
        <>
            <CreateChannel />
        </>
    )
}

export default ChannelStream