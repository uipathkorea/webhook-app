var express = require('express');
const Orchestrator = require('./orchestrator');
var router = express.Router();

var MY_TENANT_ID = 77469;
var MY_QUEUE = 'TestQueue';

//사용가능한 Orchestrator 및 테넌트 정보로 변경 필요 
var orch = new Orchestrator('koreatogether', 'admin', 'password', 'https://platform.uipath.com/koreatogether/koreatogether/')



/* POST log webhook request . */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.sendStatus(202);

    let type = req.body['Type']
    let tenant = req.body['TenantId']
    if( tenant == MY_TENANT_ID) {
        if( type == 'queueItem.added' && req.body['Queue']['Name'] == MY_QUEUE) {
            //start new job hello world 
            let relKey = orch.getReleaseKey('사용자정보출력'); // 해당 Tenant에 정의한 프로세스 이름 
            let robotId = orch.getRobotId('개발로봇'); // 로봇 이름 
            console.log('startJob called');
            let job = orch.startJob( { startInfo: {
                                    ReleaseKey : `${relKey}`,
                                    Strategy: 'Specific',
                                    RobotIds: [ parseInt(`${robotId}`)],
                                    Source: 'Manual'
				                } });

	   console.log( job);
        }
    }
});

module.exports = router;
