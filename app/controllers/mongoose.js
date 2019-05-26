module.exports = function(app) {
    var Tag = app.models.tag;

    var controller = {};

    controller.addTag = function(req, res) {
        var tag = new Tag({
            name: 'Java',
            points: '4'
        });

        tag.save(function(err) {
            if(err) {
                console.log(err);
                res.redirect('/');
            } else {
                console.log(tag);
                res.redirect('/');
            }
        });
    };

    return controller;
}