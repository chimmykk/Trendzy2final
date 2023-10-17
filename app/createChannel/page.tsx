

"use client"

import dynamic from 'next/dynamic'

const CreateChannel = dynamic(
    () => import('./createChannel'),
    {ssr: false})

const IndexPage = ({submittedData}: {submittedData: any}) => {
    return (
        <>
            <CreateChannel submittedData={submittedData}/>
        </>
    )
}

export default IndexPage