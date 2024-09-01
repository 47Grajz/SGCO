const axios = require('axios');
const downloadImage = async (url) => {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    // console.log(response);
    return Buffer.from(response.data, 'binary');
};

module.exports = { downloadImage };