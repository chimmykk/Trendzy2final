"use client"

import dynamic from 'next/dynamic'

const CreateChannel = dynamic(
    () => import('./createChannel'),
    {ssr: false})

const ChannelStream = ({submittedData}: {submittedData: string}) => {
    return (
        <>
            <CreateChannel submittedData={submittedData}/>
        </>
    )
}

export default ChannelStream