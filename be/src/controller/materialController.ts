import httpStatus from 'http-status';
import Material from '../model/material';

const hello = async (req, res) => {
    try {
        const lead = await Material.find();
        res.status(httpStatus.OK).json(lead)
      } catch (e) {
        res.status(400).json({ message: 'Failed To Get Lead: ' + e.message, e })
      }
}

const csvUpload = async (req, res) => {
    try {
        let lead ;
        console.log('here', req.body);
        if(req.type === 'author') {
            lead = await Material.findOne({'email': req.body.email});
            if(lead){
                lead = await Material.updateOne(req.body);
                res.status(httpStatus.OK).json({ message: 'Author updated successfully'});
            }
            lead = await Material.create(req.body);
            res.status(httpStatus.OK).json({ message: 'Author created successfully'});
        }
        lead = await Material.create(req.body);
        res.status(httpStatus.OK).json({ message: `${req.body.type} created successfully`})
    } catch (e) {
    res.status(400).json({ message: 'Failed To create / update: ' + e.message, e })
    }
}

export default {
    hello,
    csvUpload
}