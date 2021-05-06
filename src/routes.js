const { addNoteHandler, getAllNotesHandler, getNoteByidHandler, editNoteByidHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [{
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,

    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByidHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByidHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;