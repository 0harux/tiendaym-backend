const Router=require('express');
const router = Router();

// Import routes

// Status api endpoint
router.get('/api-status', (req,res)=> {
    res.send({'Status': 'on'});

});

// Use routes

module.exports = router;