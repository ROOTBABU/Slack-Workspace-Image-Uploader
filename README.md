# Slack Workspace Image Uploader

This repository contains a Node.js script for automating the process of uploading images to a Slack workspace.

## Getting Started

To get started with the image uploader script, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/ROOTBABU/Slack-Workspace-Image-Uploader.git
    ```

2. Install the required dependencies using npm:

    ```bash
    npm install
    ```

3. Configure the script by editing the `config` object in the `index.js` file. Replace the `workspaceUrl` with your Slack workspace URL and provide a valid Slack API token in the `token` field. You can obtain the token from the API by signing in to your workspace through the browser.

4. Add the images you want to upload to the `images` directory within the repository.

5. Run the script using the following command:

    ```bash
    node profile-change.js
    ```

## Usage

The script will upload images from the `images` directory to your Slack workspace. You can customize the list of images and the upload frequency by modifying the `imageFilenames` array and adjusting the sleep duration in the `processImages` function.
