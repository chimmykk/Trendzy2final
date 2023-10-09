
const fetchChannelName = async () => {
  try {
    const response = await fetch('https://trendzy2.vercel.app/api/flow/postget');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not in JSON format');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error gracefully, e.g., return a default value or show an error message.
    return { data: [] }; // Return an empty array or a suitable default value.
  }
};

export default async function ProfilePage() {
  const BannerData = await fetchChannelName();
  const channelNames: string[] = BannerData.data.map((item: { userlive: { channelName: string } }) => item.userlive.channelName);

  return (
    <div>
      {channelNames.map((channelName, index) => (
        <div key={index}>
          <span>hi {channelName}</span>
        </div>
      ))}
    </div>
  );
}
