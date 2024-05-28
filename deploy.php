<?php

/**
 * GIT DEPLOYMENT SCRIPT
 *
 */
// The commands
$commands = array(
    'cd /var/www/scanned.page/',
    'echo $PWD',
    'whoami',
    'git reset --hard HEAD',
    '/bin/git pull',
    'git status',
    'git submodule sync',
    'git submodule update',
    'git submodule status',
);
// Run the commands for output
$output = '';
foreach ($commands as $command) {
    // Run it
    $tmp = exec($command);
    // Output
    $output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
    $output .= htmlentities(trim($tmp)) . "\n";
}
// Make it pretty for manual user access (and why not?)
?>
<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>GIT DEPLOYMENT SCRIPT</title>
</head>

<body style="background-color: #000000; color: #FFFFFF; font-weight: bold; padding: 0 10px;">
    <pre>
 ____________________________
|                            |
| Git Deployment Script      |
|                            |
|____________________________|

<?php echo $output; ?>
</pre>
</body>

</html>