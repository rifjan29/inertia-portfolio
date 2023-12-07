// CKEditorComponent.jsx
import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { usePage } from '@inertiajs/react';

const WysiwygEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const { errors } = usePage().props;

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setData(value);
    }
  }, [value]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    onChange(data);
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={handleEditorChange}
        ref={editorRef}
      />
      {errors && errors.content && (
        <div className="text-red-500">{errors.content}</div>
      )}
    </div>
  );
};

export default WysiwygEditor;
