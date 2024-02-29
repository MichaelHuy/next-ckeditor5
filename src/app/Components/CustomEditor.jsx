import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'alignment',
            '|',
            'outdent',
            'indent',
            '|',
            'insertImage',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'JustifyLeft',
            'JustifyCenter',
            'JustifyRight',
            'undo',
            'redo',
        ],
    },
    language: 'en',
    image: {
        toolbar: [
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'insertImage',
        ],
    }
};

function CustomEditor(props) {
    const { getDataEditor } = props
    return (
        <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data={props.initialData}
            onChange={(event, editor) => {
                const data = editor.getData();
                getDataEditor(data)
                console.log({ event, editor, data });
            }}
        />
    )
}

export default CustomEditor;