import fs from 'fs';
import path from 'path';

const livestreamingFolder = path.join(__dirname, 'livestreaming');

// Check if the livestreaming folder exists, and create it if it doesn't
if (!fs.existsSync(livestreamingFolder)) {
  fs.mkdirSync(livestreamingFolder);
  console.log('Livestreaming folder created successfully.');
}

export default async function handler(req, res) {
  try {
    console.log('Received request:', req.method, req.url);

    if (req.method === 'POST') {
      const { channelName, email, title, tags, visibility, name, thumbnail } = req.body;
      const copiedChannelName = name;
      console.log('Received channel name:', channelName);
      console.log('Received title', title);
      console.log('Received tags', tags);
      console.log('Received visibility', visibility);
      console.log('Received email:', email);
      
      const userlive = {
        channelName: copiedChannelName,
        email,
        timestamp: new Date().toISOString(),
        title,
        tags,
        visibility,
        thumbnail
      };

      const logData = {
        userlive,
      };

      const filePath = path.join(livestreamingFolder, `${email}.json`);

      if (fs.existsSync(filePath)) {
        const existingData = JSON.parse(fs.readFileSync(filePath));
        const newData = existingData.map(item => {
          if (item.userlive.email === email) {
            return logData;
          }
          return item;
        });

        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
        res.status(200).json({ message: 'Channel name and email updated successfully' });
      } else {
        fs.writeFileSync(filePath, JSON.stringify([logData], null, 2));
        res.status(200).json({ message: 'Channel name and email logged successfully' });
      }
    } else if (req.method === 'GET') {
      const files = fs.readdirSync(livestreamingFolder);
      const responseData = [];

      for (const file of files) {
        if (file.endsWith('.json')) {
          const filePath = path.join(livestreamingFolder, file);
          const jsonData = JSON.parse(fs.readFileSync(filePath));
          responseData.push(jsonData);
        }
      }

      res.status(200).json({ data: responseData });
    } else {
      const notAllowedResponse = {
        message: 'Method not allowed.',
      };

      res.status(405).json(notAllowedResponse);
    }
  } catch (error) {
    console.error('An error occurred while processing the request:', error);
    res.status(500).json({ message: 'An error occurred while processing the request.' });
  }
}
