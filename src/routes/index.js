const { Router } = require('express');
const router = Router() 

router.get('/test', (req, res) => {
    const data = {
        "name": "Daniel",
        "website": "danikyo"
    };
    res.json({data});
});

module.exports = router;