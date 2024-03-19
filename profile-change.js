const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const config = {
  workspaceUrl: '', // https://company.slack.com
  token: '', // xoxc-8472223830
};

const workspaceAxios = axios.create({
  baseURL: config.workspaceUrl,
  headers: {
    'Cookie': '', // d=xoxd-
    'Content-Type': 'multipart/form-data',
    // Add other common headers here
  },
});

const imageFilenames = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

async function preparePhoto(imageFilename) {
  try {
    const form = new FormData();
    form.append('token', config.token);
    form.append('image', fs.createReadStream(`assets/${imageFilename}`), {
      contentType: 'image/gif',
    });

    const response = await workspaceAxios.post('/api/users.preparePhoto', form);
    // console.log(response.data);

    // Extract the id from the response
    const id = response.data.id;
    console.log(id);
    // Call setPhoto with the obtained id
    await setPhoto(id);
  } catch (error) {
    console.error(error);
  }
}

async function setPhoto(id) {
  try {
    const form = new FormData();
    form.append('token', config.token);
    form.append('id', id);

    const response = await workspaceAxios.post('/api/users.setPhoto', form);
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Call the preparePhoto function to initiate the process
// preparePhoto();

// Loop through each image filename and run the process every 3 seconds
async function processImages() {
  let currentIndex = 0;
  while (true) {
    const currentItem = imageFilenames[currentIndex];
    await preparePhoto(currentItem);
    // await sleep(500); // Sleep for 500ms
    currentIndex = (currentIndex + 1) % imageFilenames.length; // Move to the next index, or wrap around if at the end
  }
}

// Utility function to introduce a delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the function to process images
processImages();
