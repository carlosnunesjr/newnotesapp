const notesCrtl = {};

const Note = require("../models/Note");

notesCrtl.renderNoteForm = (req, res) => {
        res.render("notes/new-note");
    };

notesCrtl.createNewNote = async (req, res) => {
        const {title, description} = req.body;
        const newNote = new Note({title, description});
        newNote.user = req.user.id;
        await newNote.save();
        req.flash("success_msg", "Note added successfully");
        res.redirect("/notes");
    };

notesCrtl.renderNotes = async (req, res) => {
        const notes = await Note.find({"user": req.user.id});
        res.render("notes/all-notes", {notes});
    };

notesCrtl.renderEditForm = async (req, res) => {
        const note = await Note.findById(req.params.id);

        if(note.user != req.user.id){
            req.flash("error_msg", "Not Authorized");
            return res.redirect("/notes");
        }

        res.render("notes/edit-note", {note});
    };

notesCrtl.updateNote = async (req, res) => {
        const {title, description} = req.body; 
        await Note.findByIdAndUpdate(req.params.id, {title, description} );
        req.flash("success_msg", "Note updated successfully");
        res.redirect("/notes");
    };   
    
notesCrtl.deleteNote = async (req, res) => {
        await Note.findByIdAndDelete(req.params.id);
        req.flash("success_msg", "Note removed successfully");
        res.redirect("/notes");
    };      

module.exports = notesCrtl;