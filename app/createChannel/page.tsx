"use client"

import dynamic from 'next/dynamic'

const CreateChannel = dynamic(
    () => import('./createChannel'),
    {ssr: false})

export default function IndexPage ({submittedData}: {submittedData: any}) {
    return (
        <>
            <CreateChannel submittedData={submittedData}/>
        </>
    )
}