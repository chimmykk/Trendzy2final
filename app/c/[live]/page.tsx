import Audience from "./indexChannel";

interface UserLive {
  userlive: {
    channelName: string;
    // Add other properties as needed
  };
}


// export async function generateStaticParams() {
//   const response = await fetch('https://trendzy2.vercel.app/api/flow/postget');
//   const data = await response.json();

//   return data.data.map((item: UserLive[]) => ({
//     live: item[0]?.userlive.channelName.toString()
//   }));
// }


// interface StreamParams {
//   params: {
//     live: string;
//   };
// }

export default async function Stream() {

  
  return (
    <div className="pl-64">
      <h1>hi </h1>
      <Audience channelName={"qwerty"}/>
    </div>
  )
}
