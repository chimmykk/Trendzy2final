
const fetchChannelName = async () => {
    const response = await fetch('https://trendzy2.vercel.app/api/flow/postget');
    const data = await response.json();
    return data;
};

export default async function ProfilePage() {

      const BannerData = await fetchChannelName();
      const channelNames: string[] = BannerData.data.map((item: { userlive: { channelName: string; }; }[]) => item[0].userlive.channelName);

return(
                <div>
              {channelNames.map((channelName, index) => (
                <div key={index}>
                  <span>hi {channelName}</span>
                </div>
              ))}
            </div>
)
}