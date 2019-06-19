var express = require('express');
const Orchestrator = require('./orchestrator');
var router = express.Router();

var MY_TENANT_ID = 77469;
var MY_QUEUE = 'TestQueue';

var orch = new Orchestrator('koreatogether', 'admin', '1234Qwer', 'https://platform.uipath.com/koreatogether/koreatogether/')



/* POST log webhook request . */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.sendStatus(202);

    let type = req.body['Type']
    let tenant = req.body['TenantId']
    if( tenant == MY_TENANT_ID) {
        if( type == 'queueItem.added' && req.body['Queue']['Name'] == MY_QUEUE) {
            //start new job hello world 
	    console.log('startJob called');
            let job = orch.startJob( '사용자정보출력', '개발로봇', {
                                'startInfo': {
                                    'ReleaseKey' : '534f940d-2e60-4675-a721-e51916c41989',
                                    'Strategy': 'Specific',
                                    'RobotIds': [127299],
                                    'NoOfRobots': 0,
                                    'JobsCount': 0
				} });

	   console.log( job);
        }
    }
});

module.exports = router;
