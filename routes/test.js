const Orchestrator = require('./orchestrator')

orch = new Orchestrator( 'koreatogether','admin', 'password', 'https://platform.uipath.com/koreatogether/koreatogether/')
let robotId = orch.getRobotId( '개발로봇');
console.log(robotId)
let relKey = orch.getReleaseKey('사용자정보출력');
console.log(relKey)
let job = orch.startJob( { startInfo: {
                        ReleaseKey : `${relKey}`,
                        Strategy: 'Specific',
                        RobotIds: [ parseInt(`${robotId}`)],
                        Source: 'Manual'
                    } });
console.log(job)