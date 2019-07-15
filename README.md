# webhook-app
Orchestrator Webhook Example 

# 사전 준비 단계 
1. www.nodejs.org 에서 Node JS를 설치합니다.

2. 해당 repository를 clone 받습니다. 
```
# git clone https://github.com/uipathkorea/webhook-app 
```
3. 필요한 패키지는 설치합니다. 
```
# npm install 
```
4. 서비스 포트를 변경 합니다. ( bin/www 파일) 
```
var port = normalizePort(process.env.PORT || '2024');
app.set('port', port);

```
5. 사용하자고 하는 webhook code를 선택합니다. (app.js) 
routes/webhook.js는 특정 Queue에 데이터가 들어오면 이 Queue를 처리하는 프로세스를 실행시키는 예제이며, 
routes/webhook_noti.js 는 Schedule에 의해서 실행된 프로세스가 종료되면 종료 결과를 알려주는 새로운 프로세스를 실행하는 예제입니다. 
```
  7 var indexRouter = require('./routes/index');
  8 var usersRouter = require('./routes/users');
  9 var webhookRouter = require('./routes/webhook.js');  
  10 var webhookRouter = require('./routes/webhook_noti.js');  // 둘중 하나를 선택 
```
6. 실행시 nmp start로 webhook을 실행시킵니다.
```
# npm start 
```

7. Orchestrator 에서 webhook을 등록합니다. 이때 URL은 아래와 같은 패턴을 가져야 합니다. 
http://{webhoo_ip_address_or_domain_name}:{service_port}/webhook 

8. 환경에 맞게 webhook_noti.js 및 webhook.js를 수정하여 사용합니다. 
