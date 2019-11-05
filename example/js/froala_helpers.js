var original_helpers = $.FE.MODULES.helpers;
// FIX https://github.com/froala/wysiwyg-editor/issues/1235
$.FE.MODULES.helpers = function (editor) {
    var helpers = original_helpers(editor);

    //var isURL = helpers.isURL();

    // This is the original sanitizer.
    helpers.sanitizeURL = function (url) {
        return url;
        if (/^(https?:|ftps?:|)\/\//i.test(url)) {
            if (!isURL(url) && !isURL('http:' + url)) {
                return '';
            }
        }
        else {
            url = encodeURIComponent(url)
                .replace(/%23/g, '#')
                .replace(/%2F/g, '/')
                .replace(/%20/g, ' ')
                .replace(/%25/g, '%')
                .replace(/mailto%3A/gi, 'mailto:')
                .replace(/file%3A/gi, 'file:')
                .replace(/sms%3A/gi, 'sms:')
                .replace(/tel%3A/gi, 'tel:')
                .replace(/notes%3A/gi, 'notes:')
                .replace(/data%3Aimage/gi, 'data:image')
                .replace(/blob%3A/gi, 'blob:')
                .replace(/webkit-fake-url%3A/gi, 'webkit-fake-url:')
                .replace(/%3F/g, '?')
                .replace(/%3D/g, '=')
                .replace(/%26/g, '&')
                .replace(/&amp;/g, '&')
                .replace(/%2C/g, ',')
                .replace(/%3B/g, ';')
                .replace(/%2B/g, '+')
                .replace(/%40/g, '@')
                .replace(/%5B/g, '[')
                .replace(/%5D/g, ']')
                .replace(/%7B/g, '{')
                .replace(/%7D/g, '}');
        }

        return url;
    };

    return helpers;
} 