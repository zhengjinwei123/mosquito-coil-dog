function TestPlugin() {}
TestPlugin.prototype.apply = function(PluginManager) {
		PluginManager.plugin(PluginManager.EVENTS.TASK_COMPLETE, function(Context, cb) {
			//console.log('TASK_COMPLETE');
			cb();	// 一定要记得回调，否则请求会一直无法结束
    });
}

module.exports = new TestPlugin();
