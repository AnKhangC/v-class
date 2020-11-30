### Prerequisites
Before we get into how to navigate V-Class, here is an installation guide so that you can try the product for yourself.  

## Windows
The project uses git as a version control system. This simply means that the user needs to have git installed to have access to our project. You can verify if you have git installed by typing “git version” in the command line. If a version number appears, then git is already installed. If an error message relating to “unknown command” comes up, you need to download git. This can be done at the following link: https://git-scm.com/downloads. 

The app also needs Node.js and NPM to run the application. You can verify if you have these software the same way you did for git using “node -v” and “npm -v”. If any are missing please download Node.js which will install npm at the same time through the following link: https://nodejs.org/en/download/current/

*Note: The pictures in this installation guide are taken of “git bash”, which is an application layer which provides an emulation layer for git command line experience. This command line is automatically installed with git. However, the same steps can also be accomplished using the normal windows command line. 

## Mac and Linux
For mac and linux, git is installed by default. Please continue to the installation manual. 

The app also needs Node.js and NPM to run the application. You can verify if you have these software the same way you did for git using “node -v” and “npm -v”. If any are missing please download Node.js which will install npm at the same time through the following link: https://nodejs.org/en/download/current/

## Internet Browser
Our project should work on the internet browser of your choice. However, to make sure that the software works optimally, we recommend using either Google chrome or Firefox. They can be installed at the following links:

Google chrome: https://www.google.com/intl/en_ca/chrome/

Firefox: https://www.mozilla.org/en-CA/firefox/new/

### Installation Manual
1. To download v-class, first open up your command line. Then, enter the following command “git clone https://github.com/AnKhangC/v-class.git”. This will download our project to your computer. 

2. Navigate to the folder containing v-class using the following command: “cd v-class”. You are now in the project folder. 

3. Run the “npm install” command. This may take a little while as it is downloading all the required dependencies for the project to run (picture only shows part of the download as numerous dependencies are installed).

4. Once it has finished executing, run the “npm start” command, which should automatically open up the project in your default internet browser.
*Note: If you get an error, it probably means that your node / npm versions are not up to date. Please update their version. There are many ways to do so, the simplest is to update it through the Node installer by reinstalling Node.js (https://nodejs.org/en/download/current/).
5. You should see the page below open in your internet browser. You are now ready to use V-Class!
6. To close the V-Class, close the page in your internet browser and press “Ctrl + C” in your command line. 
