const Router = require('koa-router');
const authCtrl = require('./auth.ctrl');

const auth = new Router();

auth.get('/', authCtrl.check);
auth.get('/list', authCtrl.list);
auth.get('/list/:id', authCtrl.checkObjectId, authCtrl.info);

auth.post('/login', authCtrl.login);
auth.post('/logout', authCtrl.logout);
auth.post('/join', authCtrl.join);
auth.delete('/:id', authCtrl.checkObjectId, authCtrl.remove);

module.exports = auth;