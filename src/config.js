var config = {};

config.chrome_filepath = '/usr/bin/google-chrome-stable';
config.chrome_launch_flags = '--remote-debugging-port=9222 --no-first-run  --no-default-browser-check 2> browser.log &';
config.page_reload_timeout = 5000 // in ms

module.exports = config
