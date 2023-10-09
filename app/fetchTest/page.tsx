import { json } from "stream/consumers";

const fetchChannelName = async () => {
      const response = await fetch('https://trendzy2.vercel.app/api/flow/postget');
      const jsonData = await response.json();
      return jsonData
};

export default async function ProfilePage() {
  const jsonData = await fetchChannelName();
  console.log(jsonData)
  
        const channelNames = jsonData.data.map((item: { userlive: { channelName: any; }; }[]) => item[0].userlive.channelName);

const jsonDataString = JSON.stringify(jsonData, null, 2);

  return (
    <div>
      {channelNames.map((channelName, index) => (
        <div key={index}>
          <span>hi {channelName}</span>
        </div>
      ))}
       <pre>{jsonDataString}</pre>
    </div>
  );
}
