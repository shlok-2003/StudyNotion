import cloudinary from 'cloudinary';
const cloud = cloudinary.v2;

export const uploader = async (file, folder, height, quality = 100) => {
    const options = { folder, resource_type: 'auto', quality };
    if (height) {
        options.height = height;
    }

    return await cloud.uploader.upload(file.tempFilePath, options);
};
