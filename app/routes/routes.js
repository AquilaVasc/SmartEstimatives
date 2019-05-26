var tasksArray = [
    {
        _id: '1',
        name: 'HTML Integration in Carroussel component',
        description: 'I will need to integrate code from front staff to the components and using cq:dialog information',
        tags:[{
            name: 'HTML',
            points: 1 
        }]
    },
    {
        _id: '2',
        name: 'Create dialog for Carroussel component',
        description: 'I will need to create a dialog and validate that dialog on aem environmentns',
        tags:[{
            name: 'cq:dialog',
            points: 1 
        }]
    },
    {
        _id: '1',
        name: 'Create Sling Model to retrieve the dialog information an treat It',
        description: 'I will need to create a Java Class Model based on sling to retrieve data from dialog',
        tags:[
            {
                name: 'Java Class',
                points: 1
            },
            {
                name: 'Sling Model',
                points: 1
            }
        ]
    },
    {
        _id: '1',
        name: 'Integrate AEM environment to mysql database',
        description: 'I will need to set up a osgi configuration to integrate an database to our environment and I will need to create the class to treat that',
        tags:[
            {
                name: 'jdbc',
                points: 2 
            },
            {
                name: 'mysql',
                points: 2 
            },
            {
                name: 'OSGI Configuration',
                points: 2 
            },
            {
                name: 'OSGI Configuration',
                points: 2 
            },
            {
                name: 'OSGI Configuration',
                points: 2 
            }
        ]
    }
]

module.exports = function(app) {
    var controller = app.controllers.algorithmia;

	app.get(['/', '/index'], function (req, res) {
        res.render('index', { 
            title: 'Express', user: {
              loggedIn: true
            }
        });
    });
    
    app.get('/timestamp', (request, response) => {
        response.send(`${Date.now()}`); 
    });
    
    app.get('/timestamp-cached', (request, response) => {
        response.send(`${Date.now()}`);
    });
    
    app.get('/autoTag', controller.autoTag);

    app.get('/sentimentAnalysis', controller.sentimentAnalysis);
    
    app.get('/myTasks', function(req, res) {
        res.render('myTasks', { 
            title: 'Express', 
            user: {
                loggedIn: false
            },
            tasks: tasksArray
        });
    });

    var mongoose = app.controllers.mongoose;

    app.get('/addTag', mongoose.addTag);
    
    app.get('/Task/:id', function(req, res) {
        res.render('task', { 
            title: `Task ${req.params.id}`, 
            user: {
                loggedIn: false
            },
            task: tasksArray.find(function(element){
                return element._id == req.params.id;
            })
        });
    });

    app.get('/createTask', function(req, res) {
        res.render('createTask', { 
            title: 'Task', 
            user: {
                loggedIn: false
            },
        });
    });

    app.get('/createTag', function(req, res) {
        res.render('createTag', { 
            title: 'Task', 
            user: {
                loggedIn: false
            },
        });
    });
}