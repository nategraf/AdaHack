function onRequest(req, res) {
    // Remove our added tag
    req.Path = req.Path.replace('-you-did-not-rtfm', '');
}

function onResponse(req, res) {
    // Check if the response is an html document
    if (res.ContentType.indexOf("text/html") == 0) {
        // Add the tag 'you-did-not-rftm' to all images
        var body = res.ReadBody();
        res.Body = body.replace(
            /\.(jpg|jpeg|png|gif|bmp)/gi,
            '-you-did-not-rtfm.$1'
        );
    }
    // If the server is returning an image
    else if (res.ContentType.indexOf("image/jpeg") != -1) {
        // Remove any http headers
        headers = res.Headers.split("\r\n");
        for (var i = 0; i < headers.length; i++) {
            header_name = headers[i].replace(/:.*/, "");
            res.RemoveHeader(header_name);
        }
        res.SetHeader("Connection", "close");
        res.Status  = 200;

        // Return our cat pic!
        res.Body    = readFile("/home/nate/AdaHack/security/www/rtfm_cat.jpg");
        log("RTFM! " + req.Hostname + req.Path + ( req.Query ? "?" + req.Query : ''));
    }
}
