
import ChannelPage from "@/app/c/[live]/LiveRoom/dynamicIndex";

interface UserLive {
  userlive: {
    channelName: string;
    // Add other properties as needed
  };
}


export async function generateStaticParams() {
  const response = await fetch('https://testing-stream.onrender.com/');
  const data = await response.json();

  return data.data.map((item: UserLive[]) => ({
    live: item[0]?.userlive.channelName.toString()
  }));
}


interface StreamParams {
  params: {
    live: string;
  };
}

export default async function Stream({ params }: StreamParams) {
  const { live } = params
  
  return (
    <div className=""> 
      <ChannelPage channelName={live}/>
    </div>
  )
}
