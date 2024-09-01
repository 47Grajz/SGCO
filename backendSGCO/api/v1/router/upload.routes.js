const express = require('express');
const router = express.Router();
const upload = require('../../../middlewares/multer');
const cloudinary = require('../../../utils/cloudinary');


router.post('/', upload.single('image'), (req, res) => {
    console.log('uploading image');
    if (req.file) {
        cloudinary.uploader.upload(req.file.path, (err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message, success: false });
            }
            res.status(200).json({
                success: true,
                url: result.secure_url,
                format: result.format,
                publicId: result.public_id,
                // data: result,
                message: 'Image uploaded successfully'
            });
        });
    }
    else {
        res.status(500).json({ message: 'No image file found', success: false });
    }
});
//Not implemented yet
router.delete('/:id', async (req, res) => {
    try {
        // Get the user
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        // Get the public ID of the image
        const publicId = user.image.split('/').pop().split('.')[0];

        // Delete the image from Cloudinary
        const result = await cloudinary.uploader.destroy(publicId);

        // Remove the image URL from the user
        user.image = null;
        await user.save();

        res.json({
            success: true,
            message: 'Image deleted successfully',
            data: result
        });
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});

module.exports = router;