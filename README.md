# Enonic XP - LiveReload

Use this app to insert a JavaScript snippet on any site that points to your LiveReload watcher when developing in Enonic XP.

When using LiveReload there's no need to refresh your browser. The LiveReload script will automatically reload the browser for you when a file has changed.

For the script to work you need file system monitor that can detect changes in your files.

LiveReload should work in any JS-enabled browser that can connect to the file system monitor.

Browser plugins is normally to be preferred but if you leave the app enabled browsers without plugin will be refreshed too. You should not need to disable the app when using a browser with a LiveReload plugin.

## Installation and setup

- Install the app on your site
- Run a file system monitor
- You can override the `port` and `host` where LiveReload tries to connect to the file monitor
- The LiveReload JS-code is inserted on all pages unless when you are editing a page

## Some monitors

- [livereload](http://livereload.com)
- [guard-livereload](https://github.com/guard/guard-livereload)

## Screenshot

![Screenshot](/../screenshots/livereload-screenshot.jpg?raw=true "Screenshot")
