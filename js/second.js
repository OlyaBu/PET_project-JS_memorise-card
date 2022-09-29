
document.addEventListener('DOMContentLoaded', () => {
const localNotes = JSON.parse(localStorage.getItem('localNotes'));
const text=document.getElementById("notes")

	renderNotes();

function renderNotes(){
        let content = '';
        let date = new Date();
        for (note of localNotes){
                content += `<div class="user_note">
                <img
                        src=${note.src}
                        alt=${note.card}
                        class="note_img"
                />
                <div class="note_date">
                ${date}
                </div>
                <div class="note_text">
                ${note}
                </div>`;

        text.innerHTML = content;
}
}

});
