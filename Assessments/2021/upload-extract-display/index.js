const appContainer = document.getElementById("container");
const fileInput = document.getElementById("file-input");
const fileInputButton = document.getElementById("file-input-button");
let fileList = document.getElementById("file-list");
let entries;
let selectedFile;
fileInput.onchange = selectFile;
fileInputButton.onclick = () => fileInput.dispatchEvent(new MouseEvent("click"));

var drag_and_drop = document.getElementById("drag-and-drop");
        
drag_and_drop.ondragover = function(e) {
    e.preventDefault()
    drag_and_drop.style.borderColor = "#ffff00"
    drag_and_drop.style.color = "#ffff00"
}
drag_and_drop.ondragleave = function(e) {
    drag_and_drop.style.borderColor = "#fff"
    drag_and_drop.style.color = "#fff"
}
drag_and_drop.ondrop = async function(e) {
    e.preventDefault();
    drag_and_drop.style.borderColor = "#fff"
    drag_and_drop.style.color = "#fff"
        var entry = e.dataTransfer.items[0].getAsFile();
        var zip = entry.name.match(/\.zip/);
            if(zip){
                try {
                    fileInputButton.disabled = true;
                    selectedFile = entry;
                    await loadFiles();
                } catch (error) {
                    alert(error);
                } finally {
                    fileInputButton.disabled = false;
                    fileInput.value = "";
                }
            } else {
                alert('Please upload a .zip file')
            }
}

async function selectFile() {
    try {
        fileInputButton.disabled = true;
        selectedFile = fileInput.files[0];
        await loadFiles();
    } catch (error) {
        alert(error);
    } finally {
        fileInputButton.disabled = false;
        fileInput.value = "";
    }
}

async function loadFiles(filenameEncoding) {
    entries = await model.getEntries(selectedFile, { filenameEncoding });
    if (entries && entries.length) {
        fileList.classList.remove("empty");
        refreshList();
    }
}

function refreshList() {
    const newFileList = fileList.cloneNode();
    entries.forEach(async (entry, entryIndex) => {
        const uri = await entry.getData(new zip.Data64URIWriter());
        const div = document.createElement("div");
        const filenameContainer = document.createElement("span");
        const filename = document.createElement("img");
        div.classList.add("filename-container");
        if (!entry.directory) {
        div.appendChild(filenameContainer);
        filename.src = uri
        filename.classList.add("filename");
        filename.dataset.entryIndex = entryIndex;
        filename.textContent = filename.title = entry.filename;
        }
        filenameContainer.appendChild(filename);
        newFileList.appendChild(div);
    });
    fileList.replaceWith(newFileList);
    fileList = newFileList;
}

//model for zip.js
var model = (function() {
    return {
        getEntries(file, options) {
            return (new zip.ZipReader(new zip.BlobReader(file))).getEntries(options);
        },
    };
})();