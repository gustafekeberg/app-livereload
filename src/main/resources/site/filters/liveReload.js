var libs = {
	portal: require('/lib/xp/portal'),
	content: require('/lib/xp/content'),
	thymeleaf: require('/lib/xp/thymeleaf'),
};

exports.responseFilter = function (req, res) {

	var config = libs.portal.getSiteConfig();
	var enable = config.enable;
	var mode = req.mode;
	var port = config.port ? config.port : "35729";

	// Only run if enabled and not in edit mode
	if (!enable || mode == 'edit')
		return res;
	
	var liveReloadScript = "<script>document.write('<script src=\"http://'" +
	"+ location.host.split(':')[0]" +
	"+ ':" + port + "/livereload.js\"></'" +
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
};
