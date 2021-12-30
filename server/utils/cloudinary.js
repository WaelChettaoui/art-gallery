const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'eyasf', 
    api_key: '891349526521339', 
    api_secret: 'UX4UQTVUw-u22a1jDWv-B4u4xUI' 
  });

module.exports = cloudinary;