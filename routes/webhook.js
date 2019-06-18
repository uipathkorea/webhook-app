var express = require('express');
const Orchestrator = require('./orchestrator');
var router = express.Router();

var MY_TENANT_ID = 77469;
var MY_QUEUE = 'TestQueue';

var orch = new Orchestrator('koreatogether', 'admin', '', 'https://platform.uipath.com/koreatogether/koreatogether/')
/* POST log webhook request . */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.sendStatus(202);

    let type = req.body['Type']
    let tenant = req.body['TenantId']
    if( tenant == MY_TENANT_ID) {
        if( type == 'queueItem.added' && req.body['Queue']['Name'] == MY_QUEUE) {
            //start new job hello world 
            let job = orch.startJob( '사용자정보출력', '개발로봇', {
                                'startInfo': {
                                    'ReleaseKey' : undefined,
                                    'Strategy': 'All',
                                    'RobotIds': [],
                                    'NoOfRobots': 0,
                                    'JobCount': 0,
                                    'Source': 'Manual',
                                    'InputArgument': undefined
                                }
                            });
        }
    }
});

module.exports = router;