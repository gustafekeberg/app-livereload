var libs = {
	portal: require('/lib/xp/portal'),
};

exports.responseFilter = function (req, res) {

	var config = libs.portal.getSiteConfig();
	var enabled = config.enable;
	var mode = req.mode;

	// Only run if enabled and not in edit mode
	if (enabled && mode !== 'edit')
		return filter (req, res, config);
	else
		return res;
};

function filter (req, res, config) {
	var port = config.port ? config.port : "35729";
	var host = config.host;
	var liveReloadScript = "<script>document.write('<script src=\"" +
	( host || "http://' + location.host.split(':')[0] + '" ) +
	":" + port + "/livereload.js?snipver=1\"></'" +
	"+ 'script>')</script>";

	var bodyEnd = res.pageContributions.bodyEnd;
  if (!bodyEnd) {
    res.pageContributions.bodyEnd = [];
  }
  if (typeof bodyEnd == 'string') {
      res.pageContributions.bodyEnd = [ bodyEnd ];
  }
  res.pageContributions.bodyEnd.push(liveReloadScript);

  if (req.params.debug === 'true') {
      res.applyFilters = false; // skip other filters
  }
  return res;
}
