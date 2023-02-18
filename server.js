var browserInfo = {
  userAgent: navigator.userAgent,
  appName: navigator.appName,
  appCodeName: navigator.appCodeName,
  appVersion: navigator.appVersion,
  platform: navigator.platform,
  language: navigator.language,
  plugins: []
};

for (var i = 0; i < navigator.plugins.length; i++) {
  var plugin = navigator.plugins[i];
  var pluginInfo = {
    name: plugin.name,
    description: plugin.description,
    filename: plugin.filename
  };
  browserInfo.plugins.push(pluginInfo);
}

console.log(browserInfo);
