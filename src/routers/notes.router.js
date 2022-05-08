const {Router} = require("express");
const notesCrtl = require("../controllers/notes.controller");
const {isAuthenticated} = require("../helpers/auth");

const router = Router();

router.get("/notes/add", isAuthenticated, notesCrtl.renderNoteForm);

router.post("/notes/new-note", isAuthenticated, notesCrtl.createNewNote);

router.get("/notes", isAuthenticated, notesCrtl.renderNotes);

router.get("/notes/edit/:id", isAuthenticated, notesCrtl.renderEditForm);

router.put("/notes/edit/:id", isAuthenticated, notesCrtl.updateNote);

router.delete("/notes/delete/:id", isAuthenticated, notesCrtl.deleteNote);

module.exports = router; 