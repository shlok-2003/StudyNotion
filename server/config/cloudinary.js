import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const cloudConnect = () => {
    try {
        cloudinary.v2.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API,
            api_secret: process.env.CLOUD_API_SECRET,
            secure: true,
        });

        console.log(chalk.blue('Cloudinary connected'));
    } catch (err) {
        console.log(chalk.red('Error in connecting cloudinary'));
    }
};

export default cloudConnect;
