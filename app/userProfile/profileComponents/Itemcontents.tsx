import About from "./About";


interface ItemContentsProps {
  activeTab: string; // Change the type as needed
  name: string;
}

export default function ItemContents({ activeTab , name}: ItemContentsProps) {
  let content = null;

  // Check the value of activeTab and set the content accordingly
  if (activeTab === 'About') {
  content = (
    <About name={name}/>
  );
}
 else if (activeTab === 'Livestreams') {
    content = (
      <div>
        <h3>Livestreams</h3>
        <p>Show past livestreams.</p>
      </div>
    );
  } else if (activeTab === 'Products') {
    content = (
      <div>
        <h3>Schedule</h3>
        <p>This is the Schedule section content.</p>
      </div>
    );
  } else if (activeTab === 'Schedule') {
    content = (
      <div>
        <h3>Reviews</h3>
        <p>This is the Reviews section content.</p>
      </div>
    );
  } else if (activeTab === 'Reviews') {
    content = (
      <div>
        <h3>Reviews</h3>
        <p>This is the Reviews section content.</p>
      </div>
    );
  }

  return <div className=" py-6">{content}</div>;
}
